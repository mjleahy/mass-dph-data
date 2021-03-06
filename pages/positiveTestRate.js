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
import ChartPositiveTestRate from '../components/chartPositiveTestRate'
const _ = require('lodash');

export default function PositiveTestRatePage({ data }) {
    return (
        <div className="container">
            <Head>
                <title>Positive Test Rate</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Links />
                <h1>Positive Test Rate</h1>
                <ChartPositiveTestRate data={data} />
            </main>
        </div>
    )
}

export async function getStaticProps(context) {
    const data = [];

    const tests = await LoadTestingByDate();
    let p3 = 0;
    let t3 = 0;
    let p7 = 0;
    let t7 = 0;
    for (var i = 0; i < tests.length; i++) {
        // for (var i = 0; i < 12; i++) {

        const dp = parseInt(tests[i]['Positive']);
        const dn = parseInt(tests[i]['New']);
        let avg3 = '';
        let avg7 = '';
        const rate = dp > 0 ? (dp / dn) * 100 : 0;

        if (i <= 2) {
            p3 = p3 + dp;
            t3 = t3 + dn;
            if (i == 2) {
                avg3 = t3 > 0 ? p3 / t3 * 100 : 0;
            }
        } else {
            p3 = p3 + dp - parseInt(tests[i - 3]['Positive']);
            t3 = t3 + dn - parseInt(tests[i - 3]['New']);
            avg3 = t3 > 0 ? p3 / t3 * 100 : 0;
        }

        if (i <= 6) {
            p7 = p7 + dp;
            t7 = t7 + dn;
            if (i == 6) {
                avg7 = t7 > 0 ? p7 / t7 * 100 : 0;
            }
        } else {
            p7 = p7 + dp - parseInt(tests[i - 7]['Positive']);
            t7 = t7 + dn - parseInt(tests[i - 7]['New']);
            avg7 = t7 > 0 ? p7 / t7 * 100 : 0;
        }

        data.push({ date: new Date(tests[i]['Date']).getTime(), tests: parseInt(tests[i]['New']), rate, avg3, avg7 })
    }

    return { props: { data } }
}