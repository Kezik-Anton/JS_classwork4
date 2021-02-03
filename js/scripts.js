// // на пустое значение null, undefined, ''
// //let q = prompt('Введите данные');
// let res = q.trim();
// // res = res !='';

// // на число
// isNaN(), parseInt(), Number()

// // на целое число
// 10.000
// parseInt(x) == parseFloat(x)
// x.isInteger()

document.write('<table>');

document.write('<th><td>пн</td><td>вт</td><td>ср</td><td>чт</td><td>пт</td><td>сб</td><td>вс</td></th>');

let numDays = prompt('Введите кол-во дней в месяце'),
    dayWeek = prompt('Введите с какого дня недели начинается месяц'),
    j = 1;
    a = 7;

for (let i = 0; i <= (numDays / 7); i++) {
    document.write('<tr>');


    while (j <= a && a <=numDays) { 
        document.write('<td>');  
        document.write(j);
        document.write('</td>'); 
        j++;
    }

    a += 7;



    document.write('</tr>');
}

document.write('</table>');