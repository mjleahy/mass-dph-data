import { Scatter, YAxis, CartesianGrid, ResponsiveContainer, ScatterChart, XAxis, Tooltip } from "recharts"

const t = (dataMax) => {
    const ticks = [];
    let p = 0;
    while (Math.pow(10, p) < dataMax) {
        ticks.push(Math.pow(10, p));
        p = p + 1;
    }
    return ticks;
}

const xticks = (data) => {
    return t(maxAlong(data, 'totalCases'));
}

const yticks = (data) => {
    return t(maxAlong(data, 'newCases'));
}

const maxAlong = (data, key) => {
    let max = 0;
    for (var i = 0; i < data.length; i++) {
        if (data[i][key] > max) {
            max = data[i][key];
        }
    }
    return max;
}

const ChartNewVsTotal = ({ data }) => {
    return (
        <div style={{ width: '100%', height: 600 }}>
            <ResponsiveContainer>
                <ScatterChart width={800} height={600}>
                    <CartesianGrid />
                    <XAxis dataKey={"totalCases"} ticks={xticks(data)} scale="log" domain={['auto', 'auto']} />
                    <YAxis dataKey={"newCases"} ticks={yticks(data)} scale="log" domain={['auto', 'auto']} />
                    <Scatter name="P1" data={data} fill='#0000FF' line />
                    <Tooltip />
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ChartNewVsTotal;