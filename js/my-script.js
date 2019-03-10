var btnElement =document.getElementById("btn");

btnElement.onclick=function ()
{
    var firstNameValue=document.getElementById("firstName").value;
    var lastNameValue=document.getElementById("lastName").value;
    var fullName=firstNameValue+" "+lastNameValue;
    document.getElementById("fullName").value=fullName;


}

var addElement =document.getElementById("add");

addElement.onclick=function ()
{
    var firstNumberValue=Number(document.getElementById("firstNumber").value);
    var lastNumberValue=Number(document.getElementById("lastNumber").value);
    var result=firstNumberValue+lastNumberValue;
    document.getElementById("result").value=result;
}

var subElement =document.getElementById("sub");

subElement.onclick=function ()
{
    var firstNumberValue=Number(document.getElementById("firstNumber").value);
    var lastNumberValue=Number(document.getElementById("lastNumber").value);
    var result=firstNumberValue-lastNumberValue;
    document.getElementById("result").value=result;
}

var mulElement =document.getElementById("mul");

mulElement.onclick=function ()
{
    var firstNumberValue=Number(document.getElementById("firstNumber").value);
    var lastNumberValue=Number(document.getElementById("lastNumber").value);
    var result=firstNumberValue*lastNumberValue;
    document.getElementById("result").value=result;
}

var divElement =document.getElementById("div");

divElement.onclick=function ()
{
    var firstNumberValue=Number(document.getElementById("firstNumber").value);
    var lastNumberValue=Number(document.getElementById("lastNumber").value);
    var result=firstNumberValue/lastNumberValue;
    document.getElementById("result").value=result;
}