import APIURL from '../environment'

const getUsers = async (auth) => {
    const response = await fetch(`${APIURL}/user/`, {
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

export default getUsers;