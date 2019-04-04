import {letters, code21} from './strings.mjs';

const solver = (code) => {
  let values = [];
  for (let key = 0; key < 26; key++) {
    let solution = [];

    code.forEach(letter => {
      const index = letter + key > 25 ? letter + key - 26 : letter + key;
      solution.push(letters[index]);
    });
    console.log('Solution', key, solution.join(''));
    values.push(solution);
  }
}

solver(code21);

// const vignare = (code, key) => {
//   const possibilities = solver(code);
//   for (let i = 0; i < possibilities.length(); i++) {
//     for (let j = 0, k = 0; j < code.length; j++, k++) {
//       if(k === key.length) {
//         k = 0
//       }
//     }
//   }
// }