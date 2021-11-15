import { JsonObjectExpression } from 'typescript';
import { IAuth, IAPIResponse, IReport } from '../../interfaces';
import APIURL from '../environment';
const updateReport = async (auth: IAuth, report: IReport): Promise<IAPIResponse> => {

    const response: Response = await fetch(`${APIURL}/report/${report.id}`, {
        method: 'PUT',
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

export default updateReport;