/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let winners = {};
    let losers = {};

    for (let i = 0; i < matches.length; i++){
        if (!winners[matches[i][0]]){
            winners[matches[i][0]] = 1
        } else {
            winners[matches[i][0]] +=1
        }
        if(!losers[matches[i][1]]){
            losers[matches[i][1]] = 1
        } else {
            losers[matches[i][1]] += 1
        }
    }

    //const w = []
    //const l = []

    const output = [[],[]]


    for (const key in winners) {
        if(!losers[key]){
            output[0].push(Number(key));
        }
    }

    for (const key in losers){
        if(losers[key] === 1){
            output[1].push(Number(key));
        }
    }
    return output;
};