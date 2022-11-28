import React, {useState, useRef} from 'react' 
import {FaPlus} from "react-icons/fa"

const Additem = ({newItem, setNewItem, handleSubmit}) => {
    
    const inputRef = useRef();
   

    
  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor='addItem'>add item</label>
      <input 
      autoFocus
      ref={inputRef}
      id="addItem"
      type="text"
      placeholder='add item'
      required
      value={newItem}
      onChange={(e)=> setNewItem(e.target.value)}
      />
      <button
      type='submit'
      aria-label='add item'
      onClick={()=> inputRef.current.focus()}
      >
        <FaPlus/>

      </button>
    </form>
  )
}

export default Additem