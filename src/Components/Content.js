import React from 'react';
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import Additem from './Additem';

const Content = () => {

    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem("shoppinglist")||[])
    )

    const [newItem, setNewItem] = useState("");

    const setAndSaveItems = newItems => {
        setItems(newItems)
        localStorage.setItem("shoppinglist", JSON.stringify(newItems))
    }
    

    const handleCheck = id => {
        // console.log(`key ${id}`);
        const listItems = items.map(item => item.id === id ? {...item, checked: !item.checked}:item)
        setAndSaveItems(listItems)
    }

    const handleDelete = id => {
        const listItems = items.filter(item => item.id !== id);
        setAndSaveItems(listItems)
    }

    const addItem = item => {
        const id = items.length ? items[items.length-1].id + 1 : 1;
        const myNewItem = {id, checked:false, item};
        const listItems = [...items, myNewItem];
        setAndSaveItems(listItems)
    }

    const handleSubmit = e =>{
        e.preventDefault()
        if(!newItem) return;
        addItem(newItem);
        setNewItem("")
      }



    return (
        <>
        <Additem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        />
        {items.length ? (
          <ul>
          {items.map(item => (
              <li key={item.id} className="item">
                 <input
                      type="checkbox"
                      checked={item.checked}  
                      onChange={() => handleCheck(item.id)}
                  />
                  <label>
                      {item.item}
                  </label>
                  <FaTrashAlt
                      onClick={() => handleDelete(item.id)}
                      role="button"
                      tabIndex="0"
                  />
              </li>
          ))}
            </ul>
        ) : (
            <p style= {{
                textAlign:"center",
                color:"red",
                fontWeight:"bold",
                margin:"32px 0"
            }}> 
            Your list is empty
            </p>
        )
      }
      </>
        
  )
}

export default Content