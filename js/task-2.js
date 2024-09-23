const getUsersWithFriend = (users, friendName) => {
    return  users.filter(user => user.friends.includes(friendName));
};

// Приклад використання
const  usersList = [
    { name: 'Sharlene Bush', friends: ['Briana Decker', 'Goldie Gentry'] },
    { name: 'Sheree Anthony', friends: ['Briana Decker', 'Goldie Gentry'] },
    { name: 'Elma Head', friends: ['Goldie Gentry'] },
    { name: 'John Doe', friends: ['Adrian Cross'] }
];

// Тести
console.log(getUsersWithFriend(usersList, 'Briana Decker'));  
console.log(getUsersWithFriend(usersList, 'Goldie Gentry'));  
console.log(getUsersWithFriend(usersList, 'Adrian Cross'));    


const allUsers = [
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace"]
    },
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Sharron Pace"]
    },
    {
      name: "Ross Vazquez",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
    },
    {
      name: "Elma Head",
      friends: ["Goldie Gentry", "Aisha Tran"]
    },
    {
      name: "Carey Barr",
      friends: ["Jordan Sampson", "Eddie Strong"]
    },
    {
      name: "Blackburn Dotson",
      friends: ["Jacklyn Lucas", "Linda Chapman"]
    },
    {
      name: "Sheree Anthony",
      friends: ["Goldie Gentry", "Briana Decker"]
    }
  ];
  
  console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
  // [
  //   {
  //     name: "Sharlene Bush",
  //     friends: ["Briana Decker", "Sharron Pace"]
  //   },
  //   {
  //     name: "Sheree Anthony",
  //     friends: ["Goldie Gentry", "Briana Decker"]
  //   }
  // ]
  
  console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
  // [
  //   {
  //     name: "Elma Head",
  //     friends: ["Goldie Gentry", "Aisha Tran"]
  //   },
  //   {
  //     name: "Sheree Anthony",
  //     friends: ["Goldie Gentry", "Briana Decker"]
  //   }
  // ]
  
  console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []
  