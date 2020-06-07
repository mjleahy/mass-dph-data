const moment = require('moment');
const _ = require('lodash');

export const FormatXAxis = (tick) => {
    return moment(tick).format('D MMM');
}

export const FormatToolTip = (name, value, props) => {
    return [_.startCase(name), value];
}

const t = (dataMax) => {
    const ticks = [];
    let p = 0;
    while (Math.pow(10, p) < dataMax) {
        ticks.push(Math.pow(10, p));
        p = p + 1;
    }
    //Add one more
    ticks.push(Math.pow(10, p));
    // ticks.push(Math.pow(10, p + 1));
    return ticks;
}

export const GetLogTicks = (data, key) => {
    const m = _.maxBy(data, key);
    return t(parseInt(m[key]))
}
