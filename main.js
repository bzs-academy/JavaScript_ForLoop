// console.log("hello world");

// var name;
// name = "Ahmet";
// console.log(name);


// console.log(3 + 5 + 6 + "2" + 5 + 4 +2 +3);

// var x = 10;

// x += 3;  // x = x + 3;
// x -= 4;
//x %= 3;
// x *= 2;
// x /= 3;
// console.log(x.toFixed(4));


// primitive           complex
// ---------           ---------
// string              object              object
// number                                  array
// boolean                                 null
// undefined           function



// console.log( "5" == 5 );
// console.log( "5" === 5 );

// ==  value degerini kontrol  => true
// ===  value degeri + data type  => false

// console.log( undefined == null );
// console.log( undefined === null );
// !=
// !==
// ! not

// console.log( "3" !== 3 )

// console.log( 5 < 3 )

//var x = [1, 2, 'a'];
// var person = { adi: 'Hasan', soyadi: 'yildiz', yas: 43, }
// console.log ( typeof person);


// var x = [ 55, 'hasan', {}, 23, [1,2,3]];

// console.log(x[4]);
// console.log(x.length)
// console.log(x[x.length - 1]);

// console.log(x[x.length-1][1]);


// LOOP TYPES :
// -----------
// 1. FOR
// 2. FOR / IN   => OBJECTS
// 3. FOR / OF   => ARRAYS
// 4. WHILE
// 5. DO / WHILE


// var x = [ 'hasan', 'ahmet', 'veli', 'asim', 3, [5, 12, 55]];

// console.log(x[0]);
// console.log(x[1]);
// console.log(x[2]);

// var i = 0;
// var elemanSayisi = x.length;

// for (i ; i < elemanSayisi ; ) {
//     console.log(x[i]);
//     i++
// }

// var i;
// for (i=0; i < x.length; i++) {
//     console.log(x[i])
// }

// var array = [];

// var num1 = window.prompt("Lütfen birinci sayiyi giriniz");
// array.push(parseInt(num1));

// var num2 = window.prompt("Lütfen ikinci sayiyi giriniz");
// array.push(parseInt(num2));

// if (array[0] > array[1]) {

//     console.log(`Girdiginiz iki rakamdan buyuk olan : ${array[0]}`);

// } else if ( array[1] > array[0]) {

//     console.log(`Girdiginiz iki rakamdan buyuk olan : ${array[1]}`);

// } else {

//     console.log("Girdiginiz iki rakam birbirine esittir")
// }

// for ( var elem = 0; elem <= 15; elem++ ) {

//     if ( elem === 0 ) {
//         console.log(`${elem} cift sayidir.`);
//     } else if ( elem % 2 === 0) {
//         console.log(`${elem} cift sayidir.`)
//     } else {
//         console.log(`${elem} tek sayidir.`)
//     }
// }

// for ( var elem = 0; elem <= 15; elem++ ) {

//     if ( elem === 0 ) {
//         console.log(`${elem} cift sayidir.`);
//     } else if ( elem % 2 !== 0) {
//         console.log(`${elem} tek sayidir.`)
//     } else {
//         console.log(`${elem} cift sayidir.`)
//     }
// }

// for ( var elem = 0; elem <= 15; elem++ ) {

//     if ( elem % 2 !== 0) {
//         console.log(`${elem} tek sayidir.`)
//     } else if (elem % 2 === 0 ) {
//         console.log(`${elem} cift sayidir.`)
//     } else {
//         console.log(`${elem} cift sayidir.`)
//     }
// }

var y = [];

for ( var t = 1 ; t < 101 ; t++) {

    if ( t % 3 === 0 && t % 5 === 0 ) {
        console.log(`${t} FizzBuzz`);
        y.push([t, 'FizzBuzz'])

    } else if ( t % 3 === 0 ) {
        console.log(`${t} Fizz`);
        y.push([t, 'Fizz'])

    } else if ( t % 5 === 0 ) {
        console.log(`${t} Buzz`);
        y.push([t, 'Buzz'])
    } else {
        console.log(t);
    }
}

console.log(y)