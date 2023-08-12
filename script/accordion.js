//这是一个手风琴特效脚本
const lis = document.querySelectorAll('.container .box ul li');
for (let i = 0; i < lis.length; i++) {
    //鼠标移入
    lis[i].onmouseover = function() {
            for (let j = 0; j < lis.length; j++) {
                lis[j].classList.remove('active');
            }
            this.classList.add('active');
        }
        //鼠标移出
    lis[i].onmouserout = function() {
        for (let j = 0; j < lis.length; j++) {
            lis[j].classList.remove('active');
        }
    }
}