// let arr = ["asd", 152, -45, true, false, 'lksdhf', 3.14, 512, [1, 2 , 3], 'kjf' ];
// console.log(arr);
// let book = {
//     title : "name",
//     pageCount : 200,
//     genre: "genre",
// }
// console.log(book);
// let book2 = {
//     title : "name",
//     pageCount : 200,
//     genre: "genre",
//     authors : {
//         name : 'name',
//         age : 30,
//     }
// }
// let user = [
//     {name:'name1',username:'username1',password:'password1',},
//     {name:'name2',username:'username2',password:'password2',},
//     {name:'name3',username:'username3',password:'password3',},
//     {name:'name4',username:'username4',password:'password4',},
//     {name:'name5',username:'username5',password:'password5',},
//     {name:'name6',username:'username6',password:'password6',},
//     {name:'name7',username:'username7',password:'password7',},
//     {name:'name8',username:'username8',password:'password8',},
//     {name:'name9',username:'username9',password:'password9',},
//     {name:'name10',username:'username10',password:'password10'}
// ]
// console.log(user[0].password)
// console.log(user[1].password)
// console.log(user[2].password)
// console.log(user[3].password)
// console.log(user[4].password)
// console.log(user[5].password)
// console.log(user[6].password)
// console.log(user[7].password)
// console.log(user[8].password)
// console.log(user[9].password)
//
// let wather =[
//     {day:'mondey',tempMorning:6,tempAftenoon:10, tempNight:8},
//     {day:'tsusday',tempMorning:12,tempAftenoon:20, tempNight:15},
//     {day:'wednesday',tempMorning:8,tempAftenoon:18, tempNight:16},
//     {day:'thursday',tempMorning:15,tempAftenoon:28, tempNight:25},
//     {day:'friday',tempMorning:16,tempAftenoon:29, tempNight:30},
//     {day:'saturdey',tempMorning:18,tempAftenoon:35, tempNight:33},
//     {day:'sanday',tempMorning:19,tempAftenoon:40, tempNight:25},
// ]
// console.log(wather);
//
//
//
// let x = -3;
// let a = x;
// if (a !== 0){
//     console.log('Вірно')
// } else {
//     console.log('Невірно')
// }
//
// let time = 44; //0-59
// if (time>44& time<60){
//     console.log('4 чверть')
// }else if (time>29){
//     console.log('3 чверть')
// }else if (time>14){
//     console.log('2 чверть')
// }else if (time>=0){
//     console.log('1 чверть')
// }else {
//     console.log('невірний час')
// }
//
// let a1 = +prompt('введіть значення числа а')
// let b1 = +prompt('введіть значення числа b')
//
// if (a1>b1){
//     console.log(a1)
// }else if (b1>a1){
//     console.log(b1)
// }else if (a1==b1){
//     console.log('рівні')
// }else {
//     console.log('введено не вірні дані')
// }


// let x = NaN;
//
// if (x===false || x!==x || x===undefined || x===0 || x===null){
//     let x = "default";
//     console.log(x)
// }else {
//     console.log(x)
//
// }

// let a = NaN;
// let x = a||"default";
//
// console.log(x)

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]
let a = coursesAndDurationArray[4].monthDuration
if (a>5){
    console.log("супер")
}else {
    console.log('погано')
}
