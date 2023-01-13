import { combineReducers } from 'redux';
import count from './count';
import listNumber from './listNumber';
// Tạo reducer tử count và listNumber
export const reducer = combineReducers({ count, listNumber });