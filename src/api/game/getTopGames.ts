import { JsonObjectExpression } from 'typescript';
import { IAPIResponse, IAuth } from '../../interfaces';
import APIURL from '../environment';

const getTopGames = async (auth: IAuth): Promise<IAPIResponse> => {

    const response: Response = await fetch(`${APIURL}/game/`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    const json: JsonObjectExpression = await response.json();
    return {
        status: response.status,
        json: json
    }
}

export default getTopGames;