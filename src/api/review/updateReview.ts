import { JsonObjectExpression } from 'typescript';
import { IAuth, IAPIResponse, IReview } from '../../interfaces';
import APIURL from '../environment';
const updateReview = async (auth: IAuth, review: any): Promise<IAPIResponse> => {

    const response: Response = await fetch(`${APIURL}/review/id/${review.id}`, {
        method: 'PUT',
        body: JSON.stringify({
            review: review
        }),
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

export default updateReview;