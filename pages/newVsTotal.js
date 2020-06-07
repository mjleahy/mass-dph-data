import Links from '../components/links'
import ChartNewVsTotal from '../components/chartNewVsTotal'
import Head from 'next/head'
import ChartWithNotes from '../components/chartWithNotes'

const { LoadCasesByDate } = require('../lib/loadData');

export default function NewVsTotalPage({ data, notes }) {
    const chart = <ChartNewVsTotal data={data} />;

    return (
        <div className="container">
            <Head>
                <title>New Vs Total</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Links />
                <h1>New Vs Total</h1>
                <ChartWithNotes chart={chart} notes={notes} />
            </main>
        </div>
    )
}

export async function getStaticProps(context) {
    const data = [];

    const cases = await LoadCasesByDate();
    console.log(`Case[0]: ${JSON.stringify(cases[0])}`);
    for (var i = 0; i < cases.length; i++) {
        const newCases = parseInt(cases[i]['New']);
        const totalCases = parseInt(cases[i]['Total']);
        if (newCases > 0 && totalCases > 0) {
            data.push({ newCases, totalCases })
        }
    }
    const notes = [];
    notes.push('Totals include Confirmed and Probable');

    return { props: { data, notes } }
}