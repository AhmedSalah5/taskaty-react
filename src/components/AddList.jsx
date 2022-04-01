import React, { useState } from 'react'

function AddList({ addListOpen, setAddListOpen, lists, setLists }) {
    const [newTitle, setNewTitle] = useState("");
    const handleAdd = (e) => {
        e.preventDefault();
        if (newTitle !== "") {
            setLists([...lists, { listId: `list${lists.length + 1}`, title: newTitle, items: [] }])
        }
        setNewTitle("");
    }

    return (
        <div className={addListOpen ? 'addList opened' : 'addList'}>
            <span onClick={() => setAddListOpen(false)} className='close'>&times;</span>
            <h3>Add a New List</h3>
            <form action="" onSubmit={(e) => handleAdd(e)}>
                <input type="text" className='form-control mb-2' onChange={(e) => setNewTitle(e.target.value)} value={newTitle} placeholder='List Title . . .' />
                <button className='btn btn-primary'>Add</button>
            </form>
        </div>
    )
}

export default AddList
