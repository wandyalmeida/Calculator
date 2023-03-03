//Adding function to calculator
function Sum(){
    var num = parseFloat(document.querySelector("#FirstNumber").value);
    var num2 = parseFloat(document.querySelector("#SecondNumber").value);
    document.getElementById('Result').innerHTML = num + num2;


}
function Sub(){
    var num = parseFloat(document.querySelector("#FirstNumber").value);
    var num2 = parseFloat(document.querySelector("#SecondNumber").value);
    document.getElementById("Result").innerHTML= num - num2;


}
function Mult(){
    var num = parseFloat(document.querySelector("#FirstNumber").value);
    var num2 = parseFloat(document.querySelector("#SecondNumber").value);
    document.getElementById("Result").innerHTML= num * num2;


}
function Divide(){
    var num = parseFloat(document.querySelector("#FirstNumber").value);
    var num2 = parseFloat(document.querySelector("#SecondNumber").value);
    if(num2 == 0){
        alert("Division by zero");
    }else{
        document.getElementById("Result").innerHTML= num / num2;

    }
    

}