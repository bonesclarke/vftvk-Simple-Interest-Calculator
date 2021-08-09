function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>";
    
    //Check if principal field is empty or has a negative value
    if(principal < 0){
        alert("Enter a positive number");
        principal.focus();
        return false;
    }
    else if(principal == ""){
        alert("Please enter a principal amount");
        principal.focus();
        return false;
    }
    //If all is well return true.
    return true;
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        