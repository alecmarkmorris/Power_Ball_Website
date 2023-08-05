const POWERBALLAPI_URL = 'https://dark-rose-betta-ring.cyclic.app/';

fetch(POWERBALLAPI_URL,{
    mode:'no-cors'
}).then(response => response.json())
    .then(responseJson => console.log(responseJson)).catch(error => {
        console.log(error)
    })