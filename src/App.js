import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeCounterValue } from './store/sliceCounter';

function App() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.counter);

  const activeTree = useSelector(state => state.activeTree);
  return (
    <div className="App" style={{display:'flex', alignItems:'center'}}>
      <div className='button' onClick={() => dispatch(changeCounterValue({amount: 1}))}>+</div>
      {value}
      <div className='button' onClick={() => dispatch(changeCounterValue({amount: -1}))}>-</div>
    </div>
  );
}

export default App;
