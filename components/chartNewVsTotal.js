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

import { Scatter, YAxis, CartesianGrid, ResponsiveContainer, ScatterChart, XAxis, Tooltip } from "recharts"
const { GetLogTicks } = require('../lib/chartFormatters');
const _ = require('lodash');

const ChartNewVsTotal = ({ data }) => {
    const xTicks = GetLogTicks(data, 'totalCases');
    const yTicks = GetLogTicks(data, 'newCases');
    return (
        <div style={{ width: '100%', height: 600 }}>
            <ResponsiveContainer>
                <ScatterChart >
                    <CartesianGrid />
                    <XAxis dataKey={"totalCases"} ticks={xTicks} interval={0} scale="log" domain={[1, _.max(xTicks)]} />
                    <YAxis dataKey={"newCases"} ticks={yTicks} interval={0} scale="log" domain={[1, _.max(yTicks)]} />
                    <Scatter name="P1" data={data} fill='#0000FF' line />
                    <Tooltip />
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ChartNewVsTotal;