const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let morseResult = "";

    while(expr.length / 10 != 0) {
        let binarySymbol = expr.slice(0,10);
        expr = expr.slice(10);
        let index = binarySymbol.indexOf('1');
        let morseLetter = "";
        binarySymbol = binarySymbol.slice(index);

        while (binarySymbol.length) {
            let symbol = "";
            switch(binarySymbol.slice(0,2)) {
                case "10": 
                    symbol = ".";
                    break;
                case "11": 
                    symbol = "-";
                    break;
            }
            morseLetter += symbol;
            if (binarySymbol.length != 0) {
                binarySymbol = binarySymbol.slice(2);
            }            
        }        
        if(morseLetter.length) {
            morseResult += MORSE_TABLE[morseLetter];
        } else {
            morseResult += " ";
        }        
    }
    return morseResult;
}

module.exports = {
    decode
}