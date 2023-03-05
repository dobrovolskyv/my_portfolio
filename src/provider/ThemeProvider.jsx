import {ThemeContext} from '../context/ThemeContext'
import {useState} from 'react'
import changeCssRoutVariables from '../model/ChangeCssRoutVariables'
import { storage } from '../model/Storage'


export function ThemeProvider({children, ...props}){

    const [theme, setTheme] = useState(storage.getItem('theme') || 'dark')

    changeCssRoutVariables(theme)
    function changeTheme(theme){
       storage.setItem('theme', theme)
        setTheme(theme)
        changeCssRoutVariables(theme)
    }

    return <ThemeContext.Provider value={{
        theme: theme,
        changeTheme: changeTheme
    }}
    {...props}>
        {children}
        </ThemeContext.Provider>
}