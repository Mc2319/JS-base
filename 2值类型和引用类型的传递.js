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