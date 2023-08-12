//这是用来关闭广告的脚本
//获取对象
const x1 = document.querySelector('.ad1 .x');
const ad1 = document.querySelector('.ad1');
//关闭广告
x1.addEventListener('click', function() {
    ad1.style.display = 'none';
});
const x2 = document.querySelector('.ad2 .x');
const ad2 = document.querySelector('.ad2');
x2.addEventListener('click', function() {
    ad2.style.display = 'none';
})