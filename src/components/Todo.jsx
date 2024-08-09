import React from 'react'

function Todo({ task, onDelete }) {
    const handleDelete = () => {
        onDelete(task.id)
    }

    return (
        <div className="todo">
            <h3>{task.title}</h3>
            <span>{task.time}</span>
            <button onClick={handleDelete}>
                <img src="/delete.svg" alt="Delete" />
            </button>
        </div>
    )
}

export default Todo