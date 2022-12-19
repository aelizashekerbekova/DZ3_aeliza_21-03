for (var i = 0; i <=20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}
var sum = 0;
var num = 0;
do {
    num = parseInt(prompt("Введите число: "));
    sum += num;
} while (num >= 0);
console.log("Общая сумма чисел", sum);