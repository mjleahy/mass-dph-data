import { Scatter, YAxis, CartesianGrid, ResponsiveContainer, ScatterChart, XAxis, Tooltip } from "recharts"
const { GetLogTicks } = require('../lib/chartFormatters');
const _ = require('lodash');

const ChartNewVsTotal = ({ data }) => {
    const xTicks = GetLogTicks(data, 'totalCases');
    const yTicks = GetLogTicks(data, 'newCases');
    return (
        <div style={{ width: '100%', height: 600 }}>
            <ResponsiveContainer>
                <ScatterChart width={800} height={600}>
                    <CartesianGrid />
                    <XAxis dataKey={"totalCases"} ticks={xTicks} scale="log" domain={[1, _.max(xTicks)]} />
                    <YAxis dataKey={"newCases"} ticks={yTicks} scale="log" domain={[1, _.max(yTicks)]} />
                    <Scatter name="P1" data={data} fill='#0000FF' line />
                    <Tooltip />
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ChartNewVsTotal;