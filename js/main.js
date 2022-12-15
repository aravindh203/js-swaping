var a,b,c;
a=parseInt(prompt("first value"));
b=parseInt(prompt("second value"));
function swap(){
    c=a;
    a=b;
    b=c;
    document.write(a+"<br>");
    document.write(b+"<br>");
}
swap()
