import { JsonObjectExpression } from 'typescript';
import { IAPIResponse, IAuth, IReport } from '../../interfaces';
import APIURL from '../environment';

const createReport = async (auth: IAuth, report: any): Promise<IAPIResponse> => {
    const response: Response = await fetch(`${APIURL}/report/`, {
        method: 'POST',
        body: JSON.stringify({
            report: report
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

export default createReport;