import {useNavigate} from "react-router-dom"
import {Backgroud} from "./style"
import Logo from '../../components/assets/logo.svg'

export const HomePage = () =>{
    const navigate= useNavigate();
    setTimeout(() => {
        navigate("/login")
    }, 10000);
    return(
        <Backgroud
        onClick={()=>navigate("/login")}
        >
         <img src={Logo}></img>
        </Backgroud>
    )
}