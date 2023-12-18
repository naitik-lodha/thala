export function checkForThala(input) {
  let formattedInput = input.toString().replace(/\s/g, "").toLowerCase();

  if (!isNaN(formattedInput)) {
    formattedInput = formattedInput.toString();
  }
  const digitSum = formattedInput
    .split("")
    .reduce((acc, digit) => acc + parseInt(digit), 0);

  if (digitSum === 7) {
    return "Thala for digit sum equal to 7!";
  }

  if (formattedInput.length === 7) {
    return "Thala for having 7 characters!";
  }

  if (formattedInput.includes("7")) {
    return "Thala for containing the digit 7!";
  }

  if (parseInt(formattedInput) % 7 === 0) {
    return "Thala for being a multiple of 7!";
  }

  const digitSquaresSum = formattedInput
    .split("")
    .reduce((acc, digit) => acc + Math.pow(parseInt(digit), 2), 0);
  if (digitSquaresSum === 7) {
    return "Thala for sum of squares of digits equal to 7!";
  }

  const reversedInput = formattedInput.split("").reverse().join("");
  if (parseInt(reversedInput) === 7) {
    return "Thala for being the reverse of 7!";
  }

  const wordsCount = formattedInput.split(" ").filter(Boolean).length;
  if (wordsCount === 7) {
    return "Thala for having 7 words!";
  }

  const digits = formattedInput.split("").map(Number);
  for (let i = 0; i < digits.length; i++) {
    for (let j = i + 1; j < digits.length; j++) {
      if (
        digits[i] + digits[j] === 7 ||
        digits[i] - digits[j] === 7 ||
        digits[i] * digits[j] === 7 ||
        digits[i] / digits[j] === 7
      ) {
        return "Thala for having an arithmetic operation on digits equal to 7!";
      }
    }
  }

  return null;
}
