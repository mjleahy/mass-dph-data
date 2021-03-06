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

import Links from '../components/links'
import Head from 'next/head'
import ChartHospitalizationsVsTotal from '../components/charts/chartHospitalizationsVsTotal';
const { LoadCasesByDate, Hospitalizations } = require('../lib/loadData');
const _ = require('lodash');
import ChartWithNotes from '../components/chartWithNotes'

export default function HospitalizationsVsTotal({ data, notes }) {
    const t = "Hospitalizations Vs Total";
    const chart = <ChartHospitalizationsVsTotal data={data} />
    return (
        <div className="container">
            <Head>
                <title>{t}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Links />
                <h1>{t}</h1>
                <ChartWithNotes chart={chart} notes={notes} />
            </main>
        </div>
    )
}

export async function getStaticProps(context) {
    const cases = await LoadCasesByDate();
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
    const notes = ['Count of hospitalizations before 4/4 is not included in CSV.  Earlier values were taken from daily updates'];
    return { props: { data, notes } }
}