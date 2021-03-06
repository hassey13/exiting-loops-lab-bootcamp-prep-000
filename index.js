// - `breakOut(array, changeValue, stopValue)` which iterates through `array` and changes every element to `changeValue` until the loop reaches `stopValue`. Then we `break` out of the loop and return the array.

function breakOut(array, changeValue, stopValue) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === stopValue) {
            break;
        };
        array[i] = changeValue;
    };
    return array;
}

// - `keepGoing(array, changeValue, skipValue)` which iterates through `array` and changes every element to `changeValue` except those that match `skipValue`. Then return the array.

function keepGoing(array,changeValue, skipValue) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === skipValue) {
            continue;
        };
        array[i] = changeValue;
    };
    return array;
}

// - `findBy(array, findFn)` which looks for a value in `array` based on the return value of `findFn`. Return `null` if the value isn't found.

function findBy(array, findFn) {
    var val = null;
    for (let i = 0; i < array.length; i++) {
        if (findFn(array[i])) {
            var val = 1;
            return array[i];
        }
    }
    if ( val !== 1) {
        return null;
    }
}
