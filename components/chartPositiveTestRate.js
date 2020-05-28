import { ReferenceLine } from 'recharts';

const { Bar, ResponsiveContainer, ComposedChart, Line, XAxis, YAxis, Brush, Tooltip, Legend } = require('recharts');
const _ = require('lodash');
const moment = require('moment')


const formatXAxis = (tickItem) => {
    return moment(tickItem).format('D MMM');
}

const formatTooltip = (value, name, props) => {
    // console.log(`${value}\t${_.startCase(name)}`);
    return [value, _.startCase(name)];
}

const ChartPositiveTestRate = ({ data }) => {
    return (
        <div style={{ width: '100%', height: 600 }}>
            <ResponsiveContainer>
                <ComposedChart width={800} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <YAxis yAxisId='left' type="number" />
                    <YAxis yAxisId='right' orientation="right" axisLine={false} />
                    <XAxis dataKey="date" tickFormatter={formatXAxis} />
                    <Brush dataKey="date" tickFormatter={formatXAxis} />
                    <Bar yAxisId='right' name="Tests Performed" dataKey='tests' fill="#DDDDDD" />
                    <Tooltip labelFormatter={formatXAxis} formatter={formatTooltip} />
                    <ReferenceLine yAxisId="left" y={10} label="10% Rate" stroke="red" />
                    <Line yAxisId='left' name="7-Day Average" type="monotone" dataKey="avg7" stroke="#005500" dot={false} strokeDasharray="5 5" />
                    <Line yAxisId='left' name="3-Day Average" type="monotone" dataKey="avg3" stroke="#AA0000" dot={false} strokeDasharray="5 5" />
                    <Line yAxisId='left' name="Positive Test Rate" type="monotone" dataKey="rate" stroke="#000000" />
                    <Legend />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    )
};

export default ChartPositiveTestRate;