function doSomething(){
    let a = document.getElementById('inputA').value;
    let b = document.getElementById('inputB').value;

    document.getElementById('valueA').innerHTML = Number(a);
    document.getElementById('valueB').innerHTML = Number(b);
    document.getElementById('valueC').innerHTML = Number(a) + Number(b);
}