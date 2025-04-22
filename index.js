var s = "cb34";

var clearDigits = function (s) {
  var result = [];
  const numberSet = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);
  for (let i = 0; i < s.length; i++) {
    if (!result.length) {
      result.push(s[i]);
    } else if (
      numberSet.has(s[i]) &&
      !numberSet.has(result[result.length - 1])
    ) {
      result.pop();
    } else {
      result.push(s[i]);
    }
  }
  return result.join("");
};

console.log(clearDigits(s));

var calPoints = function (operations) {
  const result = [];

  for (let i = 0; i < operations.length; i++) {
    console.log(result);
    const currentOperation = operations[i];
    if (currentOperation === "C") {
      result.pop();
    } else if (currentOperation === "D") {
      const current = parseInt(result.pop());
      const newScore = current * 2;
      result.push(current);
      result.push(newScore);
    } else if (currentOperation === "+") {
      const prev1 = parseInt(result.pop());
      const prev2 = parseInt(result.pop());
      const newScore = parseInt(prev1) + parseInt(prev2);
      result.push(prev2);
      result.push(prev1);
      result.push(newScore);
    } else {
      result.push(parseInt(currentOperation));
    }
  }
  return result.length ? result.reduce((x, y) => parseInt(x) + parseInt(y)) : 0;
};

console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));

const change1 = "dsadasdas";
const change2 = "dsakldkadjakjdaslkdsada";
