import { JsonObjectExpression } from 'typescript';
import { IAPIResponse, IAuth } from '../../interfaces';
import APIURL from '../environment';

const getGamesByGenre = async (auth: IAuth, genre: string): Promise<IAPIResponse> => {
    const response: Response = await fetch(`${APIURL}/game/genre/${genre}`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': auth.token ?? ''
        })
    })
    const json: JsonObjectExpression = await response.json();
    return {
        status: response.status,
        json: json
    }
}

export default getGamesByGenre;