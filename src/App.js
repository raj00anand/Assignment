import React, { useState } from 'react'
import Select from './components/Select';
import Contant from './components/Contant';
import Argument from './components/Argument';
import And from './components/And';

const App = () => {
  var [value, setValue] = useState();
  const [textFields, setTextFields] = useState([]);
  const [select, setSelect] = useState(true);
  const [constant, setConstant] = useState(false);
  const [argument, setArgument] = useState(false);
  const [and, setAnd] = useState(false);
  const [or, setOr] = useState(false);
  const [argumnet1, setArgument1] = useState(true);
  const [argumnet2, setArgument2] = useState(true);
  
  
  // console.log(value)
  // var res = value;

  const handleClick = (e) => {
    e.preventDefault();
    setSelect(!select);
    setConstant(false);
    setArgument(false)
    
  }


  const handleSelect = (e) =>{
    const tar = e.target.value;
    if(tar==='constant'){
      setSelect(!select);
      setConstant(!constant);
      setValue('false');
    }else if(tar==='argument'){
      
      setSelect(!select);
      setArgument(!argument);
      setValue('true')
    }else if(tar==='and'){
      setSelect(!select);
      setAnd(!and);
    }else if(tar === 'or'){
      setSelect(!select);
      setOr(!or);
    }

  }
  const handleConstant = (e)=>{
    setValue(e.target.value);
  }

  const handleArgument = (e) => {
    const tar = e.target.value;
    // console.log(tar);
    
    // console.log(argumnet2)
    if(tar === "My Arg"){
      console.log(argumnet1)
      setValue(argumnet1)
      // console.log(value)
      // handleArgument1();
    }else{
      console.log(argumnet2)
      setValue(argumnet2)
      console.log(value)
      // handleArgument2();
    }
    
  }

  const addArgument = (e) => {
    e.preventDefault();
    setTextFields([...textFields, '']);
  }

  const handleChangeText = (index, event) => {
    const updatedFields = [...textFields];
    updatedFields[index]=event.target.value;
    setTextFields(updatedFields);
    setArgument2(argumnet2)
    console.log(textFields);
  }

  const handleArgument1 = (e) => {
    if(e.target.name==='arg'){
      setArgument1(e.target.value);
      setValue(e.target.value)
    }
    
  }

  const handleArgument2 = (e) => {
    if(e.target.name === 'arg1'){
      setArgument2(e.target.value);
      setValue(e.target.value)
    }
    
  }

  

  // useEffect(()=>{
  //   setValue(value)
  // },[value])


  return (
    <div>
      <div>
        <form>
          <input type="text" value='My Arg'></input>
          <select name='arg' id='arg' onChange={handleArgument1}>
            <option value='true'>true</option>
            <option value='false'>false</option>
          </select><br></br>
          {textFields.map((text, index)=>(
            <div key={index}>
              <input
                type='text'
                value={text}
                placeholder='args'
                onChange={(event)=>handleChangeText(index, event)}
              />
              <select name='arg1' id='arg1' onChange={handleArgument2}>
                <option value='true'>true</option>
                <option value='false'>false</option>
              </select><br></br>
            </div>
            
          ))}
          <button type='submit' onClick={addArgument}>+ add args</button>
          {select && <Select
              handleSelect={handleSelect}
              handleClick={handleClick}
            />}

        {constant && <Contant 
          handleConstant={handleConstant}
          handleClick={handleClick}
        />}

        {argument && <Argument 
          handleArgument={handleArgument}
          textFields={textFields}
          handleClick={handleClick}
          
        />}
        {and && <And 
          argumnet1={argumnet1}
          argumnet2={argumnet2}
          setValue={setValue}
          textFields={textFields}
          flagAnd = {and}
          flagOr = {or}
        />}
        {or && <And 
          argumnet1={argumnet1}
          argumnet2={argumnet2}
          setValue={setValue}
          textFields={textFields}
          flagAnd = {and}
          flagOr = {or}
        />}
        </form>
      </div>
        
            

      <div>

      </div>
      <div>
      {}
        <h3>result: {value}</h3>
      </div>
    </div>
  )
}

export default App

