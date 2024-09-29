// Задание 1
// Создайте переменные для хранения информации о трех пользователях (имя
// пользователя, его возраст и город проживания). Используйте различные
// ключевые слова для определения переменных. Выведите их значения в
// консоль. Обновите возраст первого пользователя.
console.log('Задание 1')

let first_user_name = 'Иван';
let first_user_age = 23;
let first_user_city = 'Москва';

var second_user_name = 'Мария';
var second_user_age = 18;
var second_user_city = 'Санкт-Петербург';

third_user_name = 'Андрей';
third_user_age = 20;
third_user_city = 'Новосибирск';

console.log(`Пользователь 1: ${first_user_name} ${first_user_age} ${first_user_city}`);
console.log(`Пользователь 2: ${second_user_name} ${second_user_age} ${second_user_city}`);
console.log(`Пользователь 3: ${third_user_name} ${third_user_age} ${third_user_city}`);

first_user_age = 19

console.log(`Пользователь 1: ${first_user_name} ${first_user_age} ${first_user_city}`);

// Задание 2
// Объявите переменные, имеющие различные типы данных. Выведите в консоль
// их значения и типы данных, используя оператор typeof.
console.log('\nЗадание 2')

let number_var = 12
let string_var = 'abc'
let boolean_var = true
let null_var = null
let undefined_var = undefined
let object_var = {one: true, two: '2', three: 3}

console.log(`
    ${typeof(number_var)}
    ${typeof(string_var)}
    ${typeof(boolean_var)}
    ${typeof(null_var)}
    ${typeof(undefined_var)}
    ${typeof(object_var)}
    `)

// Задание 3
// Напишите программу, которая находит среди трех чисел наибольшее,
// используя логические условия.
console.log('\nЗадание 3')

function max_of_three(a, b, c){
    if (a > b){
        if (a > c){ return a }
        else{ return c }
    }
    else{
        if (b > c){ return b }
        else{ return c }
    }
}

console.log(max_of_three(15, 91, 3))

// Задание 4
// Напишите программу, которая выводит числа от 1 до 10 с помощью различных
// циклов: while, do…while, for.
console.log('\nЗадание 4')

let x = 1
while(x < 11){
    console.log(x++)
}

console.log('\n')

x = 1
do{
    console.log(x++)
} while(x < 11)

console.log('\n')

for(x = 1; x <= 10; x++){
    console.log(x)
}

// Задание 5
// Создайте функцию, которая принимает два аргумента, выполняет над ними
// математическую операцию и возвращает ее результат. Используйте три
// различных синтаксиса описания функции.
console.log('\nЗадание 5')
function sum_of_two(a, b){
    return(a + b)
}
console.log(sum_of_two(193, 512))

var product = function(a, b) {return(a * b)}
console.log(product(12, 12))

var quotient = (a, b) => a / b
console.log(quotient(12, 6))

