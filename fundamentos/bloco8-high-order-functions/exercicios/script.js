const newEmployees = () => {
  const employees = {
    id1: creatingEmployer('Pedro Guerra'),
    id2: creatingEmployer('Luiza Drummond'),
    id3: creatingEmployer('Carla Paiva'),
  }
  return employees;
};

const creatingEmployer = (fullName) => {
  email = generatingEmail(fullName);
  return { fullName, email };
}

const generatingEmail = (name) => `${name.replace(/ /gi, '_')}@trybe.com`;

console.log(newEmployees());

