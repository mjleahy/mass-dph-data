const { parse } = require('fast-csv');
const fs = require('fs');

const LoadFile = async (filename) => {
    const rows = [];
    return new Promise((resolve, reject) => {
        fs.createReadStream(filename)
            .pipe(parse({ headers: true }))
            .on('data', row => rows.push(row))
            .on('end', () => resolve(rows))
    })
}

export const Hospitalizations = async () => {
    return await LoadFile('data/Hospitalization from Hospitals.csv');
}


export const DateOfDeath = async () => {
    return await LoadFile('data/DateofDeath.csv')
}

/**
 * Read Age.csv and reformat into and array of objects
 */
export const Age = async () => {
    const data = await LoadFile('data/Age.csv');
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
            hospitalized: zeroIfParseFails(cur['Hospitalized']),
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