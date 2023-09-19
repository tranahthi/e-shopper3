import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


function Account(){
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(!token){
            navigate("/login")
        }
    },[])

    return(
        <div>
            abc
        </div>
    )

}
export default Account