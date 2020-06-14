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

import { ResponsiveContainer, AreaChart, XAxis, Area, Brush, YAxis, Legend, Tooltip } from "recharts"
import { schemePaired } from 'd3-scale-chromatic';

const pctTicks = [];
for (var i = 0; i < 110; i += 10) {
    pctTicks.push(i)
}

const ChartAgeOfDeaths = ({ data, groups }) => {
    return (
        <div style={{ width: "100%", height: 600 }}>
            <ResponsiveContainer>
                <AreaChart width={800} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} >
                    <YAxis domain={[0, 'dataMax']} ticks={pctTicks} label={{ value: "Percent", angle: -90 }} />
                    <XAxis dataKey="date" />
                    {groups.map((group, index) => (
                        <Area key={group} type="monotone" stackId={1} dataKey={group} stroke={schemePaired[index]} fill={schemePaired[index]} />
                    ))}
                    <Brush dataKey="date" />
                    <Legend />
                    <Tooltip />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ChartAgeOfDeaths;