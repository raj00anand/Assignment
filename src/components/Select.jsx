import React from 'react'

const Select = ({ handleSelect, handleClick}) => {
  return (
    <div>
      {<form>
          <select name='select' id='select' onChange={handleSelect}>
            <option selected disabled>select...</option>
            <option>constant</option>
            <option>argument</option>
            <option>and</option>
            <option>or</option>
          </select>
          <button type='submit' onClick={handleClick}>X</button>
        </form>}
    </div>
  )
}

export default Select
