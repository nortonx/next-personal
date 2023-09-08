interface CounterProps {
  label: string;
  counter: number;
}
export function Counter({ label, counter } : CounterProps){
    return(
        <div data-testid="counter">
          <h1>{label}</h1>
          <h2>{counter}</h2>
        </div>
    )
}