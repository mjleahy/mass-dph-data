const { parse } = require('fast-csv');
const fs = require('fs');

const LoadFile = async (filename) => {
    const rows = [];
    return new Promise((resolve, reject) => {
        fs.createReadStream(filename)
            .pipe(parse({ headers: true }))
            .on('data', row => rows.push(row))
            .on('end', () => resolve(rows))
    })
}

export const Hospitalizations = async () => {
    return await LoadFile('data/Hospitalization from Hospitals.csv');
}


export const DateOfDeath = async () => {
    return await LoadFile('data/DateofDeath.csv')
}