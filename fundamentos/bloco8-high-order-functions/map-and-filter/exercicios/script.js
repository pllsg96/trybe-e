// ---------------------------------------
// Ex 1

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const shortBookList = [];
const ordenando = books.map((x) => shortBookList.push(`${x.name} - ${x.genre} - ${x.author.name}`));
console.log(shortBookList);

// ---------------------------------------
// Ex 2

const howOldByBook = (authorBookYear, authorBirthYear) => authorBookYear - authorBirthYear;
const youngToOlder = [];
const authorYear = books.map((x) => {
  const releaseYear = x.releaseYear;
  const birthYear = x.author.birthYear;
  const ageByBook = howOldByBook(releaseYear, birthYear);

  youngToOlder.push({ age: ageByBook, author: x.author.name });
});

const sortingTheAuthors = youngToOlder.map((x) => console.log(x));


console.log(youngToOlder);