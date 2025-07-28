let array1 = [1,2,3,4,5];
array1;

let array2= [3,4,5,6,7,8,9];
array2;

let conArray=[...array1, ...array2]

conArray;

let uniqueArray = [...new Set(conArray)];
uniqueArray;

let [firstElement, secondElement, thirdElement] = uniqueArray;
firstElement;
secondElement;
thirdElement;
