/*
 * @lc app=leetcode id=860 lang=javascript
 *
 * [860] Lemonade Change
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = function (bills) {
  if (bills[0] !== 5) {
    return false;
  }
  const queue = [];
  queue.push(bills[0]);
  for (const b of bills.slice(1)) {
    switch (b) {
      case 5:
        queue.push(5);
        continue;
      case 10:
        const i = queue.indexOf(5);
        if (i === -1) {
          return false;
        }
        queue.splice(i, 1);
        queue.push(10);
        continue;
      case 20:
        if (!queue.includes(5)) {
          return false;
        }
        if (queue.includes(10) && queue.includes(5)) {
          queue.splice(queue.indexOf(10), 1);
          queue.splice(queue.indexOf(5), 1);
          continue
        }
        if (queue.filter((x) => x === 5).length < 3) {
          return false
        } else {
        queue.splice(queue.indexOf(5), 1);
        queue.splice(queue.indexOf(5), 1);
        queue.splice(queue.indexOf(5), 1);
        continue
        }
    }
  }
  return true
};
// @lc code=end
// console.log(lemonadeChange([5, 5, 5, 10, 20]));
// console.log(lemonadeChange([5, 5, 10]));
// console.log(lemonadeChange([10, 10]));
// console.log(lemonadeChange([5,5,10,10,20]));
// console.log(lemonadeChange([5,5,10,20,5,5,5,5,5,5,5,5,5,10,5,5,20,5,20,5]));

//好的解法
// var lemonadeChange = function(bills) {
//   var count5= 0;
//   var count10= 0;

//   for(var i=0; i<bills.length; i++){
//      if(bills[i] ===5){
//          count5++
//      }
//      else if(bills[i] ===10){
//          count10++
//      }   
//      if(bills[i] === 10){
//          if(count5 === 0){
//              return false    
//          }
//          else{
//              count5--
//          }
//      }
//       else if(bills[i] === 20){
//           if(count5 >= 1 && count10 >= 1){
//               count5--;
//               count10--;
//           }
//           else if(count5 >= 3){
//               count5 -=3
//           }
//           else{
//               return false
//           }
//       }      
//   }  
// return true 
// };