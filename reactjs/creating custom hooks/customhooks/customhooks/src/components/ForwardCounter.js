import useCounter from '../hooks/Counter';
import Card from './Card';

const ForwardCounter = () => {
  const counter = useCounter();


  return (
    <div><Card>{counter}</Card></div>)
};

export default ForwardCounter;
