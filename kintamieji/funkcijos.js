
function tuscia(){

}

const a = tuscia();
console.log(a);
console.log(a);


function duokpenkis() {
   return 5;
}
console.log(duokpenkis());
console.log(duokpenkis());


function jubiliejai(username,age){
   
}

function studentAverage(name,marks){

}

console.log(studentAverage('Jonas',[1,2,3,4]));
console.log(studentAverage('Maryte',[1,4,7,4]))
console.log(studentAverage('Petras'[1,8,3,4]))
console.log(studentAverage('Ona'[10,7,3,4]))



function calcTip(meal) {
   if (meal > 50 && meal < 300) {
     tip = meal * .15
     totalCost = tip + meal
     console.log("pietus kainuos "+ meal + " arbatpinigiai " + tip + ". bendra saskaita " + totalCost + ".");
 
   } else {
     tip = meal * .20
     totalCost = tip + meal
     console.log("pietus kainuos "+ meal + " arbatpinigiai " + tip + ". bendra saskaita " + totalCost + ".");
 }
 }

 const bills = [275, 40, 430];
 const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
 const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
 
 console.log(bills);







