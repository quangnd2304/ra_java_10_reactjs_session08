import { ACT_UP_TYPE, ACT_DOWN_TYPE } from "../constants/actionType";
// Khởi tạo giá trị init cho state
const initialState = 0;
// Tạo count reducer: state, action
//reducer(state,action)--> return newState
const count = (state = initialState, action) => {
    // Dựa vào action.type để cập nhật state
    switch (action.type) {
        case ACT_UP_TYPE:
            state += action.payload;
            return state;
        case ACT_DOWN_TYPE:
            state -= action.payload;
            return state;
        default:
            return state;
    }

}
export default count;
