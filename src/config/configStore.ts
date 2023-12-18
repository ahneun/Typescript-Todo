import { createStore, combineReducers } from 'redux';
import todosReducer from '../modules/todos'; // 앞서 작성한 todos 리듀서 파일

// 루트 리듀서 생성
const rootReducer = combineReducers({
  todos: todosReducer, // 여러 개의 리듀서를 combineReducers로 조합할 수 있습니다.
  // 다른 리듀서 추가 가능
});

// Redux 스토어 생성
const store = createStore(rootReducer);

export default store;