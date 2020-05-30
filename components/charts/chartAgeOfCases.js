import { ResponsiveContainer, AreaChart, XAxis, Area, Brush, YAxis, Legend, Tooltip } from "recharts"
import { schemePaired } from 'd3-scale-chromatic';

const pctTicks = [];
for (var i = 0; i < 110; i += 10) {
    pctTicks.push(i)
}

const AgeOfCases = ({ data, groups }) => {
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

export default AgeOfCases;