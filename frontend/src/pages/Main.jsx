import React, {useEffect} from 'react'

import './Main.css'

import api from '../services/api'

import logo from '../assets/logo.svg'
import like from '../assets/like.svg'
import dislike from '../assets/dislike.svg'

export default props => {

    useEffect(()=>{
        async function loadUsers(){
            const response = await api.get('/devs', {
                headers: {
                    user: props.match.params.id
                }
            })
            console.log(response)
        }
        loadUsers()
    }, [props.match.params.id])



    return(
        <div className="main-container">
            <img src={logo} alt="Logo"/>
            <ul>
                <li>
                    <img src="https://avatars0.githubusercontent.com/u/4248081?v=4" alt="Avatar"/>
                    <footer>
                        <strong>Filipe Deschamps</strong>
                        <p>Programador e cantor sertanejo nos tempos livres</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>   
                        </button>
                        <button type="button">
                            <img src={like} alt="Like"/>   
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars0.githubusercontent.com/u/4248081?v=4" alt="Avatar"/>
                    <footer>
                        <strong>Filipe Deschamps</strong>
                        <p>Programador e cantor sertanejo nos tempos livres</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>   
                        </button>
                        <button type="button">
                            <img src={like} alt="Like"/>   
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars0.githubusercontent.com/u/4248081?v=4" alt="Avatar"/>
                    <footer>
                        <strong>Filipe Deschamps</strong>
                        <p>Programador e cantor sertanejo nos tempos livres</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>   
                        </button>
                        <button type="button">
                            <img src={like} alt="Like"/>   
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars0.githubusercontent.com/u/4248081?v=4" alt="Avatar"/>
                    <footer>
                        <strong>Filipe Deschamps</strong>
                        <p>Programador e cantor sertanejo nos tempos livres</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>   
                        </button>
                        <button type="button">
                            <img src={like} alt="Like"/>   
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}