import React, {useState} from "react";
import { Link } from "react-router-dom";
import './style.css'

function Config_game(params) {
    let audio = true;
    const [time, setTime] = useState(0);
    const [typeBurrinho, setTypeBurrinho] = useState('');
    const [style, setStyle] = useState({});
    
    
    function handleTime(e) {
        setTime(e.target.value);
    }

    function handleTypeBurrinho(e){
        console.log()
        setTypeBurrinho(e.target.value);
        animation(e.target.value)
    }

    function animation (param) {
            if(param !== 'Burrinho de:'){
                setStyle({
                    backgroundColor: 'yellow',
                    color: 'white',
                    border: 'none'
                });
            }else{
                setStyle({})
            }
    }

    return (
        <div className='container-config'>
            <h3>Configurando o Game</h3>
            <div className='row'>
                <div className='content-form'>
                    <select value={time} onChange={handleTime} >
                        <option>Sem tempo</option>
                        <option value='5'>5 segundos</option>
                        <option value='10'>10 segundos</option>
                        <option value='15'>15 segundos</option>
                        <option value='30'>30 segundos</option>
                    </select>    

                    <select value={typeBurrinho} onChange={handleTypeBurrinho} >
                        <option>Burrinho de:</option>
                        <option >País</option>
                        <option >Animais</option>
                        <option >Marca de Carros</option>
                        <option >Jogadores</option>
                    </select>        

                    <div className='group-button'>
                        <button type='button' className='circle-button' onClick={(e) => {e.preventDefault(); audio = true;}}>icon-com-voz</button>
                        <button type='button' className='circle-button' onClick={(e) => {e.preventDefault(); audio = false}}>icon-sem-voz</button>
                    </div>
                </div>

                <div className='buttons'>
                    <Link to="/" >voltar</Link>
                    <button style={style}>finalizar</button>
                </div>
            </div>
        </div>

    );
}

export default Config_game;