const people = [
    {
      id: 1,
      name: "ivan",
      money: 22,
    },
    {
      id: 2,
      name: "petro",
      money: 200,
    },
    {
      id: 3,
      name: "vasyl",
      money: 800,
    },
    {
      id: 4,
      name: "vlad",
      money: 4000,
    },
    {
      id: 5,
      name: "sviat",
      money: 10,
    },
  ];


const sum = people.filter(function(allMoney){

    return allMoney.money>100;
});
console.log(sum);





const price = people.reduce(function(acc, current){
 return acc + current.money;
}, 0)
console.log(price);