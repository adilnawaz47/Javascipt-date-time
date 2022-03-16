// Function to get value in terms of year, months and days when passing days as a parameters.
function getFormatedStringFromDays(numberOfDays) {
    var years = Math.floor(numberOfDays / 365);
    var months = Math.floor(numberOfDays % 365 / 30);
    var days = Math.floor(numberOfDays % 365 % 30);

    var yearsDisplay = years > 0 ? years + (years == 1 ? " year, " : " years, ") : "";
    var monthsDisplay = months > 0 ? months + (months == 1 ? " month, " : " months, ") : "";
    var daysDisplay = days > 0 ? days + (days == 1 ? " day, " : " days, ") : "";
    return yearsDisplay + monthsDisplay + daysDisplay; 
}

// function to get value interms of day, hours, minute, second when we are passing second as a parameter inside the function
function secondsToDhms(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600*24));
var h = Math.floor(seconds % (3600*24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var day = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
var hour = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
var min = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
var sec = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";

return getFormatedStringFromDays(d) + hour + min + sec;
}

var x = secondsToDhms(4073178)
console.log(x)



/////////////////////
// This function is used to pass day as a parameter and it convert into a year months and day value based on the conditions.

function getFormatedStringFromDays(numberOfDays) {
    var years = Math.floor(numberOfDays / 365);
    var months = Math.floor(numberOfDays % 365 / 30);
    var days = Math.floor(numberOfDays % 365 % 30);
		console.log(numberOfDays / 365 , months*30 , days*7)
    var yearsDisplay = years > 0 ? years + (years == 1 ? " year, " : " years, ") : "";
    var monthsDisplay = months > 0 ? months + (months == 1 ? " month, " : " months, ") : "";
    var daysDisplay = days > 0 ? days + (days == 1 ? " day" : " days") : "";
    if (years*365 > months*30){
   		return years+' years ' + months + ' Months'
    }else if(months*30 > years*365){
    	return months + ' Months '+ days + " days"
    }else{
    	return days + ' Days'
    }
    //return yearsDisplay + monthsDisplay + daysDisplay; 
}

x = getFormatedStringFromDays(29);
console.log(x)
///////////////