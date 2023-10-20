module.exports = function check(str, bracketsConfig) {

  let firstBackets = [];
  let secondBackets = [];
  
  for (let i = 0; i < bracketsConfig.length; i++) {
    firstBackets.push(bracketsConfig[i][0]);
  }

  for (let i = 0; i < bracketsConfig.length; i++) {
    secondBackets.push(bracketsConfig[i][1]);
  }
  function openBrackets(str) {
    return firstBackets.includes(str);
  }
  function closeBrackets(str) {
    return secondBackets.includes(str);
  }
  function BracketsOk(str, str2) {
    console.log(str2)
    let topElement = firstBackets.indexOf(str);
    let currentSymbol = secondBackets.indexOf(str2);

    if (topElement == currentSymbol) {
      return true;
    }
    return false;
  }
  for (let i = 0; i < str.length - 1; i++) {
    if (openBrackets(str[i]) && closeBrackets(str[i + 1]) && BracketsOk(str[i], str[i + 1])) {
      str = str.replace(str[i] + str[i + 1], "");
      i = -1;
    }
  }
  
  if (str.length == 0) {
    return true;
  }

  return false;

}
