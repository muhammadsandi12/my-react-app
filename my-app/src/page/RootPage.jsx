import React ,{useState}from 'react'
function RootPage(props){
    const {onClickLogout}=props
    console.log("1")
    return (
        <div>
        <button onClick={onClickLogout}>Log out</button>
        </div>

    )
}
export default RootPage