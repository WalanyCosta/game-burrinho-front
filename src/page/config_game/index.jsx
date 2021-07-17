import React from "react";
import './style.css'

function config_game(params) {
    return (
        <div className='container-config'>
            <h3>Configurando o Game</h3>
            <div className='row'>
                <form>
                    <select>
                        <option>Sem tempo</option>
                        <option>5 segundos</option>
                        <option>10 segundos</option>
                        <option>15 segundos</option>
                        <option>30 segundos</option>
                    </select>    

                    <select>
                        <option>Burrinho de:</option>
                        <option>País</option>
                        <option>Animais</option>
                        <option>Marca de Carros</option>
                        <option>Jogadores</option>
                    </select>        

                    <div className='group-button'>
                        <button className='circle-button'>icon-com-voz</button>
                        <button className='circle-button'>icon-sem-voz</button>
                    </div>
                </form>

                <div className='buttons'>
                    <button >voltar</button>
                    <button >finalizar</button>
                </div>
            </div>
        </div>

    );
}

export default config_game;