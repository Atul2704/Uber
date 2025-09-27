import React, { createContext, useState } from 'react'

const UserDataContext = createContext();

function UserContext({children}) {
    const [user, setUser] = useState({ 
        email:'',
        fullname:{
            firstname:'',
            lastname:''
        }
    })
  return (
    <UserDataContext.Provider value={[user, setUser]}> 
        {children}
    </UserDataContext.Provider>
  )
}

export default UserContext
