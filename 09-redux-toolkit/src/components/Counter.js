import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.count);
  const show = useSelector((state) => state.counter.show);

  const plusDispatch = () => {
    dispatch(counterActions.plus())
  }
  const plusFiveDispatch = () => {
    dispatch(counterActions.plusFive(5))
  }
  const minusDispatch = () => {
    dispatch(counterActions.minus())
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {
        show &&
        <>
          <div className={classes.value}>-- {counter} --</div>
          <div>
            <button onClick={plusDispatch}>PLUS +1</button>
            <button onClick={plusFiveDispatch}>PLUS +5</button>
            <button onClick={minusDispatch}>MINUS -1</button>
          </div>
        </>
      }
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
