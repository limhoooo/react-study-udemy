import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

import { counterAction } from '../store/counter-slice'
const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const show = useSelector(state => state.counter.show);
  const dispatch = useDispatch();
  const incrementDispatch = () => {
    dispatch(counterAction.increment());
  }
  const incrementFiveDispatch = () => {
    dispatch(counterAction.incrementFive(5));
  }
  const decrementDispatch = () => {
    dispatch(counterAction.decrement());

  }
  const toggleHandler = () => {
    dispatch(counterAction.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {
        show &&
        <>
          <div className={classes.value}>-- {count} --</div>
          <div>
            <button onClick={incrementDispatch}>PLUS +1</button>
            <button onClick={incrementFiveDispatch}>PLUS +5</button>
            <button onClick={decrementDispatch}>MINUS -1</button>
          </div>
        </>
      }
      <button onClick={toggleHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
