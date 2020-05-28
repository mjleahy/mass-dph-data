const { parse } = require('fast-csv');
const fs = require('fs');

const LoadCaseByDate = async () => {
    const rows = [];
    return new Promise((resolve, reject) => {
        fs.createReadStream('data/CasesByDate.csv')
            .pipe(parse({ headers: true }))
            .on('data', row => rows.push(row))
            .on('end', () => resolve(rows))
    })
}

export default LoadCaseByDate;