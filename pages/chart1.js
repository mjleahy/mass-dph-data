/* 
 *  Copyright 2020 <Matthew Leahy>
 *  
 *  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), 
 *  to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 *  and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *  
 *  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *  
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
 *  DEALINGS IN THE SOFTWARE.
 */

import Head from 'next/head'
import Links from '../components/links'
import Chart1 from '../components/chart1'
import { LoadTestingByDate, LoadCasesByDate, DateOfDeath, Hospitalizations } from '../lib/loadData'
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
                <Chart1 data={data} scale={scale} />
                <ScaleToggle scale={scale} setScale={setScale} />
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
    addToData(tempData, await LoadTestingByDate(), 'Date', 'Molecular Total', 'tests');
    addToData(tempData, await LoadCasesByDate(), 'Date', 'Positive Total', 'cases');
    addToData(tempData, await DateOfDeath(), 'Date of Death', 'Confirmed Total', 'deaths');
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