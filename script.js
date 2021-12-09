const adv = document.querySelector('.adv');
const booksWrap = document.querySelector('.books');
const books = document.querySelectorAll('.book');
const booksTitle = books[4].querySelector('h2 > a');
const bookLi2 = books[0].querySelectorAll('li');
const bookLi5 = books[5].querySelectorAll('li');
const bookLi6 = books[2].querySelectorAll('li');
const bookLi6El = bookLi6[8].cloneNode();




adv.style.display = 'none';
document.body.style.backgroundImage = "url('/image/you-dont-know-js.jpg')";
booksTitle.textContent = `Книга 3. this и Прототипы Объектов`;
bookLi6El.textContent = 'Глава 8: За пределами ES6';


books[0].before(books[1]);
books[3].before(books[4]);
books[2].before(books[5]);
books[5].before(books[4]);
books[5].before(books[3]);


bookLi2[3].after(bookLi2[6]);
bookLi2[6].after(bookLi2[8]);

bookLi5[3].before(bookLi5[9]);
bookLi5[4].after(bookLi5[2]);
bookLi5[7].after(bookLi5[5]);

bookLi6[8].after(bookLi6El);


console.log(books);
console.log(bookLi6);