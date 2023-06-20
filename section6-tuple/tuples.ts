// const drink = {
//   color: 'brown',
//   carbonated: true,
//   sugar: 40
// }; 


// Type Alias
type Drink = [string, boolean, number]; // type alias

const pepsi: Drink = ['brown', true, 40]; // tuple
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// Tuple 
const zeroCoke: [string, boolean, number] = ['brown', true, 40]; 

// * Tuple은 많이 사용되지 않는다.
// 그 이유는, 아래와 같다. 무엇을 가르치고 있는지 알기 어렵다.
const carSpecs: [number, number] = [400, 3354];

// 이런식으로 사용하는 것이 훨씬 직관적이라서 많이 사용한다.
const carStats: {horsepower: number, weight: number} = {
  horsepower: 400,
  weight: 3354,
}