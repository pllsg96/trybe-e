const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// const filterPeople = ({ nationality, bornIn }) => `nacionalidade é ${nationality} e nasceu em ${bornIn}`;

// console.log(filterPeople(people[0]));

const filterPeople = people.filter(xxAustralian);

function xxAustralian({ name, bornIn, nationality }) {
  if (((bornIn > 1899) && (bornIn < 2000)) && (nationality === 'Australian')) console.log(name, bornIn, nationality);
}