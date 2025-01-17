/*Задание 1
Примените каждый из этих методов округления к трем числам: 5.4, 5.5, 5.6:
Math.round(x)
Math.ceil(x)
Math.floor(x)
В комментариях к каждой строке напишите, как работают эти округления.*/
console.log(Math.round(5.4));// 5
// Math.round() округляет число до ближайшего целого. Если дробная часть меньше 0.5, то округление идет вниз, если 0.5 или больше — вверх.
console.log(Math.round(5.5));/// 6
// В данном случае, 5.5 округляется вверх до 6, так как дробная часть равна 0.5.
console.log(Math.round(5.6));// 6
// Здесь также дробная часть больше 0.5, поэтому число округляется вверх до 6.
console.log(Math.ceil(5.4));// 6
// Math.ceil() всегда округляет число вверх до ближайшего целого, независимо от дробной части.
console.log(Math.ceil(5.5));// 6
// 5.5 округляется вверх до 6.
console.log(Math.ceil(5.6));// 6
// И 5.6 округляется вверх до 6.
console.log(Math.floor(5.4));// 5
// Math.floor() всегда округляет число вниз до ближайшего целого.
console.log(Math.floor(5.5));// 5
// 5.5 округляется вниз до 5.
console.log(Math.floor(5.6));// 5
// И 5.6 также округляется вниз до 5.
/*Задание 2
Выведите в консоль фразы в 2 строки:
Сегодня 27 октября 2022 (здесь будет ваша дата) - используйте options для вывода месяца словом
19 часов 20 минут (здесь будет ваше время) - используйте шаблонную строку, в которую подставьте значения с помощью методов getHours() и getMinutes()*/
/*const now = new Date();
const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
}
const formattedDate = now.toLocaleString('ru-RU',options);
const hours = now.getHours();
const minutes = now.getMinutes();
console.log(formattedDate);
console.log(`${hours} часов ${minutes} минут`);*/
const a = 'border-left-width'
function camelize(str){
const b = str.split('-')
const c = b.map(function(item, index){
    const d = index === 0 ? item : item[0].toUpperCase() + item.slice(1)
    return d

})
const e = c.join('');
return e
}
console.log(camelize(a))

let arr = [5, 3, 8, 1];

function filterRange(arr, a, b){
const c = arr.filter(function(item){
    const d = item >= a && item <= b
    return d
})
return c
}
console.log(filterRange(arr, 1, 4))
console.log(arr)

let arr1 = [5, 12, 8, 1];

function filterRangeInPlace(arr, a, b){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < a || arr[i] > b){
            arr.splice(i, 1)
            i--
        }
    }
return arr1
}
console.log(filterRangeInPlace(arr1, 1, 4))

let arr2 = [5, 2, 1, -10, 8];
const sort1 = arr2.sort((a,b) => b - a)
console.log(sort1)

let arr3 = ["HTML", "JavaScript", "CSS"];

function copySorted(arr){
const m = arr.slice(0)
const n = m.sort()
return n
}
console.log(arr3)
console.log(copySorted(arr3))



