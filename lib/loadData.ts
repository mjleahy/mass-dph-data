const { parse } = require('fast-csv');
const fs = require('fs');
const moment = require('moment');
const _ = require('lodash');

const LoadFile = async (filename): Promise<Array<any>> => {
    const rows = [];
    return new Promise((resolve, reject) => {
        fs.createReadStream(filename)
            .pipe(parse({ headers: true }))
            .on('data', row => rows.push(row))
            .on('end', () => resolve(rows))
    })
}

export const Hospitalizations = async (loadExtra: boolean) => {
    const main = await LoadFile('data/Hospitalization from Hospitals.csv');
    if (loadExtra) {
        const extra = await LoadFile('data/EarlyHospitalizations.csv');
        return extra.concat(main);
    } else {
        return main;
    }
}


export const DateOfDeath = async () => {
    return await LoadFile('data/DateofDeath.csv')
}

/**
 * Read Age.csv and reformat into and array of objects
 */
export const Age = async () => {
    const oldData: any[] = await LoadFile('data/Age-20200531.csv');
    const data: any[] = oldData.concat(await LoadFile('data/Age.csv'));
    const dataByDate = {};

    for (var i = 0; i < data.length; i++) {
        const cur = data[i];
        const rowDate = cur['Date'];

        // Create base object for day
        if (!(rowDate in dataByDate)) {
            dataByDate[rowDate] = { date: rowDate }
        }
        const age = cur['Age'];
        const a = {};
        a[age] = {
            cases: zeroIfParseFails(cur['Cases']),
            // hospitalized: zeroIfParseFails(cur['Hospitalized']),
            hospitalized: cur['Hospitalized'],
            deaths: zeroIfParseFails(cur['Deaths'])
        };
        Object.assign(dataByDate[cur['Date']], a);
    }

    // Now convert to array
    const rows = [];
    const keys = Object.keys(dataByDate);
    keys.map((key) => (
        rows.push(dataByDate[key])
    ))

    return rows;
}

/**
 * Will this comment work?
 */
const AgeGroupImp = async () => {
    const data = await LoadFile('data/Age.csv');
    const groups = [];

    data.map((values) => {
        if (!(groups.includes(values['Age']))) {
            groups.push(values['Age']);
        }
    })

    return groups;

}

export const AgeGroups = AgeGroupImp;

const zeroIfParseFails = (maybeInt) => {
    const a = parseInt(maybeInt);
    if (isNaN(a)) { return 0; }
    return a;
}

export const transformRoutine1 = async (fieldToGrab, fillMissingGroups) => {
    const age = await Age(); //{date, group: {cases, hospitalized, deaths}}
    const groups = await AgeGroups(); //['0-19', '20-29'...]
    const dailyTotals = []; // Array of {date, '0-19', '20-29',...}
    const data = []; // Array of {date, '0-19', '20-29',...}
    age.map((value) => {
        const newRow = { date: value['date'] };
        groups.map((group) => {
            if (!(group in value)) {
                if (fillMissingGroups) {
                    newRow[group] = 0;
                }
            } else {
                newRow[group] = parseInt(value[group][fieldToGrab]);
            }
        })
        dailyTotals.push(newRow);
    });

    //make sure we are sorted
    dailyTotals.sort((a, b) => {
        if (moment(a.date).isBefore(b.date)) {
            return -1;
        } else if (moment(a.date).isAfter(b.date)) {
            return 1;
        } else {
            return 0;
        }
    })

    for (var i = 1; i < dailyTotals.length; i++) {
        const newRow = { date: dailyTotals[i].date };
        groups.map((group) => {
            if (dailyTotals[i][group] != null) {
                newRow[group] = dailyTotals[i][group] - dailyTotals[i - 1][group];
            }
        })
        data.push(newRow);
    }
    return { props: { data, groups } }
}

export const LoadCasesByDate = async () => {
    const casesByDate = await LoadFile('data/CasesByDate.csv');
    const rows = [];
    for (var i = 0; i < casesByDate.length; i++) {
        rows.push(Object.assign(
            {
                'Total': parseInt(casesByDate[i]['Positive Total']) + parseInt(casesByDate[i]['Probable Total']),
                'New': parseInt(casesByDate[i]['Positive New']) + parseInt(casesByDate[i]['Probable New'])
            },
            casesByDate[i]))
    }

    return rows;
}

export const LoadTestingByDate: Object = async () => {
    const rawData: any[] = await LoadFile('data/TestingByDate.csv');
    const rows = [];
    for (var i = 0; i < rawData.length; i++) {
        rows.push(Object.assign(rawData[i], {
            Positive: parseInt(rawData[i]['Molecular Positive New']),
            New: parseInt(rawData[i]['Molecular New'])
        }))
    }
    return rows;
}