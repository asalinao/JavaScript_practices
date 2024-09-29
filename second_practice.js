// Задание 1
// Создайте объект, содержащий информацию о пользователе (имя, возраст,
// город), выведите его в консоль. Измените значение возраста, добавьте в объект
// новое свойство, а одно из существующих удалите, выведите обновленные
// данные. Создайте объект второго пользователя и посчитайте сумму возрастов
// двух пользователей.
console.log('Задание 1')

let user = {name: 'Иван', age: 20, city: 'Москва'}
console.log(`Пользователь 1: ${user}`)

user.age = 21
user.date_of_birth = '20-09-2003'
delete user.city
console.log(user)

let user1 = {name: 'Мария', age: 18, date_of_birth: '04-07-2006'}
console.log(`Cумма возрастов: ${user.age + user1.age}`)

// Задание 2
// Создайте произвольную строку, выведите в консоль ее длину, первый и
// последний символы. Проверьте, начинается ли строка с foo, заканчивается ли
// на bar, содержит ли она некоторую подстроку.
console.log('\nЗадание 2')

let s = 'qwerty'

console.log(`Длина строки: ${s.length}, первый символ: ${s[0]}, последний символ: ${s[s.length - 1]}`)
console.log(`Начинается ли строка с foo: ${s.startsWith('foo')}`)
console.log(`Заканчивается ли на bar: ${s.endsWith('bar')}`)
console.log(`Содерждит ли ert: ${s.includes('ert')}`)

// Задание 3
// Создайте массив, содержащий пять произвольных элементов, выведите в
// консоль его первый и последний элементы. Обновите значение второго
// элемента массива, создайте второй массив, который является копией первого,
// выведите оба массива в консоль. Создайте функцию, которая объединяет два
// массива в один. Создайте массив пользователей (у каждого пользователя
// должно быть имя) и напишите функцию, которая принимает данный массив и
// возвращает массив имен. Создайте функцию нахождения среднего
// арифметического для массива чисел.
console.log('\nЗадание 3')

let array = [2, 34, 0, 9, 102]
console.log(`Первый элемент: ${array[0]}, последний элемент: ${array[array.length - 1]}`)

array[1] = 71
let array1 = array
console.log(`Первый массив: ${array}, второй массив: ${array1}`)

function mergeArrays(array1, array2){
    l = array1.length
    array1.length = array1.length + array2.length

    for(let x = l; x < array1.length; x++){
        array1[x] = array2[x - l]
    }

    return array1
}

console.log(`Объединение массивов: ${mergeArrays(array, array1)}`)

let firstUser = {name: 'Иван', age: 19}
let secondUser = {name: 'Павел', age: 21}
let thirdUser = {name: 'Андрей', age: 20}

let userArray = [firstUser, secondUser, thirdUser]

function getUserName(userArray){
    nameArray = new Array(userArray.length)

    userArray.forEach((user, index) => {
        nameArray[index] = user.name
    });

    return nameArray
}

console.log(`Список имен пользователей: ${getUserName(userArray)}`)

function getArrayAVG(array){
    let sum = 0
    array.forEach(element => {
        sum += element
    });
    return sum/array.length
}

console.log(`Array AVG: ${getArrayAVG([8, 4, 16])}`)


// Задание 4
// Создайте набор имен с помощью Set, добавьте в него четыре значения. Удалите
// первый добавленный элемент, проверьте его отсутствие в наборе, выведите в
// консоль его размер.
console.log('\nЗадание 4')
let namesSet = new Set();

namesSet.add("Иван");
namesSet.add("Павел");
namesSet.add("Андрей");
namesSet.add("Мария");

namesSet.delete("Иван")
console.log(`Отсутствует ли Иван: ${!namesSet.has("Иван")}`)
console.log(`Размер набора: ${namesSet.size}`)

// Задание 5
// Создайте коллекцию ключ-значение с помощью Map, добавьте в нее три
// элемента, выведите в консоль значение последнего добавленного элемента.
// Удалите любой элемент, проверьте его отсутствие в коллекции.
console.log('\nЗадание 5')

let userMap = new Map()

userMap.set('Иван', 21)
userMap.set('Павел', 19)
userMap.set('Андрей', 23)

console.log('Значение последнего добавленного элемента: ', userMap.get('Андрей'));
userMap.delete('Иван');
console.log('Отсутствует ли Иван?', !userMap.has('Иван'));