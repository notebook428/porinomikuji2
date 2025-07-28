//1
const myNamae = "帆立甲斐"; 
const myAge = 35;

console.log( "名前：" + myNamae );
console.log( "年齢:" + myAge );

//2-1
const apple = 100;
const banana = 80;
const total = apple * 3 + banana * 2
console.log("リンゴ3つとバナナ2つの値段は"+total+"円です。");

//2-2
console.log("おつりは"+(1000-total)+"円です。");

//3
const herNamae = "さくら";
const animal = "パンダ";
const herAge = 16;
console.log("こんにちは"+herNamae+"です。 年齢は"+herAge+"です。 好きな動物は"+animal+"です。")

//4-1
const student = [68 , 83 , 97];

if (student[0] >= 90) {
    console.log("Aくんは"+student[0]+"点で優秀です。")
} else if(student[0] >=80 ){
    console.log("Aくんは"+student[0]+"点で合格です。");
} else {
    console.log("Aくんは"+student[0]+"点で不合格です。");
};

if (student[1] >= 90) {
    console.log("Bくんは"+student[1]+"点で優秀です。")
} else if(student[1] >=70 ){
    console.log("Bくんは"+student[1]+"点で合格です。");
} else {
    console.log("Bくんは"+student[1]+"点で不合格です。");
};

if (student[2] >= 90) {
    console.log("Cくんは"+student[2]+"点で優秀です。")
} else if(student[2] >=70 ){
    console.log("Cくんは"+student[2]+"点で合格です。");
} else {
    console.log("Cくんは"+student[2]+"点で不合格です。");
};

//6-1　6-3
for (let i = 1; i <= 10; i++){
    console.log(i+"回目")
};

//6-2
for (let i = 1; i <= 10; i++){
    if((i-1)%2){console.log(i+"番")}
};