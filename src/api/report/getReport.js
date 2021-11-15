import APIURL from '../environment';

const getReport = async (auth) => {
    const response = await fetch(`${APIURL}/report/`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': auth.token ?? ''
        })
    })
    const json = await response.json();
    return {
        status: response.status,
        json: json
    }
}

export default getReport;