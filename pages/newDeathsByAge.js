import Links from '../components/links'
import Head from 'next/head'
import ChartNewCasesByAge from '../components/charts/chartNewCasesByAge';
import { transformRoutine1 } from '../lib/loadData';

export default function NewDeathsByAge({ data, groups }) {
    const t = "New Deaths By Age";
    return (
        <div className="container">
            <Head>
                <title>{t}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Links />
                <h1>{t}</h1>
                <ChartNewCasesByAge data={data} groups={groups} />
            </main>
        </div>
    )
}

export async function getStaticProps(context) {
    return await transformRoutine1('deaths', false);
}