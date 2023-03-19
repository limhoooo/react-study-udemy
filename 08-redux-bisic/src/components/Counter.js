import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.plusReducer.count)
  const numberDispatch = (btnType, number) => {
    dispatch({ type: btnType, number })
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {counter} --</div>
      <div>
        <button onClick={() => numberDispatch('PLUS')}>PLUS +1</button>
        <button onClick={() => numberDispatch('PLUSFIVE')}>PLUS +5</button>
        <button onClick={() => numberDispatch('MINUS')}>MINUS -1</button>
      </div>
    </main>
  );
};

export default Counter;
