let APIURL: string = '';

switch(window.location.hostname) {
    case 'localhost':
    case '127.0.0.1':
        APIURL = 'http://localhost:3000';
        break;
    // TODO
    default: 
        break;
}

export default APIURL;
