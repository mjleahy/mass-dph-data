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

const { ResponsiveContainer, ComposedChart, YAxis, XAxis, Brush, Bar, Line, Tooltip, Legend } = require('recharts');
const { FormatToolTip, FormatXAxis } = require('../../lib/chartFormatters');


const ChartDailyTests = ({ data }) => {
    return (
        <div style={{ width: '100%', height: 600 }}>
            <ResponsiveContainer>
                <ComposedChart width={800} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <YAxis yAxisId='left' type="number" domain={['auto', 'auto']} />
                    <YAxis yAxisId='right' orientation="right" axisLine={false} domain={[0, 1]} />
                    <XAxis dataKey="date" tickFormatter={FormatXAxis} />
                    <Brush dataKey="date" tickFormatter={FormatXAxis} />
                    <Bar yAxisId='right' dataKey='Weekend' fill="#DDDDDD" />
                    <Tooltip labelFormatter={FormatXAxis} formatter={FormatToolTip} />
                    <Line yAxisId='left' name="Daily Tests Performed" type="monotone" dataKey="Tests" stroke="#000000" />
                    <Line yAxisId="left" dot={false} name="7-day Average" type="monotone" dataKey="avg7" stroke="#888888" />
                    <Legend />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ChartDailyTests;