const minValueInDiaposon = 0;
const maxValueInDiaposon = 100;
const messageForLowValue = "Ваше число меньше загаданного! Введите число еще раз!";
const messageForHighValue = "Ваше число больше загаданного! Введите число еще раз!";

let randomNumber = getRandomIntInclusive(minValueInDiaposon, maxValueInDiaposon);
console.log(randomNumber);

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}


function isNumeric(num){
    return !isNaN(num)
}

let guessNumber;

for (let i = 1; i < 11; i++)
{
    console.log(i);
    guessNumber = prompt('Угадайте число!', "");
    if (guessNumber == randomNumber){
        alert("Вы победили!");
        break;
    }
    else {
        if (!isNumeric(guessNumber)) {
            alert("Вы ввели не число! Введите еще раз число");
        } else {
            guessNumber > randomNumber ? alert(messageForHighValue): alert(messageForLowValue);
            }
            ;
        }
    if (i == 10) alert("Попытки кончились! К сожалению, вы проиграли!");
}

//комп число загадывает, человеку нужно угадать, количество попыток ограничено

//1. находим число рандомом
//2. выводим сообщение промтом
//3. сравниваем введенное значение с number, выводим на экран да/нет