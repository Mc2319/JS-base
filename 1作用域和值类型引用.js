var num1 = 50;
var num2 = 60;

function f1(num1,num) {
    //定义变量num、num1
    num = 100;
    num1 = 100;
    num2 = 100;
    console.log(num1);
    console.log(num2);
    console.log(num);
}

//给函数传值，num1=50；num2=60
f1(num1,num2);
console.log(num1);
console.log(num2);
//num未定义，报错
console.log(num);