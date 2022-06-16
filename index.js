// code your solution here
/*function saturdayFun(fun = "roller-skate") {
  return `This Saturday, I want to ${fun}!`;
}
saturdayFun();

function mondayWork(work = "go to the office") {
  return `This Monday, I will ${work}.`;
}
mondayWork();

function wrapAdjective(flair = "*") {
  return function (adjective = "special") {
    // outer function return
    return `You are ${flair}${adjective}${flair}!`; //inner function return
  };
}*/



function saturdayFun (fun="sleep") {
console.log (`This Saturday, I want to ${fun}!`);
}
saturdayFun();

function saturdayFun (fun='roller-skate') {
  return (`This Saturday, I want to ${fun}!`);
  }
  

  function mondayWork (work='go to the office'){
    return (`This Monday, I will ${work}.`)
  }
  function wrapAdjective(result= '*'){
    return function (adjective = "a hard worker") {
    return (`You are ${result}${adjective}${result}!`)
  }
}
  function wrapAdjective (result='||'){
  return function (adjective = "a dedicated programmer"){
  return (`You are ${result}${adjective}${result}!`)
  }
  }
  






