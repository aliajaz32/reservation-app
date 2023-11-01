import React, { useState } from 'react'

function VendorProfile() {
  const [name, setName] = useState();
  const [age,setAge]=useState();
  function submit() {
    console.log('name',name)
    console.log('age',age)
    fetch('https://nodejsapp-ind4.vercel.app/users/add', {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({
        username:name,
        age: age,
      })
    }).then(res => res.json()).then(res => console.log(res))
  }
  return (
    // https://nodejsapp-ind4.vercel.app/users/all
    <div>
      <label htmlFor="">name</label>
      <input onChange={ (e)=>  setName(e.target.value)} type="text" placeholder='enter your name' /><br />
      <label htmlFor="">age</label>
      <input type="text"  onChange={  (e)=> setAge(e.target.value)}  placeholder='enter your age' />
      <button onClick={()=>submit()}>submit</button>
    </div>
  )
}

export default VendorProfile