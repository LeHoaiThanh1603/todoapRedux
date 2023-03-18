//reducer => là một hàm

// const initialValue = {
//     value : 1
// }

// const rootReducer = (state = initialValue, action) => {
    /* action = {
type: 'todoList/increment'
         payload: 10
     }**/
//     switch(action.type) {
//         case 'INCREMENT':
//             return {
//                 ...state,
//                 value: state.value + 1 
//             }
//         case 'todoList/increment':
//             return {
//                 ...state,
//                 value: state.value + action.payload
//             }

//         default:
//             return
//     }
// }


 //action => là một object do chúng ta quy định

// const INCREMENT = {
//     type: 'todoList/increment',
//     payload: 10
// }

 //action creators => function tạo ra action
 //giúp hạn chế các object action lập lại 
// const incrementCreator = (data) => {
//     return  {
//         type: 'todoList/increment',
//         payload: data
//     }
// }

// incrementCreator(10)

 //DISPATCH => là một hàm để cập nhật lại store, nhận ă action
// distpatch(INCREMENT)
// distpatch(incrementCreator(15))
