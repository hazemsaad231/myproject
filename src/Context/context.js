'use client';


import { createContext } from 'react'
import { useState } from 'react';


export const Context = createContext(null);

export const ContextProvider = (props) => {

     const [active, setActive] = useState(null);

//        const response = await fetch("https://api.myjson.online/v1/records/b1691286-4153-4a2e-9a06-85ed11914e01");
//   const data = await response.json();
//   const theData = data.data


    return(
        <>
        <Context.Provider value={{active, setActive}}>{props.children}</Context.Provider>
        </>
    )
}
