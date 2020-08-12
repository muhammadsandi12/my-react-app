import React,{useState} from 'react'
function  Button(props){
  const {children}=props
  const [active,setActive] =useState(false)
    // function handClick(){
    //   console.log(props)
    //   console.log('click')
    // }
  const handleClick =()=>{
    setActive(!active)
  }
  
    return (
      <button
        type="Button"
      onClick={handleClick}
      >
      {children}:
      {active? 'active':'notactive'}
       </button>
    )
  }

  export default Button