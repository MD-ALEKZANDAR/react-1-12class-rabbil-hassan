import React from 'react'

function Hello(props){  

  function doThis(){
    alert('Button is clickted')
  }
     return (
       <div>
         <button onClick={doThis}>Click me</button>
     <h1>Hello i am components of a function. Name:{props.name} And Age:{props.age}</h1>
     </div>
     )
     }

export default  Hello