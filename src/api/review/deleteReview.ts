import { JsonObjectExpression } from 'typescript';
import { IAPIResponse, IAuth, IReview } from '../../interfaces';
import APIURL from '../environment';

const deleteReview = async (auth: IAuth, review: any): Promise<IAPIResponse> => {
    const response: Response = await fetch(`${APIURL}/review/id/${review.id}`, {
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

export default deleteReview;