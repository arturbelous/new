// //const letter = confirm( "are u here?");
// //console.log(letter);

// //const answer = +prompt ("сколько лет?", "20");
// //console.log(answer + 10);

// const answers = [];
// //  answers[0] = prompt("как ваше имя?", "");
// //  answers[1] = prompt("как ваша фамилия?", "");
// //  answers[2] = prompt("как ваше отчество?", "");

// //  console.log(typeof(answers));
// const sex = "men";
// console.log(`I am a ${sex}`);

// const user = "Artur";
// alert(`Hello, ${user}`);
// console.log('arr' + ' - object');
// console.log(4 + 5);

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;
// console.log(incr, decr);

// console.log(8%3);

// const isChecked = true,
//     isClose = true;

//     console.log(isChecked && isClose);

// const brose = prompt("АРтур?");
// console.log(brose);
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?',''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?','');
      
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

    console.log(personalMovieDB); 
const tochka = prompt('how Are U?', '');
console.log(tochka);