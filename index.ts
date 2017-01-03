
type MyKeyValueType = [string, string];
type MyArrayType = MyKeyValueType[];

type MyArrayTypeShort = [string, string][];

//let myArray: MyArrayTypeShort = [["key1", "value1"], ["key2", "value2"]];
let myArray: [string, string][] = [["key1", "value1"], ["key2", "value2"]];
let vx = myArray[0][2];

let easy1: [string, string] = ["value1"]; // this is error
let easy2: [string, string] = ["value1", "value2"]; // this is ok
let easy3: [string, string] = ["value1", "value2", "value3"]; // should it be an error?

myArray[0][2] = "should it be an error?";

function test(arg: MyArrayType): void {
    console.log("myArray=" + JSON.stringify(arg));
    console.log("myArray[0]=" + JSON.stringify(arg[0]));
}

test(myArray);


