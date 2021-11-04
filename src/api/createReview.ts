import { IAuth, IAPIResponse, IReview } from '../interfaces';

const createReview = (auth: IAuth, review: IReview): IAPIResponse => {
    return {
        status: 200,
        json: {}
    }
}

export default createReview;