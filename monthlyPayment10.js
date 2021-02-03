var $ = function(id) {
    return document.getElementById(id);
}
var calculate_click = function(){
    var initialLoan =0;
    var months = 0;
    var annualInterest = 0;
    var monthlyPayment = 0;
    var monthlyInterest = 0;
    
    initialLoan = parseFloat($("initial_loan").value);
    months = parseFloat($("months").value);
    annualInterest = parseFloat($("annual_interest").value);
    

monthlyInterest=(annualInterest/1200);
monthlyPayment = initialLoan * (monthlyInterest/(1 - (1+monthlyInterest)*-months));

$("monthly_payment").value = "$" + monthlyPayment.toFixed(2);


}
window.onload = function() {
    $("full_name").value = "";
    $("initial_loan").value = "";
    $("months").value = "";
    $("annual_interest").value = "";
    $("monthly_payment").value = "";
};