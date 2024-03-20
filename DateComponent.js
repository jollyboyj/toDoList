import React from 'react'
import { useState } from 'react';
import { FaTrash  } from "react-icons/fa";

const DateComponent = () => {

  const [items, setItems] = useState(
    [
      {
        id : 1,
        checked : true,
        item : "Learning React"
      },
      {
        id : 2,
        checked : true,
        item : "Excersice"
      },
      {
        id : 3,
        checked : false,
        item : "Eating"
      }
    ]);

    const handleCheckbox = (id) => {
      const listItems = items.map((item) => 
          item.id === id? {...item, checked: !item.checked}:item
      )
      setItems(listItems)
    }

    const handleDelete = (id) => {
        const removeItem = items.filter((item) => 
          item.id!==id)
        setItems(removeItem)
    }

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li className = "item" key = {item.id}>
            <input
             type = "checkbox"
             checked = {item.checked}
             onChange={() => handleCheckbox(item.id)}
            />
            <label>{item.item}</label>
            <FaTrash 
              role = "button"
              tabIndex="0"on
              onClick={() => handleDelete(item.id)}
            /> 
          </li>
        )
        )}
      </ul>
    </div>
  )
}

export default DateComponent

 // const [name, setName] = useState("Saambu");

  // function nameChange()
  // {
  //   const names = ["venna","saambu","picha","kumar","kunju"];
  //   const num = Math.floor(Math.random()*5);
  //   setName (name => names[num])
  // }

  // const [count, setCount] = useState(0)

  // function addSubscribe() {
  //   setCount(prevCount => prevCount + 1)
  // }

  // function removeSubscribe() {
  //   setCount(count => count - 1)
  // }