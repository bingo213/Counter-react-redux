import { useDispatch, useSelector } from 'react-redux'
import { incrementAction } from './actions/incrementAction'
import { decrementAction } from './actions/decrementAction'

function App() {
  const counter = useSelector(state => state)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(incrementAction)}>+</button>
      <h3>{counter.num}</h3>
      <button onClick={() => dispatch(decrementAction)}>-</button>
    </div>
  );
}

export default (App);
