const moment = require('moment');
const _ = require('lodash');

export const FormatDate = (tick) => {
    return moment(tickItem).format('D MMM');
}

export const FormatToolTip = (name, value, props) => {
    return [value, _.startCase(name)];
}