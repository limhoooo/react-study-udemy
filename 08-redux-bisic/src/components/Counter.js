import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.plusReducer.count)
  const show = useSelector((state) => state.plusReducer.show)
  const plusDispatch = () => {
    dispatch({ type: 'PLUS' })
  }
  const plusFiveDispatch = () => {
    dispatch({ type: 'PLUSFIVE', number: 5 })
  }
  const minusDispatch = () => {
    dispatch({ type: 'MINUS' })
  }

  const toggleCounterHandler = () => {
    dispatch({ type: 'TOGGLE' })
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
