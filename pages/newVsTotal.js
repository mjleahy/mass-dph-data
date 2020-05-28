import Links from '../components/links'
import ChartNewVsTotal from '../components/chartNewVsTotal'
import Head from 'next/head'
import LoadCaseByDate from '../lib/casesByDate';

export default function NewVsTotalPage({ data }) {
    return (
        <div className="container">
            <Head>
                <title>New Vs Total</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Links />
                <h1>New Vs Total</h1>
                <ChartNewVsTotal data={data} />
            </main>
        </div>
    )
}

export async function getStaticProps(context) {
    const data = [];

    const cases = await LoadCaseByDate();

    for (var i = 0; i < cases.length; i++) {
        const newCases = parseInt(cases[i]['New']);
        const totalCases = parseInt(cases[i]['Total']);
        if (newCases > 0 && totalCases > 0) {
            data.push({ newCases, totalCases })
        }
    }

    return { props: { data } }
}