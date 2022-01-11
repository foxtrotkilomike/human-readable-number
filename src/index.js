module.exports = function toReadable(number) {
  const numStr = [...number.toString()];
  let readableNum = '';
  const numbersWord = [
    ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  ];

  for (let position = numStr.length; position > 0; position--) {
    let nextDigit = numStr[numStr.length - position];
    switch (position) {
      case 3:
        readableNum += numbersWord[0][nextDigit] + ' hundred';
        break;

      case 2:
        if (nextDigit === '1') {
          readableNum += ' ' + numbersWord[1][numStr[numStr.length - 1]];
          position--;
        } else if (nextDigit === '0') continue;
        else {
          readableNum += ' ' + numbersWord[2][nextDigit - 2];
        }
        break;

      case 1:
        if (nextDigit !== '0' || numStr.length === 1 && nextDigit === '0') {
          readableNum += ' ' + numbersWord[0][nextDigit];
        }
        break;
    }
  }

  return readableNum.trim();
}
