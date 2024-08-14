import React from 'react'

function Welcome() {

  let calculateResult = (telugu:number, hindi:number, english:number)=>{
    console.log("inside calculateResult");
    console.log(telugu, hindi, english);
  }
  calculateResult(1,2,3);
  
  return (
    <div>Welcome</div>
  )
}

export default Welcome