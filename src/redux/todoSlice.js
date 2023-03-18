import { createSlice , configureStore } from '@reduxjs/toolkit'
//createSlice là obj nhận 3 key
/**
 * name: tên của slice. Bắt buộc phải có.
 * initialState: state ban đầu của slice. Bắt buộc phải có.
 * reducers: một đối tượng chứa các reducer cho slice. Bắt buộc phải có.
 * extraReducers: một đối tượng chứa các reducer bổ sung cho slice.
 */
const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        filters: {
            search: '',
            status: 'All',
            priority: []
        },
        todoList : [
           
        ]
    },

    reducers: {
        addTodo: (state, action) =>{
            state.todoList= [
                ...state.todoList,
                {
                    ...action.payload,
                    id: state.todoList.length +1 ,
                },
            ]
        }
    }
});

export const todoAction = todoSlice.actions
export const todoList = (state) => state.todoReducer.todoList
export default todoSlice.reducer
// tạo store
//bọc app bằng Provider và store={store}
// tạo ra slice 
/**
 * name: tên của slice. Bắt buộc phải có.
 * initialState: state ban đầu của slice. Bắt buộc phải có.
 * reducers: một đối tượng chứa các reducer cho slice. Bắt buộc phải có.
 */
// export const action
// export default reducer (todoSlice.reducer)
// lấy ra initalState => export const filterTodo = (state) => state.todoReducer.filters
//state chính là store 