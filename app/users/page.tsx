import React from 'react'

interface IUser {
    id:number,
    name:string,
}

const UserPage = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const users: IUser[] = await res.json()
    // console.log(res.json())

    console.log(users)
  return (
    <div>
        { users && users.map((u)=> <div>{u.name}</div>) }
    </div>
  )
}

export default UserPage