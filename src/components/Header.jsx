import React from 'react'

function Header({ setAddListOpen }) {
    return (
        <div className="hero pt-3">
            <div className="container">
                <h3 className="title">My Tasks</h3>
                <div className="columns">
                    <div className="coloumn">
                        <div className="button is-primary m-2" onClick={() => setAddListOpen(true)}>Add New List +</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
