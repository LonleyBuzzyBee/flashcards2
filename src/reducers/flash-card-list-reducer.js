import * as c from './../actions/ActionTypes'

// export default (state = {}, action) => {
//   const { title, category, content, id } = action;
//   switch (action.type) {
//   case 'ADD_FLASH_CARD':
//     return Object.assign({}, state, {
//       [id]: {
//         title: title,
//         category: category,
//         content: content,
//         id: id
//       }
//     });
//   case 'DELETE_FLASH_CARD':
//     const newState = { ...state };
//     delete newState[id];
//     return newState;
//   default:
//     return state;
//   }
// };