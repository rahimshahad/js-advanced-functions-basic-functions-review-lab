// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(work = "go to the office") {
    return `This Monday, I will ${work}.`
}


function wrapAdjective(astring = "*") {
    return function(param = "special") {
        return `You are ${astring}${param}${astring}!`

    }
}


const Calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }
}


function actionApplyer(start, arr) {

    for (let i = 0; i < arr.length; i++) {
        start = arr[i](start)
    }
    return start
}