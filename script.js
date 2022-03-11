function compute()
{
    //Variable initialization
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //Compute for Interest
    var interest = principal * years * rate /100;

    //Convert to actual year
    var year = new Date().getFullYear()+parseInt(years);

    //Add validation if principal value is less than or equal to 0
    if(principal <= 0){
        alert("Enter a positive number");

        //after clicking close, will focus to principal text input
        document.getElementById("principal").focus();
    }else{
        // show output in result id
        document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>";
    }
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    //replace the value of rate_val when changing the value of interest rate
    document.getElementById("rate_val").innerText=rateval+"%";
}