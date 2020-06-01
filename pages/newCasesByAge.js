import Links from '../components/links'
import Head from 'next/head'
import ChartNewCasesByAge from '../components/charts/chartNewCasesByAge';
import { transformRoutine1 } from '../lib/loadData';


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
    return await transformRoutine1('cases', true);
}