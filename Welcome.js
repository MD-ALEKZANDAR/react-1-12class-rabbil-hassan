import React,{Component} from 'react'


class Welcome extends Component{
     doThis(){
        alert("Button is clickted")
      }
render(){   
return<div>
     <button onClick={this.doThis}>Click me from class</button>
    <h1> i am a class component {this.props.name}</h1>
</div>
}
}
export default Welcome