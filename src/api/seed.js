import { createGame, createUser, loginUser } from '.';
import APIURL from './environment';
const seed = async () => {
    try {
        const { json } = await loginUser({
            username: 'admin',
            email: 'admin@gmail.com',
            password: 'password',
        });
        const adminAuth = { token: json.sessionToken };

        // [{name: 'PS5', id: 167}, {name: 'PS4', id: 48}, {name: 'XONE', id: 49}, {name: 'XSX', id: 169}]) {

        const tresponse5 = await fetch(
            'https://efa-cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Client-ID': 'ggr8i4wd68qwqk6xahsj12kzt433y1',
                    Authorization: 'Bearer mc2pq9jvuwd6isn6apyqxhvi1o43ve',
                },
                body: `fields name, cover, platforms, genres; where version_parent = null & platforms = ${48};`,
            }
        );
        const tjson5 = await tresponse5.json();
        for (const game of tjson5) {
            const tresponse2 = await fetch(
                'https://efa-cors-anywhere.herokuapp.com/https://api.igdb.com/v4/genres',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Client-ID': 'ggr8i4wd68qwqk6xahsj12kzt433y1',
                        Authorization: 'Bearer mc2pq9jvuwd6isn6apyqxhvi1o43ve',
                    },
                    body: `fields name; where id= ${game.genres?.[0] ?? 0};`,
                }
            );
            const tjson2 = await tresponse2.json();
            const genre = tjson2[0]?.name;
            console.log(game, genre);
            await fetch(`${APIURL}/game/`, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    Authorization: adminAuth.token,
                }),
                body: JSON.stringify({
                    game: {
                        title: game.name,
                        platform: 'PS4',
                        genre: genre,
                    },
                }),
            });
        }

        const tresponse6 = await fetch(
            'https://efa-cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Client-ID': 'ggr8i4wd68qwqk6xahsj12kzt433y1',
                    Authorization: 'Bearer mc2pq9jvuwd6isn6apyqxhvi1o43ve',
                },
                body: `fields name, cover, platforms, genres; where version_parent = null & platforms = ${169};`,
            }
        );
        const tjson6 = await tresponse6.json();
        for (const game of tjson6) {
            const tresponse2 = await fetch(
                'https://efa-cors-anywhere.herokuapp.com/https://api.igdb.com/v4/genres',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Client-ID': 'ggr8i4wd68qwqk6xahsj12kzt433y1',
                        Authorization: 'Bearer mc2pq9jvuwd6isn6apyqxhvi1o43ve',
                    },
                    body: `fields name; where id= ${game.genres?.[0] ?? 0};`,
                }
            );
            const tjson2 = await tresponse2.json();
            const genre = tjson2[0].name;
            console.log(game, genre);
            await fetch(`${APIURL}/game/`, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    Authorization: adminAuth.token,
                }),
                body: JSON.stringify({
                    game: {
                        title: game.name,
                        platform: 'XSX',
                        genre: genre,
                    },
                }),
            });
        }

        const tresponse7 = await fetch(
            'https://efa-cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Client-ID': 'ggr8i4wd68qwqk6xahsj12kzt433y1',
                    Authorization: 'Bearer mc2pq9jvuwd6isn6apyqxhvi1o43ve',
                },
                body: `fields name, cover, platforms, genres; where version_parent = null & platforms = ${49};`,
            }
        );
        const tjson7 = await tresponse7.json();
        for (const game of tjson7) {
            const tresponse2 = await fetch(
                'https://efa-cors-anywhere.herokuapp.com/https://api.igdb.com/v4/genres',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Client-ID': 'ggr8i4wd68qwqk6xahsj12kzt433y1',
                        Authorization: 'Bearer mc2pq9jvuwd6isn6apyqxhvi1o43ve',
                    },
                    body: `fields name; where id= ${game.genres?.[0] ?? 0};`,
                }
            );
            const tjson2 = await tresponse2.json();
            const genre = tjson2[0].name;
            console.log(game, genre);
            const response  = await fetch(`${APIURL}/game/`, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    Authorization: adminAuth.token,
                }),
                body: JSON.stringify({
                    game: {
                        title: game.name,
                        platform: 'XONE',
                        genre: genre,
                    },
                }),
            });
            const message = await response.json();
            console.log(message);
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
    } catch (e) {
        console.log('seed exception');
        console.log(e);
    }
};
// seed();

export default seed;
