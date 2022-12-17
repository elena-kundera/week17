// 1. Сделайте интерфейс преобразования ФИО на три поля (input). 
// Учтите, пожалуйста, все нюансы - лишние пробелы, отсутствие больших 
// букв в именах и пр. 


const firstName = document.querySelector('#inputFirstName');
const lastName = document.querySelector('#inputLastName');
const patronym = document.querySelector('#inputPatronym');

const button = document.querySelector('#button');

const correctedResult = document.querySelector('#result');


button.onclick = function () {
    const firstNameCleaned = firstName.value.trim(firstName.value);
    const lastNameCleaned = lastName.value.trim(lastName.value);
    const patronymCleaned = patronym.value.trim(patronym.value);

    const firstNamecorrected = firstNameCleaned[0].toUpperCase() + firstNameCleaned.substring(1).toLowerCase();
    const lastNamecorrected = lastNameCleaned[0].toUpperCase() + lastNameCleaned.substring(1).toLowerCase();
    const patronymcorrected = patronymCleaned[0].toUpperCase() + patronymCleaned.substring(1).toLowerCase();

    correctedResult.innerHTML = lastNamecorrected + " " + firstNamecorrected + " " + patronymcorrected;
}


// 4. Сделайте генератор 10 случайных чисел (по нажатию на кнопку) 
// в диапазоне от -10 до 10 и найдите среди них минимальное, максимальное 
// и среднее арифметическое, а также сумму и произведение всех этих чисел.

const random = document.querySelector('#randomize');

const randomNums = document.querySelector('#randomNumbers');
const minNumber = document.querySelector('#minimal');
const maxNumber = document.querySelector('#maximal');
const average = document.querySelector('#arithmeticAverage');
const sum = document.querySelector('#sum');
const multiplicated = document.querySelector('#multiplication');


let randomNumbers = [];

random.onclick = function () {
    
    min = Math.ceil(-10);
    max = Math.floor(10);
    randomNumbers.push(Math.round(Math.random() * (max - min + 1)) + min);
    randomNumbers.push(Math.round(Math.random() * (max - min + 1)) + min);
    randomNumbers.push(Math.round(Math.random() * (max - min + 1)) + min);
    randomNumbers.push(Math.round(Math.random() * (max - min + 1)) + min);
    randomNumbers.push(Math.round(Math.random() * (max - min + 1)) + min);
    randomNumbers.push(Math.round(Math.random() * (max - min + 1)) + min);
    randomNumbers.push(Math.round(Math.random() * (max - min + 1)) + min);
    randomNumbers.push(Math.round(Math.random() * (max - min + 1)) + min);
    randomNumbers.push(Math.round(Math.random() * (max - min + 1)) + min);
    randomNumbers.push(Math.round(Math.random() * (max - min + 1)) + min);

    const minNum = Math.min.apply(null, randomNumbers);
    const maxNum = Math.max.apply(null, randomNumbers);

    const averageNum = randomNumbers.reduce((a, b) => (a + b)) / randomNumbers.length;

    const summedNums = randomNumbers.reduce((a, b) => (a + b));

    const mutipliedNums = randomNumbers.reduce((a, b) => (a * b));

    randomNums.innerHTML = "Ваши рандомные числа: " + randomNumbers;
    minNumber.innerHTML = "Минимальное случайное число: " + minNum;
    maxNumber.innerHTML = "Максимальное случайное число: " + maxNum;
    average.innerHTML = "Среднее арифметическое: " + averageNum;
    sum.innerHTML = "Сумма: " + summedNums;
    multiplicated.innerHTML = "Произведение: " + mutipliedNums;

}
