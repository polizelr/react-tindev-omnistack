import React, {useState} from 'react'

import './Login.css'
import api from '../services/api'

import logo from '../assets/logo.svg'

export default props => {
    const [username, setUsername] = useState('');   

    async function handleSubmit(e){
        e.preventDefault()        
        const response = await api.post('/devs', {username})
        const {_id} = response.data;       
        props.history.push(`/dev/${_id}`)       
    }

    return(
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Logo" /> 
                <input 
                    type="text" 
                    placeholder="Digite seu usuário no Github "
                    name="user"
                    value={username}
                    onChange={e=>setUsername(e.target.value)}/>
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}