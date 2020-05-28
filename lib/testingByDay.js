const { parse } = require('fast-csv');
const fs = require('fs');

const LoadTestingByDate = async () => {
    const rows = [];
    return new Promise((resolve, reject) => {
        fs.createReadStream('data/TestingByDate.csv')
            .pipe(parse({ headers: true }))
            .on('data', row => rows.push(row))
            .on('end', () => resolve(rows))
    })
}

export default LoadTestingByDate;