// code your solution here
function saturdayFun(str = 'roller-skate'){
    return `This Saturday, I want to ${str}!`
}
const mondayWork = function(str = 'go to the office'){
    return `This Monday, I will ${str}.`
}
function wrapAdjective(visual = '*'){
    return function(str = "special"){
        return `You are ${visual}${str}${visual}!`
    }
}