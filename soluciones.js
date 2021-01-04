/**
 * Filtra un array devolviendo un nuevo array sólamente con los números que contenga
 * Ejemplo: filterArray([1, 2, "a", "b"]) -> [1, 2]
 * @param Array arr
 * @returns Array
 */
export function filterArray(arr) {
    return arr.filter(item => typeof item === 'number');
}

/**
 * Filtra un array devolviendo un nuevo array quitando el número de elementos del 
 * principio del array que indica el segundo parámetro
 * Ejemplo: drop([1, 2, 3], 2) -> [3]
 * @param Array arr
 * @returns Array
 */
export function drop(arr, val = 1) {
    return arr.slice(val);
}

/**
 * Cuenta cuantas veces aparece una letra en un texto. Distinge en tre minúsculas/mayúsculas
 * Ejemplo: charCount("a", "javascript") -> 2
 * @param string char
 * @param string str
 * @returns number
 */
export function charCount(char, str) {
    return str.split("").filter(letter => letter === char).length;
}

/**
 * Suma todos los elementos del array elevados al cubo 
 * Ejemplo: sumOfCubes([1, 5, 9]) -> 855
 * @param Array nums
 * @returns number
 */
export function sumOfCubes(nums) {
    return nums.reduce((prev, curr) => prev + (Math.pow(curr, 3)), 0);
}

/**
 * Cuenta el número de vocales que tiene una palabra (mayúsculas y minúsculas) 
 * Ejemplo: countVowels("Javascript") -> 3
 * @param string str
 * @returns number
 */
export function countVowels(str) {
    return str.split("").filter(letter => letter.match(/[aeiouAEIOU]/)).length;
}

/**
 * Suma el valor absoluto de todos los elementos del array 
 * Ejemplo: getAbsSum([2, -1, 4, 8, 10]) -> 25
 * @param Array arr
 * @returns number
 */
export function getAbsSum(arr) {
    return arr.reduce((prev, curr) => prev + Math.abs(curr), 0);
}

/**
 * Devuelve cierto si el promedio de los números del array es un número entero (sin decimales)
 * Ejemplo: isAvgWhole([1, 3]) -> true
 * @param Array arr
 * @returns boolean
 */
export function isAvgWhole(arr) {
    return Number.isInteger(arr.reduce((prev, curr) => prev + curr, 0) / arr.length);
}

/**
 * Devuelve un array con los valores mínimo y máximo de todos los elementos del array
 * Ejemplo: minMax([1, 2, 3, 4, 5]) -> [1, 5]
 * @param Array numbers
 * @returns Array
 */
export function minMax(numbers) {
    return [Math.min(...numbers), Math.max(...numbers)]
}

/**
 * Devuelve un array con el valor máximo de cada uno de los arrays recibidos
 * Ejemplo: findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) -> [7, 90, 2]
 * @param Array numbers
 * @returns Array
 */
export function findLargestNums(arr) {
    return arr.map(item => Math.max(...item));
}

/**
 * Devuelve cuantas veces has 2 caracteres que coinciden entre los dos textos recibidos
 * Ejemplo: strMatchBy2char("yytaazz", "yyjaaz") -> 3  (coinciden "yy", "aa" y "az")
 * @param string str1
 * @param string str2
 * @returns number
 */
export function strMatchBy2char(str1, str2) {
    let count = 0;
    str1.split("").forEach((char, i) => {
        if (str2.includes(char + str1[i + 1])) {
            count++;
        }
    });
    return count;
}