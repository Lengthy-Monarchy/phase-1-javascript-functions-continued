// code your solution here
//saturday fun
function saturdayFun(activity='swimming', company='my friends', place='in the ocean'){
    console.log(`This Saturday, I want to go ${activity} with ${company} ${place}`)
}
saturdayFun()

//Monday work
function mondayWork(task='go meet the client') {
    console.log(`This Monday, I will ${task}`)
}
mondayWork()

// wrapAdjective 
const wrapAdjective = function(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}.`;
    };
};

const encouragingPromptFunction = wrapAdjective("!!!");
const result1 = encouragingPromptFunction(); 
const result2 = encouragingPromptFunction("amazing"); 

console.log(result1);
console.log(result2);