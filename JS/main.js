var int = setInterval(myClock, 1000); 
    //This sets the interval of my myClock function to repeat every 1 second

function myClock() { 
    //This is the function that is run through the 1 second interval
  var date = new Date(); 
    //This date variable gets JavsScript's default current date and time
  var time = date.toLocaleTimeString(); 
    //This runs the current date and time and gets only the date
  document.getElementById("clock").innerHTML = time; 
    //This takes the time output and pushes it to my HTML where the "clock" class is
}