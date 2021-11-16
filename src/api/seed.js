import { createGame, createUser } from '.';
import APIURL from './environment';
import logo from '../logo.png';
import SelectInput from '@mui/material/Select/SelectInput';
const seed = async () => {
    try {
        const { json } = await createUser({
            email: 'admin@email.com',
            username: 'admin',
            password: 'password'
        })
        const { json2 } = await createUser({
            email: 'moderator@email.com',
            username: 'moderator',
            password: 'password'
        })
        const adminAuth = { token: json.sessionToken }
        const modAuth = { token: json2.sessionToken }

        // [{name: 'PS5', id: 167}, {name: 'PS4', id: 48}, {name: 'XONE', id: 49}, {name: 'XSX', id: 169}]) {
            const tresponse = await fetch('https://efa-cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Client-ID': 'ggr8i4wd68qwqk6xahsj12kzt433y1', 
                    'Authorization': 'Bearer mc2pq9jvuwd6isn6apyqxhvi1o43ve',
                },
                body: `fields name, cover, platforms, genres; where version_parent = null & platforms = ${167};`
            })
            const tjson = await tresponse.json();
            console.log(tjson);
            for(const game of tjson) {

                const tresponse2 = await fetch('https://efa-cors-anywhere.herokuapp.com/https://api.igdb.com/v4/genres', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Client-ID': 'ggr8i4wd68qwqk6xahsj12kzt433y1', 
                        'Authorization': 'Bearer mc2pq9jvuwd6isn6apyqxhvi1o43ve',
                    },
                    body: `fields name; where id= ${game.genres[0] ?? 0};`
                })
                const tjson2 = await tresponse2.json();
                const genre = tjson2[0].name;
                await fetch(`${APIURL}/game/`, {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/json',
                        'Authorization': adminAuth.token
                    }),
                    body: {
                        game: {
                            title: game.name,
                            platform: 'PS5',
                            genre: genre
                        }
                    }
                })

            }

//         const response = await fetch(`${APIURL}/game/photo/cloudsign`, {
//             method: 'GET',
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//                 'Authorization': json.sessionToken
//             })
//         })
//         const { signature, timestamp } = await response.json();

//         const file = undefined // the jpg file from twitch

//         const formData = new FormData();

//         formData.append('file', file);
//         formData.append('upload_preset', 'vg-review-pic');
//         formData.append('api_key', '111786442196545');
//         formData.append('signature', signature);
//         formData.append('timestamp', timestamp);
        
//         const results = await(
//             await fetch('https://api.cloudinary.com/v1_1/dcwf8nrjl/image/upload', {
//                 method: 'POST',
//                 body: formData
//             })
//         ).json();
        
//         const photoURL = results.secure_url;
    }
    catch(e) {
        console.log('seed exception');
    }
}
// seed();

export default seed;