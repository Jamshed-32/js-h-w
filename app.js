//HW-1 (Result Calculator)
document.write('<h2>Result Calculator</h2><br>')
var accounting=100;

if(accounting >= 80 && accounting<= 100){
    document.write('accounting = golden')
}else if(accounting >= 99 && accounting <= 100){
    document.write('Bangla = A+')
}else if(accounting >= 80 && accounting <= 89){
    document.write('Bangla = A')
}else if(accounting >= 70 && accounting <= 79){
    document.write('Bangla = A-')
}else if(accounting >= 60 && accounting <= 69){
    document.write('Bangla = B')
}else if(accounting >= 50 && accounting <= 59){
    document.write('Bangla = C')
}else if(accounting >= 40 && accounting <= 49){
    document.write('Bangla = D')
}else if(accounting >= 30 && accounting <= 39){
    document.write('Bangla = D')
}else if(accounting >= 20 && accounting <= 29){
    document.write('Bangla = TUMI PORALEKHA SARIE DAW')
}


document.write('<br><br>')
var mangment=30;

if(mangment >= 80 && mangment<= 100){
    document.write('mangment = golden')
}else if(mangment >= 99 && mangment <= 100){
    document.write('mangment = A+')
}else if(mangment >= 80 && mangment <= 89){
    document.write('mangment = A-')
}else if(mangment >= 70 && mangment <= 79){
    document.write('mangment = B')
}else if(mangment >= 60 && mangment <= 69){
    document.write('mangment = B')
}else if(mangment >= 50 && mangment <= 59){
    document.write('mangment = D')
}else if(mangment >= 40 && mangment <= 49){
    document.write('mangment = C')
}else if(mangment >= 30 && mangment <= 39){
    document.write('mangment = GORER DIM')
}else if(mangment >= 20 && mangment <= 29){
    document.write('mangment = GORER DIM')
}



//HW-2 (Calculator Function with Mathematical Operator)
document.write('<h2>Calculator Function with Mathematical Operator</h2><br>')

function hey(a,b) {
    document.write(a + b + "<br>");
}
hey(20,40)
function love(a,b) {
    document.write(a - b + "<br>");
}
love(100,1000)
function mind(a,b) {
    document.write(a / b + "<br>");
}
mind(20,40)
function heart(a,b) {
    document.write(a * b + "<br>");
}
heart(20,40)
function hi(a,b) {
    document.write(a % b + "<br>");
}
hi(20,40)
//HW-3 (Print 1-100 & 100-1 with Loop
document.write('<h2>Print 1-100 & 100-1 with Loop</h2><br>')

for(let i=1; i <=100; i++) {
    document.write(i+'<br>')
}
document.write('<br>')
for(let i=100; i >=1; i--) {
    document.write(i+'<br>')
}
//HW-4 (date of birth
document.write('<h2>date of birth</h2><br>')
// function day(){
//     document.write( i = 1; i <= 31; i++)
//     document.write('day').

// }
// function month(){

// }
// function year(){






  

 let day = document.getElementById('day');
 for (let i = 1; i <= 29; i++) {
    let option = document.createElement('option');
    let optionText = document.createTextNode(i)
    option.appendChild(optionText)
    day.appendChild(option)
 }


 let month = document.getElementById('month');
 for (let i = 1; i <= 12; i++) {
    let option = document.createElement('option');
    let optionText = document.createTextNode(i)
    option.appendChild(optionText)
    month.appendChild(option)
 }


 let year = document.getElementById('year');
 for (let i = 2000; i <= 2022; i++) {
    let option = document.createElement('option');
    let optionText = document.createTextNode(i)
    option.appendChild(optionText)
    year.appendChild(option)
 }


