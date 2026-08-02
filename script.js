let arr = [];
let evaluated = false;
let num = document.querySelectorAll(".num");
let numlen = num.length;
let input = document.querySelector(".display");
for (let i = 0; i < numlen; i++) {
    num[i].addEventListener("click", function() {
        if (evaluated) {
            if (/[0-9.]/.test(num[i].textContent)) {
                arr = [];
            }
            evaluated = false;
        }
        arr.push(num[i].textContent);
        input.textContent = arr.join("");
    });
}
document.querySelector(".specialchar1").addEventListener("click", function() {
    arr = [];
    evaluated = false;
    input.textContent = arr.join("");
});
document.querySelector(".specialchar2").addEventListener("click", function() {
    arr.pop();
    input.textContent = arr.join("");
});
document.querySelector(".equ").addEventListener("click", function(){
    if (arr.length === 0) {
        return;
    }
    try {
        let expression = arr.join("");
        let result = eval(expression);
        input.textContent = result;
        arr = [String(result)];
        evaluated = true;
    } catch (error) {
        input.textContent = "Error";
        arr = [];
        evaluated = false;
    }
});
