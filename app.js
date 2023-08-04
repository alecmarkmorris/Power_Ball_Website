const POWERBALLAPI_URL = 'http://localhost:8010/proxy/dark-rose-betta-ring.cyclic.app';

fetch(POWERBALLAPI_URL)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))