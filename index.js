// code your solution here
function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`
}console.log(saturdayFun('bathe my dog'))

function mondayWork(work='go to the office'){
    return `This Monday, I will ${work}.`
}console.log(mondayWork('sleep'))

function wrapAdjective(visual='*',slash='||'){
    return function(adjective="a hard worker"){
    return `You are ${visual}${adjective}${visual}!`};
}const encouragingPromptFunction = wrapAdjective("*")();
console.log(encouragingPromptFunction);