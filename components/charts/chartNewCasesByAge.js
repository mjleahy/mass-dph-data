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
                    <Tooltip labelFormatter={FormatXAxis} formatter={FormatToolTip} />
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