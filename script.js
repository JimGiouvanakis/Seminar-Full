function compute()
{
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + years;
    
    document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,<br/>" +
        "At an interest rate of <mark>" + rate + "</mark>,<br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
        "In the year <mark>" + year + "</mark>";
    
}

function showVal() {
    document.getElementById("rateSpan").innerHTML = document.getElementById("rate").value;
}

function checkPositive() {
    var principal = document.getElementById("principal").value;
    var biggerThanZero = parseInt(principal) > 0;
    if (!biggerThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

}     