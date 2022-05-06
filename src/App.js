import React from 'react';
import { useState } from 'react';
import './App.css';
import AddUser from './Users/AddUser';
import UsersList from './Users/UsersList';

function App() {
  const[userList, setUserList] = useState([])

  const addUserHandler =(uName,uAge)=>{
    console.log(uName,uAge)
    setUserList(prevUserList=>{
      return [...prevUserList, {name:uName,age:uAge,id:Math.random().toString()}]
    })
  }




  return (
    
    <div className="App">
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={userList}/>
      </div>
  );
}

export default App;

function func(){
  let number=0;
  number= +10;
  return number ;
}
console.log(func())
