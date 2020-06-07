/* 
 *  Copyright 2020 <Matthew Leahy>
 *  
 *  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), 
 *  to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 *  and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *  
 *  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *  
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
 *  DEALINGS IN THE SOFTWARE.
 */

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
