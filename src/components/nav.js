import React,{useState,useEffect} from 'react'
import axios from 'axios'
import logout from '../assets/icons/logout.svg'

export default function Nav(props) {
    
    const [user, setUser] = useState({status:false, name : null})
    useEffect(() => {
        axios.get('http://localhost:8080/api/user')
        .then(res=>{
        let stringArray = res.data.name.split(/(\s+)/)
        setUser({status:true,name : stringArray[0]})
        })
        
    }, [])
    return (
        <div className='nav'>
            <div className='nav-opt' onClick={()=>props.sub()}>
                <img className="nav-opt-logo" src={logout} alt=""/>
            </div>
        </div>
    )
}
