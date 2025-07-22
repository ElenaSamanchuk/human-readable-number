module.exports = function toReadable(num) {
  if (num === 0) return 'zero';
  const units = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    'ten',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  const result = [];
  const hundred = Math.floor(num / 100);
  if (hundred > 0) {
    result.push(`${units[hundred]} hundred`);
  }
  const remainder = num % 100;
  if (remainder > 0) {
    if (remainder < 10) {
      result.push(units[remainder]);
    } else if (remainder < 20) {
      result.push(teens[remainder - 10]);
    } else {
      const ten = Math.floor(remainder / 10);
      const unit = remainder % 10;
      result.push(tens[ten]);
      if (unit > 0) {
        result.push(units[unit]);
      }
    }
  }
  return result.join(' ');
};
