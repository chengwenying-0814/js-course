var condition= 10 != 101
console.log(condition)
//流程控制语句  
//if ....else  
//if ... else if  ...else
//swith case
if(condition){
    console.log("条件成立");
}else{
    console.log("条件不成立");
}

var score = 100

if(score == 100){
    console.log("成绩为100");
}else if(score<100){
    console.log("成绩小于100");
}else{
    console.log("成绩大于100");
}

switch(score){
    case 100:
        console.log("成绩为100");
    case 200: 
        console.log("成绩为200");
}


//循坏控制语句
//for 循坏 
for(var i = 0; i<10;i++){
    console.log(i);
}
var num1 = 0
//while 循环  
while(num++ < 5){
    console.log(123);
}
//do  while 执行6次
do{
    console.log(123);
}while(num1++ < 5)



//函数  代码变得更加整洁，方便维护
function hello(){
    console.log('你好');
}

hello()
// 传入参数函数
function price(price1, price2, price3){
    console.log('price1',price1);
    console.log(price1 + price2 - price3);
}
price(100,200,10)
//有回传值得函数 return
function addMoney(price1, price2, price3){
    return price1+ price2 + price3
}
addMoney(100,200,10) 

//构造函数第一种形式
function creatCard(initName){
    this.name = initName
}
var a1 = new creatCard('小明1')
var a2 = new creatCard('小明2')
var a3 = new creatCard('小明3')
var a4 = new creatCard('小明4')//等同于 var card = {  name : " xxx"}

//构造函数第二种形式
class card{
    constructor(initName){
        this.name = initName
    }
}

var a5 = new card('小明5')



//总结  函数的三种形式
function xxx()  {   }

var hello = function () {   }

var hello = () => {    }
