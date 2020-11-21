var chalk=require('chalk');
var readlinesync=require('readline-sync')
var score=0;
var leaderboard=[{
  Name:"Kunal",
  Score:"70"
},
{
  Name:"Ashwani",
  Score:"45"
},
{
  Name:"Garima",
  Score:"40"
},
{
  Name:"Anuj",
  Score:"0"
}];

var q1={
  ques:"What is Two Tails real Name ? ",
  ans : 3,
  options:["Kurama","Shukaku","Matatabi","Gyuki"]
}
var q2={
  ques:"Who was Naruto's father in his wedding ? ",
  ans : 1,
  options:["Izuka","Kakashi","Guy","Minato"]
}
var q3={
  ques:"What is most powerful Sasuke's ninjutsu? ",
  ans:2,
  options:["Kirin","Indra's Arrow","Chidori","Fireball"]
}

var q4={
  ques:"What was Sasuke's chakra nature? ",
  ans:4,
  options:["Fire","Wind","Earth","Lightning"]
}
var q5={
  ques:"Which ninja can't do ninjutsu? ",
  ans:4,
  options:["TenTen","Kakashi","Gaara","Might Guy"]
}

var bonusQuestion={
  ques:"What is Sasuke's Team called ? ",
  ans:2,
  options:["Hebi","Taka","Toka","Akatsuki"]
}
var questions=[q1,q2,q3,q4,q5];
function funBegin(questions,j,points)
{
  console.log(chalk.bold.bgGrey.underline("Question "+ (j+1)))
  console.log(chalk.yellowBright(questions.ques));
  var userAnswer=readlinesync.keyInSelect(questions.options);
  if((userAnswer+1)==questions.ans){
    score=score+points;
    console.log(chalk.green("Correct Answer"));
  }
  else{
    score=score-5;
    console.log(chalk.red("Wrong Answer"));
  }

}
var userName=readlinesync.question("What is you name? ");
console.log(chalk.bold.bgCyan("Welcome "+userName+ " to Naruto Quiz"));
console.log();
console.log(chalk.bold.bgRed.underline("Rules"));
console.log("1. Correct Answer has +10 points.");
console.log("2. Wrong Answer has -5 points. ");
console.log("3. There is a bonus question. ");
console.log("4. Bonus Questions will be unlocked if you score is 50.");
console.log("5. Bonus Question has +20 Points.");
console.log(chalk.bold.bgBlue.underline("Let the Fun Begin "))
console.log();
for(var i=0;i<5;i++){
  funBegin(questions[i],i,10)
  }
if (score==50){
  console.log(chalk.bgBlue("Congratulations For the Bonus Question"));
  funBegin(bonusQuestion,5,20)
}
console.log(chalk.green("Your final Score: " + score));
console.log(chalk.bold.green("ScoreBoard"))
var counter;
var temp;
for(var i=0; i<leaderboard.length;i++){
  if(score<leaderboard[i].Score){  
    console.log(leaderboard[i].Name);
    console.log(leaderboard[i].Score);
    console.log("---------------------");
  }
  else{
    console.log(chalk.bold.magenta(userName));
    console.log(chalk.bold.magenta(score));
    console.log("------------------------");
    counter=true;
    temp=i;
    break;
  }
}

for(var k=temp;k<leaderboard.length;k++){
  if(counter){
  console.log(leaderboard[k].Name);
  console.log(leaderboard[k].Score);
  console.log("----------------------");
  }
}

