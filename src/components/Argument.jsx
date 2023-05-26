import React from 'react'

const Argument = ({handleArgument, textFields, handleClick}) => {
  return (
    <div>
      <form>
          <select name='argument' id='argument' onChange={handleArgument}>
            <option>My Arg</option>
            {textFields.map((text, index) => (
              <option key={index} >{text}</option>
            ))}
          </select>
          <button type='submit' onClick={handleClick}>X</button>
        </form>
    </div>
  )
}

export default Argument
