import React from 'react'

function Redtext(props){
  const {children}=props
  const gaya ={color: 'red'}  
  return(
    <span style = {gaya}>
        {children}
    </span>
  )
}

export default Redtext;