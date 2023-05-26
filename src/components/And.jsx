import React , {useState}from 'react'
import Select from './Select'
import Contant from './Contant'
import Argument from './Argument'

const And = ({argumnet1, argumnet2, setValue, textFields, flagAnd, flagOr}) => {
    const [op, setOp] = useState([]);
    const [select, setSelect] = useState(true);
    const [constant, setConstant] = useState(false);
    const [argument, setArgument] = useState(false);
    const [and, setAnd] = useState(false);
    const [or, setOr] = useState(false);
    const [select1, setSelect1] = useState(true);
    const [constant1, setConstant1] = useState(false);
    const [argument1, setArgument1] = useState(false);
    const [and1, setAnd1] = useState(false);
    const [or1, setOr1] = useState(false);
    // const [flag, setFlag] = useState(false);


    const handleClick = (e) => {
        e.preventDefault();
        setSelect(!select);
        setConstant(false);
        setArgument(false)
        
      }
    
    
      const handleSelect = (e) =>{
        const tar = e.target.value;
        const name = e.target.name;
        console.log(name);
        if(tar==='constant'){
          setSelect(!select);
          setConstant(!constant);
          setValue('false');
        }else if( tar==='argument'){
          
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

      const handleSelect1 = (e) => {
        const tar = e.target.value;
        if(tar==='constant'){
            setSelect1(!select1);
            setConstant1(!constant1);
            setValue('false');
          }else if(tar==='argument'){
            
            setSelect1(!select1);
            setArgument1(!argument1);
            setValue('true')
          }else if(tar==='and'){
            setSelect1(!select1);
            setAnd1(!and1);
          }else if(tar === 'or'){
            setSelect1(!select1);
            setOr1(!or1);
          }
      }


      const handleConstant = (e)=>{
        setValue(e.target.value);
      }
    
    //   const handleArgument = (e) => {
    //     const tar = e.target.value;
    //     // console.log(tar);
        
    //     // console.log(argumnet2)
    //     if(tar === "My Arg"){
    //       console.log(argumnet1)
    //       setValue(argumnet1)
    //       // console.log(value)
    //       // handleArgument1();
    //     }else{
    //       console.log(argumnet2)
    //       setValue(argumnet2)
    //     //   console.log(value)
    //       // handleArgument2();
    //     }
        
    //   }
      const handleAnd = () => {
        if(flagAnd){
            const value = argument1 & argumnet2;
            setValue(value === 0 ? 'false' : 'true')
        }else{
            const value = argument1 | argumnet2;
            setValue(value === 0 ? 'false' : 'true')
        }
      }
      const handleOperation = (e) => {
        e.preventDefault();
        setOp([...op, '']);
      }
      
        
      

    
  return (
    <div>
      

        {<div>
        {flagAnd && <select>
          <option>and</option>
          <option>or</option>
        </select>}
        {flagOr && <select>
          <option>or</option>
          <option>and</option>
        </select>}
        <button type='submit' onClick={handleClick}>X</button>
          {select && <Select 
            handleSelect={handleSelect}
            handleClick={handleClick}
            name="select"
          />}

          {constant && <Contant 
          handleConstant={handleConstant}
          handleClick={handleClick}
          />}

          {argument && <Argument 
          handleArgument={handleAnd}
          textFields={textFields}
          handleClick={handleClick}
          
          />}


          {select1 && <Select 
            handleSelect={handleSelect1}
              handleClick={handleClick}
              
          />}

          {constant1 && <Contant 
          handleConstant={handleConstant}
          handleClick={handleClick}
          />}

          {argument1 && <Argument 
          handleArgument={handleAnd}
          textFields={textFields}
          handleClick={handleClick}
          
          />}


          
          {op.map((text, index)=>(
            <div>
                <Select />
            </div>
          ))}
          <button onClick={handleOperation}>+ add op</button>
        </div>}
    </div>
  )
}

export default And
