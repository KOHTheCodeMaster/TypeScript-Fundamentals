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

    enumExample();

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

function enumExample() {

    console.log("\nMethod: enumExample Begins.");


    enum Grade { A, B, C, D, E, F};

    let currentGrade: Grade = Grade.A;
    console.log('Initializing currentGrade with Grade.A | currentGrade: ' + currentGrade);   //  currentGrade: 0

    currentGrade = 2;
    console.log('\nAssigning currentGrade with 2 numeric value i.e. in range of 0-5 A-F | ' +
        'currentGrade: ' + currentGrade);   //  currentGrade: 2

    currentGrade = 10;
    console.log('\nAssigning currentGrade with 10 numeric value i.e. outside of range 0-5 A-F.');
    console.log('Compile Time Error: Type \'10\' is not assignable to type \'Grade\'');
    console.log('\nBut still we get output as 10 in JS Code.' + 'currentGrade: ' + currentGrade);   //  currentGrade: 10

    console.log("\nMethod: enumExample Ends.\n");

}
