const POWERBALLAPI_URL = 'https://dark-rose-betta-ring.cyclic.app/2023';


//array to store all drawing arrays
var drawings = [];

//Array to store all of the dates and numbers
var dates =[];

//Var to help count when the next
//array is in the json 
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

function myFunction(){
    console.log(drawings)
    document.getElementById("all").innerText
}
//console.log(drawings)