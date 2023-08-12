//这是一个验证密码和确认密码是否一致的脚本
//定义及获取密码和确认密码变量
let password = document.getElementById("password")
let confirmPass = document.getElementById("confirm_password")

//定义验证密码的函数
function validatePassword() {
    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("两次输入的密码不一致！");
    } else {
        confirm_password.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;