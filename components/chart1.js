import { Brush, LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';
const _ = require('lodash');
const moment = require('moment')
const formatXAxis = (tickItem) => {
    return moment(tickItem).format('D MMM');
}

const formatTooltip = (value, name, props) => {
    // console.log(`${value}\t${_.startCase(name)}`);
    return [value, _.startCase(name)];
}

const Chart1 = ({ data, scale }) => {
    return (
        <div style={{ width: '100%', height: 600 }}>
            <ResponsiveContainer>
                <LineChart width={800} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <Line type="monotone" dataKey="tests" stroke="#8884d8" />
                    <Line type="monotone" dataKey="cases" stroke="#FF0000" />
                    <Line type="monotone" dataKey="deaths" stroke="#000000" />
                    <Line type="monotone" dataKey="hospitalizations" stroke="#00FF00" />
                    <XAxis dataKey="date" tickFormatter={formatXAxis} />
                    <YAxis type="number" domain={['auto', 'auto']} scale={scale % 2 == 0 ? 'auto' : 'log'} />
                    <Brush dataKey="date" tickFormatter={formatXAxis} />
                    <Tooltip labelFormatter={formatXAxis} formatter={formatTooltip} />
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
};

export default Chart1;