# 1:Js变量作用域

求以下代码的输出结果

```javascript
var num1 = 50;
var num2 = 60;

function f1(num,num1) {
    num = 100;
    num1 = 100;
    num2 = 100;//
    console.log(num1);
    console.log(num2);
    console.log(num);
}

f1(num1,num2);
console.log(num1);
console.log(num2);
console.log(num);
```

## 1.1在函数f1当中

定义形式参数num、num1

传参num1，num2

```javascript
var num = 50;

var num1 = 60;
```

f1函数中未定义num2，所以num2为全局变量num2

```javascript
var num2 = 60;
num2 = 100;
```

输出结果为：

```
100
100
100
```



## 1.2函数外输出

在函数外，num1为全局变量，在函数f1中未做更改，输出50，num2为全局变量，但在函数f1中更新为100，故输出100，全局变量未定义num变量，打印输出结果报错。

```
50
100
num is not defined
```

# 2值类型和引用类型的传递

如下代码输出结果

```js
function Person(name,age,salary){
    this.name = name ;
    this.age = age ;
    this.salary = salary ;
}

function f1(person) {
    person.name = "cc";
    person = new Person("aa","19","10");
}

var p = new Person("bb","20","11");
console.log(p.name);
f1(p);
console.log(p.name);
```

## 2.1第一个输出结果

定义变量p，给函数Person传参（"bb",""），输出p.name = bb；

```
bb
```

## 2.2第二个输出结果

函数f1传参为p，执行如下，

```javascript
var person = p;
person.name = "cc";//this.name = "cc";
person = new Person("aa","19","10")；//person.name = 'aa'；
//在堆内存中重新开辟空间存放
```

输出结果为：

```
cc
```

