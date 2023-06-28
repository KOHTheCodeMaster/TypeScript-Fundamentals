/*

Date: 28th June 2K23 - 01:13 PM

Title: Data Types & Enum

Dev: K.O.H..!! (Harshit Gupta)

GitHub: https://github.com/KOHTheCodeMaster/TypeScript-Fundamentals

*/

main();

function main() {

    availableDataTypes();

    compileTimeErrorOnChangingDataType();

    enumGradeExample();

    enumRomanNumberExample();

}

function availableDataTypes() {

    // console.log("Method: availableDataTypes Begins.");

    let num1: number = 123;
    let str1: string = 'ABC';
    let flag: boolean = true;
    let anyVar: any;

    let numArr: number[] = [1, 2, 3];
    let anyArr: any[] = [1, true, 'XYZ'];

    // console.log("Method: availableDataTypes Ends.\n");

}

function compileTimeErrorOnChangingDataType() {

    console.log("Method: compileTimeErrorOnChangingDataType Begins.\n");

    let count: number;  //  Declaring variable num1 of data type number.
    count = 3;  //  Initializing count with number value.

    console.log('When we try to assign string value to count, we get compile time error.' +
        'TS2322: Type \'string\' is not assignable to type \'number\'.');
    count = 'ABC';

    console.log('\nWe are using count variable and trying to perform numeric add operation.' +
        'Since we assigned count with string value, it\'ll concatenate instead of adding 100 value. ' +
        'In JS, we will get to know about this logical error during runtime, ' +
        'But Data Types in TypeScript allows us to see these errors during compile time itself.');

    console.log('\nCount + 100: ' + (count + 100));

    console.log("\nMethod: availableDataTypes Ends.\n");

}

function enumGradeExample() {

    console.log("\nMethod: enumGradeExample Begins.");

    //  Adding additional Enum will automatically be assigned the last value incremented by 1. (E.g. G will be 6)
    enum Grade { A, B, C, D, E, F};

    console.log('Using enums, it allows to assign only available valid values, ' +
        'and if we try to assign any invalid values, it\'ll give us the Error during compile time itself.');

    let currentGrade: Grade = Grade.A;
    console.log('Initializing currentGrade with Grade.A | currentGrade: ' + currentGrade);   //  currentGrade: 0

    currentGrade = 2;
    console.log('\nAssigning currentGrade with 2 numeric value i.e. in range of 0-5 A-F | ' +
        'currentGrade: ' + currentGrade);   //  currentGrade: 2

    currentGrade = 10;
    console.log('\nAssigning currentGrade with 10 numeric value i.e. outside of range 0-5 A-F.');
    console.log('Compile Time Error: Type \'10\' is not assignable to type \'Grade\'');
    console.log('\nBut still we get output as 10 in JS Code.' + 'currentGrade: ' + currentGrade);   //  currentGrade: 10

    console.log("\nMethod: enumGradeExample Ends.\n");

}

function enumRomanNumberExample() {

    console.log("\nMethod: enumRomanNumberExample Begins.");

    enum RomanNumber { I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000};

    console.log('\nUsing enums, it allows to assign only available valid values, ' +
        'and if we try to assign any invalid values, it\'ll give us the Error during compile time itself.');

    let num1: RomanNumber = RomanNumber.I;
    console.log('num1: ' + num1);   //  romanNum: 1

    let num5: RomanNumber = RomanNumber.V;
    console.log('num5: ' + num5);   //  romanNum: 5

    let num10: RomanNumber = RomanNumber.X;
    console.log('num10: ' + num10);   //  romanNum: 10

    let num50: RomanNumber = RomanNumber.L;
    console.log('num50: ' + num50);   //  romanNum: 50

    let num100: RomanNumber = RomanNumber.C;
    console.log('num100: ' + num100);   //  romanNum: 100

    let num500: RomanNumber = RomanNumber.D;
    console.log('num500: ' + num500);   //  romanNum: 500

    let num1000: RomanNumber = RomanNumber.M;
    console.log('num1000: ' + num1000);   //  romanNum: 1000

    console.log("\nMethod: enumRomanNumberExample Ends.\n");

}
