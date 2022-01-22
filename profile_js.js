 function myFunction() {
  let text;
  let person = prompt("Please enter your name:", "Harry Potter");
  if (person == null || person == "") {
    text = "Please enter your name";
  } else {
    text = "Hello " + person ;
  }
  document.getElementById("demo").innerHTML = text;
}

var myDate = new Date(); 
        var myDay = myDate.getDay(); 
        
        // Array of days. 
        var weekday = ['Sunday', 'Monday', 'Tuesday', 
            'Wednesday', 'Thursday', 'Friday', 'Saturday' 
        ]; 
        document.write("Today is : " + weekday[myDay]); 
        document.write("<br/>"); 
        
        // get hour value. 
        var hours = myDate.getHours(); 
        var ampm = hours >= 12 ? 'PM' : 'AM'; 
        hours = hours % 12; 
        hours = hours ? hours : 12; 
        var minutes = myDate.getMinutes(); 
        minutes = minutes < 10 ? '0' + minutes : minutes; 
        var myTime = hours + " " + ampm + " : " + minutes +  
            " : " + myDate.getMilliseconds(); 
        document.write("\tCurrent time is : " + myTime);