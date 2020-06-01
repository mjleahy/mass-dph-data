import Links from '../components/links'
import Head from 'next/head'
import ChartNewCasesByAge from '../components/charts/chartNewCasesByAge';
import { transformRoutine1 } from '../lib/loadData';

export default function NewCasesByAge({ data, groups }) {
    const t = "New Hospitalizations By Age";
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
                <h3>Notes</h3>
                <ul>
                    <li>Data was not published for 11 April</li>
                </ul>
            </main>
        </div>
    )
}

export async function getStaticProps(context) {
    return await transformRoutine1('hospitalized', false);
}