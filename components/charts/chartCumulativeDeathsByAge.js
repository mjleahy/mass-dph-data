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

import { Brush, LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, CartesianGrid } from 'recharts';
import { schemePaired } from 'd3-scale-chromatic';
import { GetLogTicks } from '../../lib/chartFormatters';
const _ = require('lodash');
const moment = require('moment')
const formatXAxis = (tickItem) => {
    return moment(tickItem).format('D MMM');
}

const formatTooltip = (value, name, props) => {
    // console.log(`${value}\t${_.startCase(name)}`);
    return [value, _.startCase(name)];
}

const ageBrackets = ['0-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80+'];

const CumulativeDeathsByAge = ({ data, scale }) => {
    const merged_data = [];
    data.map((item) => {
        const d = item.date;
        ageBrackets.map((ageGroup) => {
            merged_data.push({ date: d, age: ageGroup, deaths: item[ageGroup] })
        })
    })

    return (
        <div style={{ width: '100%', height: 600 }}>
            <ResponsiveContainer>
                <LineChart width={800} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    {ageBrackets.map((bracket, index) => (
                        <Line key={bracket} type="monotone" dataKey={bracket} stroke={schemePaired[index]} />
                    ))}
                    <XAxis dataKey="date" tickFormatter={formatXAxis} />
                    <YAxis type="number" domain={['auto', 'auto']} scale={scale % 2 == 0 ? 'auto' : 'log'} ticks={scale % 2 == 0 ? null : GetLogTicks(merged_data, 'deaths')} />
                    <Brush dataKey="date" tickFormatter={formatXAxis} />
                    <Tooltip labelFormatter={formatXAxis} formatter={formatTooltip} />
                    <Legend />
                    <CartesianGrid />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
};

export default CumulativeDeathsByAge;