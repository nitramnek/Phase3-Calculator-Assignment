//k3n5c0de
// Reference  Type Arrays.
// Nested arrays

const egregiouslyNestedArray = [
    "How",
    ["deep", ["can", ["we", ["go", ["?"], "Pretty"], "dang"], "deep,"], "it"],
    "seems.",
  ];

  console.log(egregiouslyNestedArray);

 console.log(egregiouslyNestedArray[0]);
//=> 'How'

 console.log(egregiouslyNestedArray[1]);
//=> [ 'deep', [ 'can', [ 'we', [Array], 'dang' ], 'deep,' ], 'it' ]

 console.log(egregiouslyNestedArray[2]);
//=> 'seems.'

console.log(egregiouslyNestedArray[1][0]);
//=> 'deep'

console.log(egregiouslyNestedArray[1][1]);
//=> [ 'can', [ 'we', [ 'go', [Array], 'Pretty' ], 'dang' ], 'deep,' ]

console.log(egregiouslyNestedArray[1][2]);
//=> 'it'

console.log(egregiouslyNestedArray[1][1][1][1][1]);
//=> ['?']
console.log(egregiouslyNestedArray[1][1][1][1][1][0]);
//=> '?'



const board = [
    ["X", "O", " "],
    [" ", "X", "O"],
    ["X", " ", "O"],
  ];
  
  console.log(board);
  // => [["X", "O", " "], [" ", "X", "O"], ["X", " ", "O"]]


console.log(board[1]);
// => [" ", "X", "O"]
console.log(board[0][0]);
// => "X"
console.log(board[0][2]);
// => " "
console.log(board[2][2]);
// => "O