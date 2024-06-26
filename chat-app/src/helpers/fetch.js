//const baseURL = process.env.REACT_APP_API_URL;

export const fetchSinToken = async (endpoint, data, method = 'GET') => {


    //const url = `${baseURL}/${endpoint}`
    const url = `https://api.my-chat-project.club/api/${endpoint}`;
    
    //console.log(url)
    if (method === 'GET') {
        const resp = await fetch(url);

        return await resp.json()
    } else {

        const resp = await fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        return await resp.json();
    }
}

export const fetchConToken = async (endpoint, data, method = 'GET') => {


    //const url = `${baseURL}/${endpoint}`;
    const url = `https://api.my-chat-project.club/api/${endpoint}`;
    const token = localStorage.getItem('token') || ''

    // console.log(url)
    if (method === 'GET') {
        const resp = await fetch(url, {
            headers: {
                'x-token': token
            }
        });

        return await resp.json()
    } else {

        const resp = await fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify(data)
        })

        return await resp.json();
    }
} 