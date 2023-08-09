const POWERBALLAPI_URL = 'http://localhost:8010/proxy';


fetch(POWERBALLAPI_URL).then(response => response.json())
    .then(responseJson => console.log(responseJson)).catch(error => {
        console.log(error)
    }); 
    

/*
    fetch('https://dark-rose-betta-ring.cyclic.app/', {
        mode: 'no-cors'
    }).then(response => response.json())
     .then(responseJson => console.log(responseJson)).catch(error => {
        console.log(error)
    })

    */