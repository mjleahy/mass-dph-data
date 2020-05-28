const ScaleToggle = ({ scale, setScale }) => {
    const incScale = () => {
        setScale(scale + 1);
    }
    return (
        <button onClick={incScale}>Toggle Scale</button>
    )
}

export default ScaleToggle