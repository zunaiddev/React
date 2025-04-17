function Child({handlePrint}) {
    console.log("Render Child");

    return (
        <button onClick={handlePrint}>
            Call Function
        </button>
    );
}

export default Child;