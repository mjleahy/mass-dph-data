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

const { ReferenceLine, ResponsiveContainer, ComposedChart, YAxis, XAxis, Brush, Bar, Line, Tooltip, Legend } = require('recharts');
const { FormatToolTip, FormatXAxis } = require('../../lib/chartFormatters');
import { schemePaired } from 'd3-scale-chromatic';


const ChartNewCasesByAge = ({ data, groups }) => {
    return (
        <div style={{ width: '100%', height: 600 }}>
            <ResponsiveContainer>
                <ComposedChart width={800} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <YAxis type="number" domain={[10, 100]} />
                    <XAxis dataKey="date" tickFormatter={FormatXAxis} />
                    <Brush dataKey="date" tickFormatter={FormatXAxis} />
                    <Tooltip labelFormatter={FormatXAxis} />
                    {groups.map((group, index) => (
                        <Line id={group} name={group} type="monotone" dataKey={group} stroke={schemePaired[index]} />
                    ))}
                    <Legend />
                    <ReferenceLine y={0} stroke="red" strokeDasharray="3 3" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ChartNewCasesByAge;