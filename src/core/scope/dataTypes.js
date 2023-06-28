/*

Date: 28th June 2K23 - 12:43 PM

Title: Data Types

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
    var num1 = 123;
    var str1 = 'ABC';
    var flag = true;
    var anyVar;
    var numArr = [1, 2, 3];
    var anyArr = [1, true, 'XYZ'];
    // console.log("Method: availableDataTypes Ends.\n");
}
function compileTimeErrorOnChangingDataType() {
    console.log("Method: compileTimeErrorOnChangingDataType Begins.\n");
    var count; //  Declaring variable num1 of data type number.
    count = 3; //  Initializing count with number value.
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
    var Grade;
    (function (Grade) {
        Grade[Grade["A"] = 0] = "A";
        Grade[Grade["B"] = 1] = "B";
        Grade[Grade["C"] = 2] = "C";
        Grade[Grade["D"] = 3] = "D";
        Grade[Grade["E"] = 4] = "E";
        Grade[Grade["F"] = 5] = "F";
    })(Grade || (Grade = {}));
    ;
    var currentGrade = Grade.A;
    console.log('Initializing currentGrade with Grade.A | currentGrade: ' + currentGrade); //  currentGrade: 0
    currentGrade = 2;
    console.log('\nAssigning currentGrade with 2 numeric value i.e. in range of 0-5 A-F | ' +
        'currentGrade: ' + currentGrade); //  currentGrade: 2
    currentGrade = 10;
    console.log('\nAssigning currentGrade with 10 numeric value i.e. outside of range 0-5 A-F.');
    console.log('Compile Time Error: Type \'10\' is not assignable to type \'Grade\'');
    console.log('\nBut still we get output as 10 in JS Code.' + 'currentGrade: ' + currentGrade); //  currentGrade: 10
    console.log("\nMethod: enumExample Ends.\n");
}
