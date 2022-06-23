module.exports = function toReadable (number) {
    const textNumbers = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred'
    };

    let num = String(number);
    let len = num.length;
    
    if (number in textNumbers) {
        if (num.slice(-2) === '00') {
            const start = num.slice(0, 1);
            return textNumbers[start] + ' ' + textNumbers[number];
        } else {
            return textNumbers[number];
        } 
    } else {
        let textNum = String(number).split('');

        const ending = num.slice(-1);
        let middle = num.slice(1, -1) + '0';
        let start = num.slice(0, 1);
        
            if (len === 2) {
                start = num.slice(0, 1) + '0';
                const result = textNumbers[start] + ' ' + textNumbers[ending];
                console.log(result);
                return result;
            }
            else if (len === 3) {
                if (num.slice(-2) === '00') {
                    return textNumbers[start] + ' ' + textNumbers[100];
                } else if(textNum[2] === '0') {
                    const result = textNumbers[start] + ' ' + textNumbers[100] + ' ' + textNumbers[middle];
                    return result;
                } else if (textNum[1] === '1') {
                    middle = textNum[1] + textNum[2];
                    console.log(middle);
                    const result = textNumbers[start] + ' ' + textNumbers[100] + ' ' + textNumbers[middle];
                    return result;
                } else if (textNum[1] === '0') {
                    const result = textNumbers[start] + ' ' + textNumbers[100] + ' ' + textNumbers[ending];
                    return result;
                }
                else {
                    const result = textNumbers[start] + ' ' + textNumbers[100] + ' ' + textNumbers[middle] + ' ' + textNumbers[ending];
                    return result;
                }
            }    
    }
}
