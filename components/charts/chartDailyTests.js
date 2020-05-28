const { ResponsiveContainer, ComposedChart, YAxis, XAxis, Brush, Bar, Line, Tooltip, Legend } = require('recharts');
const moment = require('moment');
const _ = require('lodash');

const formatXAxis = (tickItem) => {
    return moment(tickItem).format('D MMM');
}

const formatTooltip = (value, name, props) => {
    // console.log(`${value}\t${_.startCase(name)}`);
    return [value, _.startCase(name)];
}

const ChartDailyTests = ({ data }) => {
    return (
        <div style={{ width: '100%', height: 600 }}>
            <ResponsiveContainer>
                <ComposedChart width={800} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <YAxis yAxisId='left' type="number" domain={['auto', 'auto']} />
                    <YAxis yAxisId='right' orientation="right" axisLine={false} domain={[0, 1]} />
                    <XAxis dataKey="date" tickFormatter={formatXAxis} />
                    <Brush dataKey="date" tickFormatter={formatXAxis} />
                    <Bar yAxisId='right' dataKey='Weekend' fill="#DDDDDD" />
                    <Tooltip labelFormatter={formatXAxis} formatter={formatTooltip} />
                    <Line yAxisId='left' name="Daily Tests Performed" type="monotone" dataKey="Tests" stroke="#000000" />
                    <Line yAxisId="left" dot={false} name="7-day Average" type="monotone" dataKey="avg7" stroke="#888888" />
                    <Legend />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ChartDailyTests;