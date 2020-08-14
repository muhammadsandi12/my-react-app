import React,{useState} from 'react'
function LoginPage(props){
    const [isInvisible,setIsInvisible]=useState(false)
    const {onClickLogin}= props

    function togglePasswordVisibility(){
        return(
            setIsInvisible(!isInvisible)
        )
    }

    return (
    
            <div className="d-flex p-2">
                <div className ="card" style ={{ width: '300px'} }>
                    <div className="card-body">

                        User name<br/>
                        <input type="text"/><br/>
                        Password
                        <br/>
                        <input type= {isInvisible?'text':'password'}/>
                        <br/>
                        <input type="checkbox" checked={isInvisible} onChange={togglePasswordVisibility}/>
                        <br/>
                        <button onClick={onClickLogin} >Login</button>
                    </div>

                </div>
            </div>
    )
}
export default LoginPage