// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA1 and DATA2. and Ignore draws this time.
TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

const calcAverage = (score1, score2, score3) => score1 + score2 + score3 / 3;
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 32);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(avrDolphins, avrKoalas) {
  if (avrDolphins >= 2 * avrKoalas) {
    console.log(
      `Dolphins win with average scores ${avrDolphins} vs ${avrKoalas}`
    );
  } else if (avrKoalas >= 2 * avrDolphins) {
    console.log(`Koalas win with average scores ${avrKoalas} vs ${avrDolphins}`);
  } else {
    console.log(`no one win`);
  }
}
checkWinner(scoreDolphins, scoreKoalas);

//Coding Challenge #2
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
TEST DATA: 125, 555 and 44
*/


const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.2 : bill * 0.15;
};
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(total);

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
GOOD LUCK 😀
*/

const eren = {
  firstName: "Eren",
  lastName: "Yeager",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.total = this.mass / this.height ** 2;
    return this.total;
  },
};

const mikasa = {
  firstName: "Mikasa",
  lastName: "Ackerman",
  mass: 78,
  height: 1.69,

  calcBMI2: function () {
    this.total = this.mass / this.height ** 2;
    return this.total;
  },
};

console.log(mikasa.calcBMI2(), eren.calcBMI());

if(mikasa.calcBMI2() < eren.calcBMI()){
  console.log(`${eren.firstName} ${eren.lastName}'s BMI (${eren.calcBMI()}) is higher than ${mikasa.firstName} ${mikasa.lastName}'s (${mikasa.calcBMI2()})  `)
}else{
  console.log(
    `${mikasa.firstName} ${mikasa.lastName}'s BMI (${mikasa.calcBMI2()}) is higher than ${eren.firstName} ${eren.lastName}'s BMI (${eren.calcBMI()})  `
  );
}