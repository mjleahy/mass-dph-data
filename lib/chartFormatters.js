const moment = require('moment');
const _ = require('lodash');

export const FormatXAxis = (tick) => {
    return moment(tick).format('D MMM');
}

export const FormatToolTip = (name, value, props) => {
    return [_.startCase(name), value];
}