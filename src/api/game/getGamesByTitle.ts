import { JsonObjectExpression } from 'typescript';
import { IAPIResponse, IAuth } from '../../interfaces';
import APIURL from '../environment';

const getGamesByTitle = async (auth: IAuth, title: string): Promise<IAPIResponse> => {
    const response: Response = await fetch(`${APIURL}/game/title/${title}`, {
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

export default getGamesByTitle;