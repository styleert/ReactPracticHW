import React, { useState } from 'react'
import './App.css';
import UserData, { userData } from './userData'


const UserCard = (props) => { 
  return(
    <div className='ctn'  >
      <img src={props.user.picture}></img>
      <p>Name:{props.user.name}</p>
      <p>Age:{props.user.age}</p>
      <p>Gender:{props.user.gender}</p>
      <p>Balance:{props.user.balance}</p>
    </div>
  )
}

const renderConfig ={name: "", typeOfSort: "default"}

function App() {
  const [users, setUsers] = useState(userData)

  const handlSearchUsers = e => {
    const filter = userData.filter(user => user.name.includes(e.target.value))
    setUsers(filter)
  }

  // const handlSortUsers = e => {
  //   const sorting = [...userData].sort((a, b) => a.age - b.age);
  //   setUsers(sorting)
  // }

  const createArrayByConfig = () =>{
    const array = userData.filter(user => {
      return (user.name.toLowerCase()).includes(renderConfig.name)
    })
    if(renderConfig.typeOfSort === "asc"){
      return array.sort((a, b)=> a.age-b.age);
    }
    if(renderConfig.typeOfSort === "desc"){
      return array.sort((a, b)=> b.age-a.age);
    }
    return array
  }

  

  const handlSortUsers = (e) =>{
    renderConfig.typeOfSort = e.target.value;
    const array = createArrayByConfig()
    setUsers(array)
  }

  return (
    <div className="wrapper">
      <header className="header">
      <input type="text" 
      placeholder='Enter name...'
      onChange={handlSearchUsers}
      />
        <select name="Age" onChange={handlSortUsers}>
            <option  value="default">default</option>
            <option  value="asc">Age asc</option>
            <option  value="desc">Age desc</option>
        </select>
      </header>
      <main className="main">
      <div className='container'>
      {
        users.map(user => <UserCard key={user._id} user={user}/>)
      }
    </div>
      </main>
    </div>
  );
}

export default App;
