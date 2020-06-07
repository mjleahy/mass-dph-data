import * as React from 'react'

interface ChartWithNotesProps {
    notes: Array<String>,
    chart: React.FC
}

const ChartWithNotes: React.FC<ChartWithNotesProps> = ({ notes, chart }) => {
    return (
        <>
            {chart}
            < h3 > Notes < /h3>
        < ul >
                    {
                        notes.map((note) => (
                            <li key={note}>{note} < /li>
            ))
        }
                                < /ul>
                                < />
    )
    }
    export default ChartWithNotes;