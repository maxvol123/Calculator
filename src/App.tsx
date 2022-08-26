import { useState } from "react";
import { Box } from "./components/Box";
import { Button } from "./components/Button";
import { ButtonBox } from "./components/ButtonBox";
import { Screen } from "./components/Screen";
import {evaluate} from 'mathjs'
function App() {
  let Btn = [
    ["C","+-","%","/"],
    [7,8,9,"*"],
    [4,5,6,"-"],
    [1,2,3,"+"],
    [0,".","="]
  ]
  const [value, setValue]=useState("")
  function Calc(btn:any) {
    if (btn.toString()==="C") {
      setValue("")
      return
    }
    if ((btn.toString()==="+"||btn.toString()==="-"||btn.toString()==="*"||btn.toString()==="/")&&value.slice(-1)===btn.toString()) {
      return
    }
    if (btn.toString()==="=") {
      console.log(evaluate(value));
      setValue(evaluate(value).toString())
      return
    }
    console.log(value.slice(-1));
    
    setValue(value+btn.toString())
  }
  return (
<>
<Box>
  <Screen value={value}/>
  <ButtonBox>
    {Btn.flat().map((btn,i)=><Button click={()=>{Calc(btn)}} value={btn} key={i}/>)}
  </ButtonBox>
</Box>
</>
  );
}

export default App;
