const POWERBALLAPI_URL = 'https://dark-rose-betta-ring.cyclic.app/2023';

var drawings = [];
var dates =[];
var i =0;
    fetch(POWERBALLAPI_URL)
        .then(response => response.json())
        .then(responseJson => {
            for(let fact of responseJson ){
                i++;
                dates.push(fact)

            if(i == 7){
             //console.log(dates)
             drawings.push(dates)
             dates = [];
             i=0;
         }
     }
})

console.log(drawings)