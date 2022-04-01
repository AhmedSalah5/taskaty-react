import React ,{ useState } from 'react'
import {BiTrash ,BiCheck} from 'react-icons/bi'

function List({ list, lists, setLists }) {
    const delList = (id) => {
        let newLists = lists.filter(list => list.listId !== id)
        setLists([...newLists])
    }
    //const items = list.items;

    const [listItems ,setListItems] = useState([]);
    const [item,setItem] = useState({
        id :0,
        text: ""
    })
    const addItem = (e)=>{
        e.preventDefault()
        setListItems([...listItems,item])
        setItem({
            id :0,
            text: ""
        })
    }
    const handleChange = (e)=>{
        setItem({id:listItems.length+1 ,text:e.target.value})
    }

    const delItem = (id)=>{
        let updatedList = listItems.filter(ele=>{
            return ele.id !== id
        })
        setListItems(updatedList)
    }
    return (
        <div className='list'>
            <header className="listHead">{list.title} <span onClick={() => { delList(list.listId) }} className='close'>&times;</span></header>
            <main>
                <form onSubmit={addItem}>
                    <div className='row w-100'>
                        <div className="col-9">
                            <input type="text" onChange={handleChange} value={item.text} className='form-control' />
                        </div>
                        <div className="col-3">
                            <button className='btn btn-primary'>Add</button>
                        </div>
                    </div>
                </form>
                <ul className='mt-2'>
                    {listItems.map(item => (
                        <li className='listItem' key={item.id}>{item.text} <span className='done-btn'><BiCheck/></span> <span className='del-item' onClick={()=>delItem(item.id)}><BiTrash/></span></li>
                    ))}
                </ul>
            </main>
            <footer>{listItems.length} item(s)</footer>
        </div>
    )
}

export default List
