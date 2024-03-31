import { useContext } from "react"
import { SessionContext } from "../../contexts/SessionContext"




export default function Books(){
    const{user}= useContext(SessionContext)
    return(
        <>
            <h2>
                Estas en los libros
            </h2>
        </>
    )
}