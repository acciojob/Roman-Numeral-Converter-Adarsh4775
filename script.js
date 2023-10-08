function intToRoman(num) {
  const romanNumerals = [
    { value: 100000, symbol: 'C̅' },
    { value: 90000, symbol: 'X̅C̅' },
    { value: 50000, symbol: 'L' },
    { value: 40000, symbol: 'X̅L' },
    { value: 10000, symbol: 'M' },
    { value: 9000, symbol: 'I̅X̅' },
    { value: 5000, symbol: 'V̅' },
    { value: 4000, symbol: 'I̅V̅' },
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ];

  let result = '';

  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      result += romanNumerals[i].symbol;
      num -= romanNumerals[i].value;
    }
  }

  return result;
}

module.exports = intToRoman;
