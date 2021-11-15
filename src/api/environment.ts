let APIURL: string = '';

switch(window.location.hostname) {
    case 'localhost':
    case '127.0.0.1':
        APIURL = 'http://localhost:3000';
        break;
    case 'jbg-vg-reviews.herokuapp.com':
        APIURL = 'https://jbg-vg-reviews-back.herokuapp.com';
        break;
    default: 
        break;
}

export default APIURL;
