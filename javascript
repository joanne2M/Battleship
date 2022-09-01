let enemyShips = [];
let numberofEnemyShips = 6;

class Ship{
    constructor () {
    this.hull = 20;
    this.firepower = 1;
    this.accuracy = .7

}
}

class Alienships{ 
    constructor(){
        this.hull = 2.5;
        this.firepower = 3.5;
        this.accuracy = .7
    }
}

// Intialize - Give your variable a skeleton // 
let AlienShips1 = new Alienships ()

// My Ships //

let Ship1 = new Ship ()

// Crate a skeltelton for this function to work // 
const Hitships = (AlienShips) => {
    AlienShips.hull = AlienShips.hull - Ship1.firepower;
console.log (AlienShips.hull)

if ( AlienShips.hull < 0) {
    console.log ("enemydies");
    // document.querySelector(".EnemyShips").style.display = "none"
    
let OppShips = document.querySelectorAll(".EnemyShips")
console.log(OppShips)
   
for (let i = 0; i < OppShips.length; i++) {
     OppShips[i].style.display = "none";
    }
  
    // console.log(document.querySelectorAll(".EnemyShips"))


} else {
    let EnemyShips1 = document.querySelector(".EnemyShips")
    EnemyShips1.style.display ="none";
    console.log ("enemylives")
}

}

const FireButton = () => {
    
    let test = Math.random()

if (test < Ship1.accuracy ) {
    Hitships(AlienShips1)
    console.log ("Ship Hits Target") 

}

else {
    console.log ("Ship Misses Target")
}

console.log(test)

}

// Multiple Ships // 

const ManyShips1 = () => {

let NumShips1 = document.querySelector(".NumShips")
console.log(NumShips1)

NumShips1.innerHTML += '<img src="https://i.pinimg.com/originals/92/96/f7/9296f70fce1ae3f298e0d085c17f6a3f.gif" alt="" class="EnemyShips"></img>'
}

ManyShips1()
ManyShips1()
ManyShips1()
ManyShips1()

// GAME BOARD //



















//  -------------------------- OLD ////
    
// later on // 

    // let AlienS






// function HitShips  (Alienships1.hull) {

// }

//     // hull for hitpoints
//     // firepower is the amount of damage done to the null
//     // your spaceship the



// // Ship { Attack Function}

// let playerShip = new Ship()
// // for loop for alien ships

// for(let i= 0; i< numberOfEnemyShips; i++){
//     let enemyShip = new Ship("Mothership");
//     enemyShips.push (enemyShip)
// }

// // Math. floor(Math. random() * (max - min + 1)) + min;
// // Math. floor(Math. random() * (max + 1));
// // Math. floor(Math. random() * max) + 1;

// console.log(enemyShips);

// console.log(Math.floor(100000 + Math.random( *900000)));
