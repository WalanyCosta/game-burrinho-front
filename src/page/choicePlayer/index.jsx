import React,{useState} from "react";
import './style.css';

function ChoicePlayer(props){
    const [playersForm, setPlayersForm] = useState([]);
    const [namesPlayers, setNamesPlayers] = useState([]);

    function handleSelectQtd(event){
        const qtd = event.target.value - 1;
        const array = [];
        filterNamesPlayerNoUse(qtd);
        for(let i = 0; i <= qtd; i++){
            array.push({num: i , placeholder: `Digite o ${i + 1} º Jogador`});
        }
        setPlayersForm(array);
    }

    function filterNamesPlayerNoUse(qtd){
        const filterCondicional = (param) => (qtd - namesPlayers.indexOf(param)) >= 0;
        let newArray = namesPlayers.filter(namePlayer => filterCondicional(namePlayer));
        setNamesPlayers(newArray);
    }

    function handleInput(value, num) {
        namesPlayers[num] = value;
        setNamesPlayers([...namesPlayers]);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(namesPlayers.length !== playersForm.length || namesPlayers.includes('')){
          alert('Empreencha todos os campos')
        }

    }

    return (
        <div className="choicePlayer-container">
        <h3>Adicionando Jogadores</h3>

        <form onSubmit={handleSubmit}>
                <select onChange={handleSelectQtd}>
                    <option>Selecione qtd Jogadores</option>
                    <option value='2'>2 Jogadores</option>
                    <option value='3'>3 Jogadores</option>
                    <option value='4'>4 Jogadores</option>
                    <option value='5'>5 Jogadores</option>
                </select>

            <section className="container-inputs">
                {
                playersForm.length === 0 ? (
                        <h3>selecione a qtd de jogadores que iram jogar</h3>
                     ):(
                        playersForm.map(player => {
                        return(
                         <div key={player.num}>
                            <label htmlFor='nome'>
                                <span>
                                icon
                                </span>
                            </label>
                            <input 
                                placeholder={player.placeholder}
                                value={namesPlayers[player.num]}
                                onChange={e=>{handleInput(e.target.value, player.num)}}
                                />
                          </div>
                            )
                        })
                    )
                }
            </section>

            <button type='submit'>Passo</button>
        </form>
    </div>
    )
}

export default ChoicePlayer;