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