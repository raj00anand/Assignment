import React from 'react'

const Contant = ({handleConstant, handleClick}) => {
  return (
    <div>
      <form>
          <select name='constant' id='constant' onChange={handleConstant}>
            <option>true</option>
            <option selected>false</option>
          </select>
          <button type='submit' onClick={handleClick}>X</button>
        </form>
    </div>
  )
}

export default Contant
