import React from 'react'

function PopUp({popStyle}) {
  return (
    <div className='popup' style={popStyle}>
        <form action="">
            <label htmlFor="Email"></label>
            <input type="text" />
            <label htmlFor="Password"></label>
            <input type="text" />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default PopUp