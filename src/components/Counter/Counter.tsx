import './Counter.css';

interface CounterProps {
    increment: any;
    decrement: any;
    count: number;
}

export const Counter = ({ increment, decrement, count }: CounterProps) => {
    return (
        <div className="stepper-control">
            <button aria-label="Increment value" onClick={increment} />
            <span className="stepper-value">{count}</span>
            <button aria-label="Decrement value" onClick={decrement} />
        </div>
    );
};
