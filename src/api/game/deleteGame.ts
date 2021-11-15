import { JsonObjectExpression } from 'typescript';
import { IAPIResponse, IAuth, IGame } from '../../interfaces';
import APIURL from '../environment';

const deleteGame = async (auth: IAuth, game: IGame): Promise<IAPIResponse> => {
    const response: Response = await fetch(`${APIURL}/game/id/${game.id}`, {
        method: 'DELETE',
        headers: new Headers({
            'Authorization': auth.token ?? ''
        })
    })
    const json: JsonObjectExpression = await response.json();
    return {
        status: response.status,
        json: json
    }
}

export default deleteGame;