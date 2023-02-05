let title = '提示信息'   //1 定义字符串
let title1 = '错误'
let title2 = '成功'

let alert1 = title + title1   //字符串拼接

let alert2 = title + title2
console.log(alert1);   //输出到浏览器console
console.log(alert2);

let num = 100
console.log(num); //2 定义数字
// + - / * %  这是数字的常规运算符

let is = true   //3 定义布尔类型 
console.log(is);  

let myName1 = null   //4 定义空值
console.log(myName1)
let myName2 = undefined  // 未定义
console.log(myName2)

//var  let  const  定义变量的三个关键字

//const 关键字是不能修改的 这是与其他两个的不同之处

let classA = ['小明', '小白', '小强']  //5 列表（阵列）
console.log(classA)
classA.push('小黄')
console.log(classA)
console.log('第一个元素值：', classA[0])  //取值

let n = classA.length  //列表长度

//5 字典（物件）
const card1 = {
    name: 'wenying',
    address: 'china',
    age:18
}
console.log(card1.name)  //取值


const card2 = {
    name: 'wenying',
    address: 'china',
    age:18
}
// 阵列和 物件 配合使用，可以完成多个场景应用
const demo = [
    card1,
    card2
]

