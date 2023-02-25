import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext( );

export default function AppContextProvider ({children}){
    const [Theme,SetTheme] = useState('light');

    const ToggleTheme = ( ) =>{
        SetTheme(Theme === 'light' ? 'dark' : 'light')
    }
        return (
        <>
        <AppContext.Provider value={{Theme,SetTheme,ToggleTheme}}>
            {children}
        </AppContext.Provider>
        </>
    )
} 