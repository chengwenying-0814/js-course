//DOM操作
//window.alert("")
//document

// 添加一个监听事件 当页面加载完成后执行操作
window.addEventListener('load', function(){
    var p1 = document.getElementById('hello')
    console.log(p1)
    p1.innerText = "wenying"

    var b1 = document.getElementById('btn')
    b1.addEventListener('click', function(){
        console.log('点击')
    }) //这些事件可以去w3 school 上查

    var box1 = document.getElementById('box')
    box1.innerHTML = '<p>Test</p>'

    //键入值就会返回
    var input1 = document.getElementById('input1')
    input1.addEventListener('keyup', function(e){
        console.log('e.target.value', e.target.value)
    })
})
// 这样又上到下执行，如果script在操作节点的下面，就无法获取了
var p1 = document.getElementById('hello')
console.log(p1);