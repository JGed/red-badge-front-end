import { JsonObjectExpression } from 'typescript';
import { IUser, IAPIResponse } from '../../interfaces';
import APIURL from '../environment';
const createUser = async (user: IUser): Promise<IAPIResponse> => {

    const response: Response = await fetch(`${APIURL}/user/register`, {
        method: 'POST',
        body: JSON.stringify({
            user: user
        }),
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    })
    const json: JsonObjectExpression = await response.json();
    return {
        status: response.status,
        json: json
    }
}

export default createUser;