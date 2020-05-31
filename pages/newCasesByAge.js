import Links from '../components/links'
import Head from 'next/head'
import ChartNewCasesByAge from '../components/charts/chartNewCasesByAge';
import { Age, AgeGroups } from '../lib/loadData';
const moment = require('moment');

export default function NewCasesByAge({ data, groups }) {
    return (
        <div className="container">
            <Head>
                <title>Daily Testing</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Links />
                <h1>New Cases By Age</h1>
                <ChartNewCasesByAge data={data} groups={groups} />
            </main>
        </div>
    )
}

export async function getStaticProps(context) {
    const age = await Age(); //{date, group: {cases, hospitalized, deaths}}
    const groups = await AgeGroups(); //['0-19', '20-29'...]
    const dailyTotals = []; // Array of {date, '0-19', '20-29',...}
    const data = []; // Array of {date, '0-19', '20-29',...}
    console.log(`age0: ${JSON.stringify(age[0])}`)
    console.log(`Groups: ${JSON.stringify(groups)}`);
    age.map((value) => {
        const newRow = { date: value['date'] };
        groups.map((group) => {
            if (!(group in value)) {
                newRow[group] = 0;
            } else {
                newRow[group] = parseInt(value[group]['cases']);
            }
        })
        dailyTotals.push(newRow);
    });
    console.log(`Data0: ${JSON.stringify(dailyTotals[0])}`)

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
            newRow[group] = dailyTotals[i][group] - dailyTotals[i - 1][group];
        })
        data.push(newRow);
    }
    console.log(`REAL DATA: ${JSON.stringify(data[0])}`);
    return { props: { data, groups } }
}