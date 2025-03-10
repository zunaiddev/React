function AddToDo() {
    return (
        <div className="flex flex-row">
            <div className="basis-128">
                <input type="text" placeholder="Enter Your Message"/>
            </div>
            <div className="basis-128">
                <input type="date"/>
            </div>
            <div className="basis-64">
                <button type="submit"
                        className="bg-blue-600 text-white cursor-pointer">Submit
                </button>
            </div>
        </div>
    );
}

export default AddToDo;