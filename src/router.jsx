import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import ChoicePlayer from "./page/choicePlayer/index";
import Config_game from "./page/config_game/index";

function routes(props) {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component = {ChoicePlayer}/>
                <Route path='/config_game' component = {Config_game}/>
            </Switch>
        </BrowserRouter>
    )
}

export default routes;