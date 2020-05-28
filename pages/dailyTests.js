import Links from '../components/links'
import Head from 'next/head'
import TestingByDay from '../lib/testingByDay'
import ChartDailyTests from '../components/charts/chartDailyTests'
import { mean } from 'simple-statistics';

export default function DailyTests({ data }) {
    return (
        <div className="container">
            <Head>
                <title>Daily Testing</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Links />
                <h1>Daily Testing</h1>
                <ChartDailyTests data={data} />
            </main>
        </div>
    )
}

export async function getStaticProps(context) {
    const data = [];
    const dailyTests = [];
    const tests = await TestingByDay();
    for (var i = 0; i < tests.length; i++) {
        dailyTests.push(parseInt(tests[i]['New']));
    }

    for (var i = 0; i < tests.length; i++) {
        let avg7 = '';
        if (i >= 6) {
            const s = dailyTests.slice(i - 6, i + 1);
            avg7 = mean(s);
        }
        const d = new Date(tests[i]['Date']);
        const Weekend = !(d.getDay() % 6) ? 1 : 0;
        const Tests = dailyTests[i];
        data.push({ date: d.getTime(), Weekend, Tests, avg7 })
    }
    return { props: { data } }
}