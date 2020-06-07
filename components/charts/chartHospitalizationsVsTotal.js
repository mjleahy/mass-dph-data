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