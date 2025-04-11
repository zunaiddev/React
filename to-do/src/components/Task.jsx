import PropTypes from 'prop-types';

function Task({ task , date, deleteTask }) {
    return (
        <div className="flex gap-8 ">
            <span className="min-w-70 text-md font-bold">{task}</span>
            <span className="min-w-40">{date}</span>
            <button className="cursor-pointer bg-red-600 rounded-lg min-w-26 py-1"
            onClick={deleteTask}>Delete</button>
        </div>
    );
}

Task.propTypes = {
    task: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    deleteTask: PropTypes.func.isRequired,
}

export default Task;