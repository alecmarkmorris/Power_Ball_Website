const POWERBALLAPI_URL = 'https://dark-rose-betta-ring.cyclic.app/';

//array to store all drawing arrays
var drawings = [];

//Array to store all of the dates and numbers
var dates =[];

//Var to help count when the next
//array is in the json 
var i =0;

//Var to store the year Selected by user
var year= "";


//Function determine Selected options 
//Inluding Year,....
function selected(){
    year = document.getElementById("years")
    yearSelected(year.options[year.selectedIndex].value);
}


//Helper function that logs the year Selected
function yearSelected(year){
    if(year == "Select Year"){
        alert("Please Select a Year")
    }
    console.log("Selected Year is: " + year)
    apiCall(year)
}


//Function that calls API
//And stores all the drawings for a specified range
function apiCall(year){
    console.log("The URL is : " + POWERBALLAPI_URL + year)
    fetch(POWERBALLAPI_URL + year)
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
}


//Must clear array before testing a new year
drawings = [];//Must clear array before testing a new year
drawings = [];//Must clear array before testing a new year
drawings = [];//Must clear array before testing a new year
drawings = [];