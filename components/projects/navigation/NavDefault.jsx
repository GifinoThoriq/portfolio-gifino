import { useState } from 'react'

export default function NavDefault({onIndexChange}){

    const [index, setIndex] = useState(1)
    
    function listHandler(i){
        setIndex(i)
        onIndexChange(i)
    }

    return(
        <ul>
            <li 
                onClick={()=>{listHandler(1)}} 
                style={{opacity: index === 1 ? 1 : 0.5}}
            > 
                UI UX Design 
            </li>
            <li 
                onClick={()=>{listHandler(2)}}
                style={{opacity: index === 2 ? 1 : 0.5}}
            >
                Web Development
            </li>
            <li 
                onClick={()=>{listHandler(3)}} 
                style={{opacity: index === 3 ? 1 : 0.5}}
            >
                Internet of Things
            </li>
        </ul>
    )
}