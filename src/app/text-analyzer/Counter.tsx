import { Card } from "react-bootstrap";

interface CounterProps {
  label: string;
  counter: number;
}
export function Counter({ label, counter } : CounterProps){
    return(
        <div data-testid="counter" className="py-2">
          <Card>
            <Card.Body>
              <Card.Title className="d-flex justify-content-center fs-2">{label}</Card.Title>
              <Card.Text 
                className="d-flex justify-content-center text-secondary fs-3"
              >
                {counter}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
    )
}