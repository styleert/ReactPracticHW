import React, { useState } from 'react'
import UserData, { userData } from './userData'


const UserCard = (props) => { 
  return(
    <div className='ctn'>
      <img src={props.user.picture}></img>
      <p>Name:{props.user.name}</p>
      <p>Age:{props.user.age}</p>
      <p>Gender:{props.user.gender}</p>
      <p>Balance:{props.user.balance}</p>
    </div>
  )
}

function App() {
  const [users, setUsers] = useState(userData)

  const handlSearchUsers = e => {
    const filter = userData.filter(user => user.name.includes(e.target.value))
    setUsers(filter)
  }

  const handlSortUsers = e => {
    const sorting = [...userData].sort((a, b) => a.age - b.age);
    setUsers(sorting)
  }

  return (
    <div className="wrapper">
      <header className="header">
      <input type="text" 
      placeholder='Enter name...'
      onChange={handlSearchUsers}
      />
      <select onChange={handlSortUsers} name="sort" id="">
        <option value="sorting">Sorting</option>
        <option value="byAge">By age</option>
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
