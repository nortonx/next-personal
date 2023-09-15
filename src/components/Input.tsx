import { Form } from "react-bootstrap";

interface InputProps {
  label: string;
  id?: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  disabled: boolean;

}
export function Input<HTMLInputElement>({label, id, type, placeholder, value, onChange, disabled } : InputProps){
    return(
        <Form.Group className="mb-3">
          <Form.Label htmlFor={id}>{label}</Form.Label>
          <Form.Control 
            type={type}
            placeholder={placeholder}
            id={id}
            value={value}
            onChange={onChange}
            disabled={true}
          />
        </Form.Group>
    )
}