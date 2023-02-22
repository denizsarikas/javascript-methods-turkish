/* 
node '.\Desktop\method.js'
*/

/*
//push => array icine eleman ekler.
const arr = [1,2,3,4,5,6,7]
arr.push(8)
Output: [ 1, 2, 3, 4, 5, 6, 7, 8 ]
let s = arr.push(8) Output: s sadece 8
let s = [..arr, arr.push(8)] Output: s [ 1, 2, 3, 4, 5, 6, 7, 8 ]
*/

/*
shift => bir dizinin ilk ogesini kaldirir.
const arr = [1,2,3,4,5,6,7]
arr.shift()
console.log(arr)
Output: [ 2, 3, 4, 5, 6, 7, 8 ]
*/

/*
slice => bir dizideki secili ogeleri "YENİ BİR DİZİ"  olarak döndurur.
const arr = [1,2,3,4,5,6,7]
let s = arr.slice(0,3)
console.log(s)
Output: [ 1,2,3 ]
*/

/*
concat => birleştirme işlemi yapar
const arr = [1,2,3,4,5,6,7]
const arr1 = [8,9,10]
let s = arr.concat(arr1)
console.log(s)
Output: [1,2,3,4,5,6,7,8,9,10]

arr.push(arr1)
console.log(arr)
Output: [1,2,3,4,5,6,7, [8,9,10]]

arr.push(...arr1)
console.log(arr)
Output: [1,2,3,4,5,6,7,8,9,10]
*/


/*
entries => [key, value] ciftlerine sahip değerler döndurur

const arr = [1,2,3,4,5,6,7]
let s = arr.entries()
for(let i of s){
    console.log(i)
}

for(let i = 0; i < arr.length; i++){
    console.log([i,arr[i]])
}
*/


/*
some => belirli bir array içerisined vereceğimiz koşula uyan tek bir eleman olsa bile true döner

const arr = [1,2,3,4,5,6,7]
let s = arr.some(a => a > 2)
console.log(s) output = true
*/

/*
every => somedaki mekanik ama bu sefer hepsinin sağlaması lazım

const arr = [1,2,3,4,5,6,7]
let s = arr.every(a => a > 2)
console.log(s) output = false
*/

/*
findIndex => Kurala uyan ilk elemanın indexini verir

const arr = [1,2,3,4,5,6,7]
let s = arr.every(a => a > 2)
console.log(s)
Output: 2
*/


/*
fill => bir dizideki belirtilen öğeleri bir değerle doldurur

const arr = [1,2,3,4,5,6,7]
let s = arr.fill(1)
console.log(s)
Output: [1,1,1,1,1,1,1]

let s = arr.fill(10,0,1) => 0. indexten 1. indexe kadar 10 yap
console.log(s)
10,2,3,4,5,6,7
*/

/*
filter => filtreleme işlemleri

const arr = [1,2,3,4,5,6,7]
let s = arr.filter(a => a > 2)
console.log(s)
Output : array
*/


/*
find => array içerisinde değer bulmak

const arr = [1,2,3,4,5,6,7]
let s = arr.find(a => a > 6)
console.log(s)
Output: array değil array element.
*/


/*
map => her dizi ogesi için bir işlev cağırarak "YENİ BİR DİZİ" oluşturur

const arr = [1,2,3,4,5,6,7]
let s = arr.map(a => a * 2)
console.log(s)
Output: array 
*/

/*
forEach => bir dizideki her oge için bir işlev çağırır.

const arr = [1,2,3,4,5,6,7]
arr.forEach(a => {
    console.log(a)
})

arr.forEach(a => {
    if(a > 3){
        console.log(a)
    }
})
*/

/*
join => bir diziyi dize olarak döndürür

const arr = [1,2,3,4,5,6,7]
let s = arr.join()
console.log(s)
Output : 1,2,3,4,5,6,7

let s = arr.join('')
console.log(s)
Output : 1234567

let s = arr.join('  ')
console.log(s)
Output : 1  2  3  4  5  6  7

let s = arr.join('a')
console.log(s)
Output : 1a2a3a4a5a6a7
*/

/*
length => uzunluk sayı olarak

const arr = [1,2,3,4,5,6,7]
let s = arr.length
console.log(s)
Output: 7.
*/

/*
includes => bir dizi belirtilen bir değer içeriyorsa, includes() yöntem döndürür

const arr = [1,2,3,4,5,6,7]
let s = arr.includes(8)
console.log(s)
Output: false

const arr = [1,2,3,4,5,6,7]
let s = arr.includes("4")
console.log(s)
Output: false string cunku
*/

/*
reduce => tek bir değer döndürür: işlevin birikmiş sonucu.

const arr = [1,2,3,4,5,6,7]
let s = arr.reduce((a,b) => a + b, 0 )
console.log(s)
Output: toplamları
*/

/*
reverse => arrayı ters cevirir

const arr = [1,2,3,4,5,6,7]
let s = arr.reverse()
console.log(s)
Output: [7,6,5,4,3,2,1]
*/

/*
sort => sıralama işlemleri

const arr = [1,2,3,4,5,6,7]
let s = arr.sort((a,b) => a - b)
console.log(s)
Output: kucukten buyuge

const arr = [1,2,3,4,5,6,7]
let s = arr.sort((a,b) => b - a)
console.log(s)
Output: buyukten kucuge
*/

/*
replace

let s ="deniz"
console.log(s.replace('e',';'))
console.log(s.replaceAll('e',';'))
console.log(s.replaceAll(/e/g,';'))
*/

/*
substring
console.log(s.substring(0,4))
*/

/*
toLowerCase()
*/

/*
toUpperCase()
*/

/*
trim()
*/

/*
split
*/

/*
indexOf
*/


console.log('tests')


