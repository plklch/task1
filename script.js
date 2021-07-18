const MIN_VALUE_IN_DIAPOSON = 0;
const MAX_VALUE_IN_DIAPOSON = 100;
const MESSAGE_FOR_LOW_VALUE = "Ваше число меньше загаданного! Введите число еще раз!";
const MESSAGE_FOR_HIGH_VALUE = "Ваше число больше загаданного! Введите число еще раз!";

let randomNumber = getRandomIntInclusive(MIN_VALUE_IN_DIAPOSON, MAX_VALUE_IN_DIAPOSON);
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
    if (guessNumber===null){
        alert("Вы не захотели играть, пока-пока!");
        break;
    }
    if (guessNumber === randomNumber){
        alert("Вы победили!");
        break;
    }
    else {
        if (!isNumeric(guessNumber)) {
            alert("Вы ввели не число! Введите еще раз число");
        } else {
            guessNumber > randomNumber ? alert(MESSAGE_FOR_HIGH_VALUE): alert(MESSAGE_FOR_LOW_VALUE);
            }
        }
    if (i === 10) alert("Попытки кончились! К сожалению, вы проиграли!");
}

//комп число загадывает, человеку нужно угадать, количество попыток ограничено

//1. находим число рандомом
//2. выводим сообщение промтом
//3. сравниваем введенное значение с number, выводим на экран да/нет