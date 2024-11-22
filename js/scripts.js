/*1.Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array*/
console.log("Ejercicio 1");
const numbers = [1, 2, 3, 4, 5, 6];

const multiply = (numbers) => {
  numbers.forEach((number, index) => {
    console.log(number * index);
  });
};

multiply(numbers);

/*2.Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice + 1*/

console.log("Ejercicio 2");

const divisionIndex = (numbers) => {
  const result = numbers.map((number, index) => {
    return number / (index + 1);
  });
  console.log(result);
};

divisionIndex(numbers);

/*3. Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.*/
console.log("Ejercicio3");

const letters = ["hola", "adios", "buenas", " que"];

const Mayus = (letters) => {
  const result = letters.map((letter) => {
    return letter.toUpperCase();
  });
  console.log(result);
};

Mayus(letters);

/* 4.Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide. Tiene que funcionar con mayúsculas y minúsculas.*/
console.log("Ejercicio4");

const filterWords = (words, letter) => {
  const filteredWords = words.filter((item) => {
    return item.toLowerCase().startsWith(letter.toLowerCase());
  });

  if (filteredWords.length > 0) {
    return filteredWords;
  }
  console.log("No hay palabras que empiece por la letra " + letter);
};

const resultFilter = filterWords(["hola", "adios", "amar"], "a");
console.log(resultFilter);

/*5.Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.*/
console.log("Ejercicio5");

const tenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = (tenNumbers) => {
  const result = tenNumbers.reduce((cont, number) => number + cont);
  console.log(result);
};

sum(tenNumbers);

/*6.Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
  "Número: 2 - Cuadrado: 4 - Cubo: 8".*/
console.log("Ejercicio 6");

const operations = (tenNumbers) => {
  tenNumbers.forEach((number) => {
    console.log(
      `Número: ${number} - Cuadrado: ${number * number} - Cubo: ${
        number * number * number
      }`
    );
  });
};
operations(tenNumbers);

/*7.Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula. ????
REduce mete los valores a uno*/
console.log("Ejercicio 7");

const mayusVowels = (word) => {
  const vocals = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];

  const nuevaPalabra = word.split("").reduce((palabraFinal, letra) => {
    if (vocals.includes(letra.toLowerCase())) {
      return palabraFinal + letra.toUpperCase();
    } else {
      return palabraFinal + letra;
    }
  });
  console.log(nuevaPalabra);
};

mayusVowels("murcielago");

/*antiguo*/
console.log("Ejercicio atiguo");
const vocalMayus = (word) => {
  const vocals = ["a", "e", "i", "o", "u"];
  let newWord = "";
  for (const letter of word) {
    if (vocals.includes(letter)) {
      newWord = newWord + letter.toUpperCase();
    } else newWord = newWord + letter;
  }

  console.log(newWord);
};

vocalMayus("culo");

/*8. Crea una función que reciba un array de 10 números y te diga si alguno es mayor de 5.*/
console.log("Ejercicio 8");

const mayorCinco = tenNumbers.some((number) => number > 5);

console.log(mayorCinco);

/*9.Crea una función que reciba un array de 5 palabras y un número y te devuelva un array con las palabras que tienen esa longitud, por ejemplo si le envias (['hola', 'adios', 'gato', 'perro', 'casa'], 4), te devolverá un array con ['hola', 'gato', 'casa']*/
console.log("ejercicio 9");

const ejercicio9 = (words, number) => {
  const filter = words.filter((word) => {
    return word.length === number;
  });

  console.log(filter);
};

ejercicio9(["hola", "adios", "gato", "perro", "casa"], 4);

/* ????? 10.Crea una función que reciba un array de números y un número y te devuelva un array con los números que sean divisores de ese número*/
console.log("ejercicio 10");

const division = (array, number) => {
  return array.filter((elementoarray) => elementoarray % number === 0);
};

const arraydiez = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numero = 5;

console.log(division(arraydiez, numero));

/*11.Crea una función que reciba este array y te devuelva sólo los usuarios cuya edad sea menor de 30*/
console.log("ejercicio 11");
const array = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 20 },
];

const edad = (array) => {
  return array.filter((user) => user.age < 30);
};
console.log(edad(array));

/*12. Crea una función que reciba un array con 5 números y te diga si todos son pares o no.*/
console.log("Ejercicio 12");

const fiveNumber = [4, 2, 6, 4, 8];

const even = (numbers) => {
  const isEven = numbers.every((number) => number % 2 === 0);
  if (isEven) {
    console.log("Todos son pares");
  } else {
    console.log("Alguno es impar");
  }
};

even(fiveNumber);

/*13. Crea una función que reciba un array de 5 palabras y las ordene en base a su longitud, de menor a mayor.
Para numeros sort siempre resta y si hay letras locale */

console.log("Ejercicio 13");

const cincoPalabras = ["cabra", "ajo", "pimienta", "curry", "oregano"];

const order = (array) => {
  return array.sort((a, b) => a.length - b.length);
};

console.log(order(cincoPalabras));

/*14. ?  Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM". No se puede usar reverse()
se hace con reduce, hay varios caracteres */
console.log("Ejercicio 14");

const rev = (palabra) => {
  const result = palabra
    .split("")
    .reduce((counter, letter) => letter + counter);

  console.log(result);
};

rev("Mariposa");

console.log("Ejercicio antiguo bucle");
const reverseWord = (word) => {
  let result = "";
  for (let index = word.length - 1; index >= 0; index--) {
    result = result + word[index];
  }
};

reverseWord("sopa");

/*## Retos!!

/*15. Crea una función que reciba un array de 5 números de 2 dígitos. La función debe ser capaz de sumar los digitos de cada número, es decir si yo le envío [21, 34, 87, 10, 28] la función tendrá que ser capaz de devolverme un array con [3, 7, 15, 1, 10]*/

console.log("Ejercicio 15");

const suma = (numbers) => {
  const result = numbers.map((number) => {
    const primerDigito = String(number).charAt(0);
    const segundoDigito = String(number).charAt(1);
    return Number(primerDigito) + Number(segundoDigito);
  });
  console.log(result);
};

suma([21, 53, 10, 31, 81]);

/*16.Utilizando el array a continuación, crea una función que reciba un id de usuario y borre ese usuario del array.*/

const users = [
  {
    id: "user001",
    name: "Juan",
    surname: "Pérez",
    age: 30,
  },
  {
    id: "user002",
    name: "María",
    surname: "González",
    age: 25,
  },
  {
    id: "user003",
    name: "Pedro",
    surname: "Sánchez",
    age: 35,
  },
  {
    id: "user004",
    name: "Ana",
    surname: "Martínez",
    age: 28,
  },
  {
    id: "user005",
    name: "Luis",
    surname: "López",
    age: 40,
  },
];

console.log("Ejercicio 16");

const eraseUser = (id) => {
  const filter = users.filter((item) => item.id !== id);

  console.log(filter);
};

eraseUser("user004");
