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
import ChartAgeOfDeaths from '../components/charts/chartAgeOfDeaths'
import { Age } from '../lib/loadData';

export default function AgeOfDeaths({ data, groups }) {
    return (
        <div className="container">
            <Head>
                <title>Age of Deaths</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Links />
                <h1>Age of Deaths</h1>
                <ChartAgeOfDeaths data={data} groups={groups} />
            </main>
        </div>
    )
}

export async function getStaticProps(context) {
    const age = await Age();
    const data = [];
    let groupTracker = {}; //keep track of age groups in data

    //Convert rows to {date, '0-19', '20-29'...}
    for (var i = 0; i < age.length; i++) {
        const row = Object.assign({}, { date: age[i]['date'], total: 0 })
        let a = {};
        const keys = Object.keys(age[i]);
        for (var j = 0; j < keys.length; j++) {
            if (keys[j] !== 'date') {
                groupTracker[keys[j]] = 0;
                a[keys[j]] = age[i][keys[j]]['deaths'];
            }
        }
        Object.assign(row, a);
        data.push(row)
    }

    // Make sure each day has all keys
    data.map((row, index) => {
        Object.keys(groupTracker).map((group) => {
            if (!(group in row)) {
                data[index][group] = 0;
            }
        })
    })

    //Total each day 
    data.map((value, index) => {
        let total = 0;
        Object.keys(groupTracker).map((group) => {
            total = total + data[index][group];
        })
        data[index]['total'] = total;
    })

    //Convert to percent
    data.map((value, index) => {
        let pctTotal = 0;
        Object.keys(groupTracker).map((group) => {
            data[index][group] = (data[index][group] / data[index]['total'] * 100);
            pctTotal = pctTotal + data[index][group];
        })
    })


    const groups = Object.keys(groupTracker);
    return { props: { data, groups } };
}