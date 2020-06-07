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
const { LoadTestingByDate } = require('../lib/loadData')
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
    const tests = await LoadTestingByDate();
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