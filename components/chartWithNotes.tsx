import * as React from 'react'

interface ChartWithNotesProps {
    notes: Array<String>,
    chart: React.FC
}

const ChartWithNotes: React.FC<ChartWithNotesProps> = ({ notes, chart }) =>
    (
        <>
            {chart}
            <h3> Notes </h3>
            <ul>
                {
                    notes.map((note:string) => (
                        <li key={note}> {note} </li>
                    ))
                }
            </ul>
        </>
    )

export default ChartWithNotes;