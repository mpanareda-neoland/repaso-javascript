console.log("Repaso de Javascript / ES6 / Arrays");
console.log("======================================");
console.log("");

import * as arrays from "./arrays.js"

test("filterArray", arrays.filterArray([1, 2, "a", "b"]), [1, 2]);
test("filterArray", arrays.filterArray([1, "a", "b", 0, 15]), [1, 0, 15]);
test("filterArray", arrays.filterArray([1, 2, "aasf", "1", "123", 123]), [1, 2, 123]);
console.log("------");
test("drop", arrays.drop([1, 2, 3], 1), [2, 3]);
test("drop", arrays.drop([1, 2, 3], 2), [3]);
test("drop", arrays.drop([1, 2, 3], 5), []);
test("drop", arrays.drop([1, 2, 3], 0), [1, 2, 3]);
console.log("------");
test("charCount", arrays.charCount("a", "javascript"), 2);
test("charCount", arrays.charCount("c", "Chamber of secrets"), 1);
test("charCount", arrays.charCount("b", "big fat bubble"), 4);
console.log("------");
test("sumOfCubes", arrays.sumOfCubes([1, 5, 9]), 855);
test("sumOfCubes", arrays.sumOfCubes([3, 4, 5]), 216);
test("sumOfCubes", arrays.sumOfCubes([2]), 8);
test("sumOfCubes", arrays.sumOfCubes([]), 0);
console.log("------");
test("countVowels", arrays.countVowels("Javascript"), 3);
test("countVowels", arrays.countVowels("Neoland"), 3);
test("countVowels", arrays.countVowels("Albatros"), 3);
console.log("------");
test("getAbsSum", arrays.getAbsSum([2, -1, 4, 8, 10]), 25);
test("getAbsSum", arrays.getAbsSum([-3, -4, -10, -2, -3]), 22);
test("getAbsSum", arrays.getAbsSum([2, 4, 6, 8, 10]), 30);
test("getAbsSum", arrays.getAbsSum([-1]), 1);
console.log("------");
test("isAvgWhole", arrays.isAvgWhole([1, 3]), true);
test("isAvgWhole", arrays.isAvgWhole([1, 2, 3, 4]), false);
test("isAvgWhole", arrays.isAvgWhole([1, 5, 6]), true);
console.log("------");
test("minMax", arrays.minMax([1, 2, 3, 4, 5]), [1, 5])
test("minMax", arrays.minMax([2334454, 5]), [5, 2334454])
test("minMax", arrays.minMax([1]), [1, 1])
console.log("------");
test("findLargestNums", arrays.findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]), [7, 90, 2]);
test("findLargestNums", arrays.findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]), [-34, -2, 7]);
test("findLargestNums", arrays.findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]), [0.7634, 9.32, 9]);
console.log("------");
test("strMatchBy2char", arrays.strMatchBy2char("yytaazz", "yyjaaz"), 3);
test("strMatchBy2char", arrays.strMatchBy2char("javascript", "av"), 1);
test("strMatchBy2char", arrays.strMatchBy2char("", ""), 0);
test("strMatchBy2char", arrays.strMatchBy2char('AABBccDD', 'ABBBjjD'), 2);


function test(name, result, expect) {
    if (JSON.stringify(result) === JSON.stringify(expect)) {
        console.log(`[OK] La función ${name} funciona!`);
    } else {
        console.log(`[WARNING] La función ${name} no da el resultado esperado. Debería ser:`, expect, ' y ha sido ', result);
    }
}