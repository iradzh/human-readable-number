module.exports = function toReadable(number) {
    let result = "";
    if (number == 0) {
        return "zero";
    }

    if (number > 99) {
        result += obj[(number - (number % 100)) / 100] + " hundred ";
        number = number % 100;
    }

    if (number > 20 && number < 100) {
        if (number % 10 == 0) {
            result += obj[number];
        } else {
            result += obj[number - (number % 10)] + " " + obj[number % 10];
        }
    } else {
        result += obj[number];
    }

    return result.trim();
};

const obj = {
    0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
};
