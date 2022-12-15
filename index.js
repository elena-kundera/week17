// Сделайте интерфейс преобразования ФИО на три поля (input). 
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