import React ,{useState, Fragment}from 'react'
import Axios from 'axios'

function InputComponent(){
const [name,setName]= useState('')
const [address,setAddress]= useState('')
function handleChange(e){
    console.log(e)
    setName(e.target.value)
}
function handleAddress(e){
    console.log(e)
    setAddress(e.target.value)
}


// const handleClick=(e)=>{
//     alert(name)
// }
const handleClick=(e)=>{
    //alert(`${name},${address}`)
    const data ={
        name,address
    }
    //Axios.post('http://localhost:4000', data)
    Axios.post('http://192.168.100.224:4000',data)
}
  return(
    //   <div>
    // <input 
    // style={{margin:'10px'}} 
    // onChange={handleChange}
    // name={name}
    // />
    // <p>{name}</p>
    //   <button onClick={handleClick}>Kirim</button>
    //   </div>
    <Fragment>
        <br/>
    Nama : <input 
    style={{margin:'10px'}} 
    onChange={handleChange}
    name={name}
    />
    {/*<p>{name}</p>*/}
    <br/>
    Alamat : <input 
    style={{margin:'10px'}} 
    onChange={handleAddress}
    address={address}
    />
    {/*<p>{address}</p>*/}
      <button onClick={handleClick}>Kirim</button>
      </Fragment>

  )
}

export default InputComponent;