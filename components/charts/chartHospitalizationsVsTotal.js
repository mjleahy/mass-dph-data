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

import { ResponsiveContainer, ScatterChart, CartesianGrid, Tooltip, XAxis, YAxis, Scatter } from "recharts";
const _ = require('lodash');
const { GetLogTicks } = require('../../lib/chartFormatters');

const HospitalizationsVsTotal = ({ data }) => {
    const yTicks = GetLogTicks(data, "hospitalizations");
    const xTicks = GetLogTicks(data, "cases");

    return (
        <div style={{ width: '100%', height: 600 }}>
            <ResponsiveContainer>
                <ScatterChart width={800} height={600}>
                    <CartesianGrid />
                    <XAxis dataKey={"cases"} scale="log" interval={0} label="Total Cases" domain={[1, _.max(xTicks)]} ticks={xTicks} />
                    <YAxis dataKey={"hospitalizations"} interval={0} scale="log" ticks={yTicks} domain={[1, _.max(yTicks)]} label={{ value: "Hospitalizations", angle: '-90' }} />
                    <Scatter name="P1" data={data} fill="#0000FF" line />
                    <Tooltip />
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    )
}

export default HospitalizationsVsTotal;