//这是轮播图的脚本
//轮播图数据
const data = [
    { url: "images/1.gif", title: "深渊市房屋出租", color: '#78ffd1' },
    { url: "images/2.gif", title: "企鹅物流三日达", color: '#4286F3' },
    { url: "images/3.gif", title: "钻石小区优惠中", color: '#EB4537' },
    { url: "images/4.gif", title: "柴米油盐小卖部", color: '#FAC230' },
    { url: "images/5.gif", title: "兔萝卜安全放心", color: '#55AF7B' }
];
//获取元素
const img = document.querySelector('.container .box .up .carousel img');
const title = document.querySelector('.container .box .up .carousel .title');
const p = document.querySelector('.container .box .up .carousel .title p');
const lis = document.querySelectorAll('.container .box .up .carousel ul li');
let i = 0;
//自动轮播方法
function next() {
    i++;
    if (i >= data.length) {
        i = 0;
    }
    img.src = data[i].url;
    p.innerHTML = data[i].title;
    title.style.backgroundColor = data[i].color;
    for (let j = 0; j < lis.length; j++) {
        lis[j].classList.remove('active');
    }
    lis[i].classList.add('active');

}

function prev() {
    i--;
    if (i < 0) {
        i = data.length - 1;
    }
    img.src = data[i].url;
    p.innerHTML = data[i].title;
    title.style.backgroundColor = data[i].color;
    for (let j = 0; j < lis.length; j++) {
        lis[j].classList.remove('active');
    }
    lis[i].classList.add('active');

}
//开启定时器自动轮播
let timer = setInterval(next, 2000);
//鼠标移入轮播图，暂停定时器
const carousel = document.querySelector('.container .box .up .carousel');
carousel.addEventListener('mouseover', function() {
    clearInterval(timer);
});
//鼠标移出轮播图，再次开启定时器
carousel.addEventListener('mouseout', function() {
    timer = setInterval(next, 2000);
});
//鼠标点击左右按钮切换轮播图
const left = document.querySelector('.container .box .up .carousel .left');
const right = document.querySelector('.container .box .up .carousel .right');
left.addEventListener('click', prev);
right.addEventListener('click', next);
//点击对应的小圆点直接跳转到相应数据
//给对应的li添加下标
for (let j = 0; j < lis.length; j++) {
    lis[j].setAttribute('index', j);
}
//添加响应事件
for (let j = 0; j < lis.length; j++) {
    lis[j].addEventListener('click', function() {
        let k = lis[j].getAttribute('index');
        img.src = data[k].url;
        p.innerHTML = data[k].title;
        title.style.backgroundColor = data[k].color;
        for (let l = 0; l < lis.length; l++) {
            lis[l].classList.remove('active');
        }
        lis[k].classList.add('active');
    });
}