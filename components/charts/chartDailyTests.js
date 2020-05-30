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