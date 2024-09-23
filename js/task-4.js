const getTotalBalanceByGender = (users, gender) => {
    return users
        .filter(user => user.gender === gender) // Фільтруємо користувачів за статтю
        .reduce((total, user) => total + user.balance, 0); // Підсумовуємо баланс
};

// Приклад використання
const Genderusers = [
    { name: 'Alice', gender: 'female', balance: 5000 },
    { name: 'Bob', gender: 'male', balance: 7000 },
    { name: 'Charlie', gender: 'male', balance: 5053 },
    { name: 'Diana', gender: 'female', balance: 3863 },
];

// Виклики функції
console.log(getTotalBalanceByGender(Genderusers, 'male'));   // 12053
console.log(getTotalBalanceByGender(Genderusers, 'female')); // 8863

const clients = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863
