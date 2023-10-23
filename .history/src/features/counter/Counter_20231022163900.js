import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

const Counter = () => {

    const count = useSelector(state)
  return <div></div>;
};

export default Counter;
