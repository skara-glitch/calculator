let clear_display = false;
function display(element){
    var value = document.getElementById("input").value;
    if(clear_display){
        document.getElementById("input").value = element;
        clear_display = false;
    }
    else{
        document.getElementById("input").value = value+element;
    }
}
function solve(){
    let exp = document.getElementById("input").value;
    let res = eval(exp);
    document.getElementById("input").value = res;
    clear_display=true;
}
function clr(){
    console.log("hello");
    document.getElementById("input").value = "";
}