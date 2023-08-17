
import { useState } from 'react';
import './App.css';

function App() {
  const [input,setInput]=useState("");
  const calculateResult=(input)=>{
    
    let Result;
    try{
    const opp=["+","-","*","/"]
    let opprater;
    
    for(let i=0;i<input.length;i++){
       if(opp.includes(input[i])){
       
        opprater=input[i];
      
        break;
       }
       
    }
    if(!opprater){
      setInput(parseFloat(input));
      return;
    }
    const[operand1,operand2]=input.split(opprater).map(parseFloat);
   
    switch(opprater)
{
   case '+': Result=operand1 + operand2;
   break;

   case '-': Result=operand1 - operand2;
   break;

   case '*': Result=operand1 * operand2;
   break;

   case '/': Result=operand1 / operand2;
   break;
   default:
    throw new Error("invalid operator")
}  
setInput(Result.toString());
  }
    catch(error){

    }
  }
  const handelClick=(val)=>{
    if(val==='C'){
      setInput("");
    }
    else if(val==='&lt;'){
      setInput(input.slice(0,-1));
    }
    else if(val === '='){
      
     calculateResult(input);
    }
    else{
      setInput((preValue)=>preValue + val);
    } 
  }
  return (
    <div className="container">
      <div className='calc'>
        <h1 id='input'>{input}</h1>
        <div className='Button row'>
          <button onClick={()=>{handelClick('C')}}>C</button>
          <button onClick={()=>{handelClick('&lt;')}}>&lt;</button>
          <button onClick={()=>{handelClick('%')}}>%</button>
          <button onClick={()=>{handelClick('/')}}>/</button>
        </div>
        <div>
          <button onClick={()=>{handelClick('7')}}>7</button>
          <button onClick={()=>{handelClick('8')}}>8</button>
          <button onClick={()=>{handelClick('9')}}>9</button>
          <button onClick={()=>{handelClick('-')}}>-</button>
        </div>
        <div>
          <button onClick={()=>{handelClick('4')}}>4</button>
          <button onClick={()=>{handelClick('5')}}>5</button>
          <button onClick={()=>{handelClick('6')}}>6</button>
          <button onClick={()=>{handelClick('*')}}>*</button>
        </div>
        <div>
          <button onClick={()=>{handelClick('1')}}>1</button>
          <button onClick={()=>{handelClick('2')}}>2</button>
          <button onClick={()=>{handelClick('3')}}>3</button>
          <button onClick={()=>{handelClick('+')}}>+</button>
        </div>
        <div>
          <button onClick={()=>{handelClick('0')}}>0</button>
          <button onClick={()=>{handelClick('00')}}>00</button>
          <button onClick={()=>{handelClick('.')}}>.</button>
          <button onClick={()=>{handelClick('=')}}>=</button>
        </div>





      </div>
    </div>
  );
}

export default App;
