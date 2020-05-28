import Head from 'next/head'
import Link from 'next/link'
import Links from '../components/links'
import Chart1 from '../components/chart1'
import LoadTestingByDate from '../lib/testingByDay'
import LoadCasesByDate from '../lib/casesByDate'
import { DateOfDeath, Hospitalizations } from '../lib/loadData'
import ScaleToggle from '../components/scaleToggle'
import { useState } from 'react';

export default function Chart1Page({ data }) {
    const [scale, setScale] = useState(0);
    return (
        <div className="container">
            <Head>
                <title>Chart 1</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Links />
                <h1>Chart 1</h1>
                <Chart1 data={data} scale={scale}/>
                <ScaleToggle scale={scale} setScale={setScale}/>
            </main>
        </div>
    )
}

const checkGetResolve = (key, data) => {
    if (!(key in data)) {
        data[key] = {
            date: key,
            tests: '',
            cases: '',
            deaths: '',
            hospitalizations: '',
            icu: '',
        }
    }

    return data[key];
}

const addToData = (data, sourceData, dateField, srcField, destField) => {
    for (var i = 0; i < sourceData.length; i++) {
        const cur = checkGetResolve(new Date(sourceData[i][dateField]).getTime(), data);
        cur[destField] = sourceData[i][srcField] == '0' ? '' : parseInt(sourceData[i][srcField])
    }
}

export async function getStaticProps(conext) {
    const tempData = {};
    addToData(tempData, await LoadTestingByDate(), 'Date', 'Total', 'tests');
    addToData(tempData, await LoadCasesByDate(), 'Date', 'Total', 'cases');
    addToData(tempData, await DateOfDeath(), 'Date of Death', 'Running Total', 'deaths');
    addToData(tempData, await Hospitalizations(), 'Date', 'Total number of COVID patients in hospital today', 'hospitalizations');
    const data = [];
    const keys = Object.keys(tempData);
    for (var i = 0; i < keys.length; i++) {
        data.push(tempData[keys[i]]);
    }

    return {
        props: {
            data
        }
    }
}