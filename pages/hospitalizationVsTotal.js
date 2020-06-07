import Links from '../components/links'
import Head from 'next/head'
import ChartHospitalizationsVsTotal from '../components/charts/chartHospitalizationsVsTotal';
import LoadCaseByDate from '../lib/casesByDate';
import { Hospitalizations } from '../lib/loadData';
const _ = require('lodash');
const moment = require('moment');

export default function HospitalizationsVsTotal({ data }) {
    const t = "Hospitalizations Vs Total";
    return (
        <div className="container">
            <Head>
                <title>{t}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Links />
                <h1>{t}</h1>
                <ChartHospitalizationsVsTotal data={data} />
                <h3>Notes</h3>
                <ul>
                    <li>Count of hospitalizations before 4/4 is not included in CSV.  Earlier values were taken from daily updates</li>
                </ul>

            </main>
        </div>
    )
}

export async function getStaticProps(context) {
    const cases = await LoadCaseByDate();
    const hospitalizations = await Hospitalizations(true);
    const data = [];
    console.log(`Cases: ${JSON.stringify(cases[0])}`)
    console.log(`Hos: ${JSON.stringify(hospitalizations[0])}`);
    console.log(`Last: ${JSON.stringify(_.last(hospitalizations))}`);

    hospitalizations.map((cur) => {
        const d = cur['Date'];
        const casesIndex = _.findIndex(cases, ['Date', d]);
        data.push({
            date: d,
            hospitalizations: parseInt(cur['Total number of COVID patients in hospital today']),
            cases: parseInt(cases[casesIndex]['Total'])
        })
    })
    console.log(`Rows: ${JSON.stringify(data[0])}`);
    return { props: { data } }
}