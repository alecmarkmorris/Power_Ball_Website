const POWERBALLAPI_URL = 'https://dark-rose-betta-ring.cyclic.app/all';


fetch(POWERBALLAPI_URL).then(response => response.json())
    .then(responseJson => console.log(responseJson)).catch(error => {
        console.log(error)
    }); 
    
