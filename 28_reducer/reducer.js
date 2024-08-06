const initialState = [];

function reducer(state, action) {
  // if (action.type === 'ADD_NAME') {
  //   return [...state, action.payload];
  // }
  // if (action.type === 'DELETE_NAME') {
  //   return state.filter((personName) => personName !== action.payload);
  // }
  // if (action.type === 'DELETE_ALL_NAME') {
  //   return [];
  // }
  // return state;

  switch (action.type) {
    case 'ADD_NAME':
      return [...state, action.payload];
    case 'DELETE_NAME':
      return state.filter((personName) => personName !== action.payload);
    case 'DELETE_ALL_NAME':
      return [];
    default:
      return state;
  }
}

let newState = reducer(initialState, { type: 'ADD_NAME', payload: 'Konstantin' });

console.log(newState);
let newState2 = reducer(newState, { type: 'ADD_NAME', payload: 'Igor' });

console.log(newState2);

let newState3 = reducer(newState2, { type: 'DELETE_ALL_NAME' });

console.log(newState3);

let newState4 = reducer(newState3, { type: 'ADD_NAME', payload: 'Igor' });

console.log(newState4);
