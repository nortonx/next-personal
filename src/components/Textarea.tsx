import { Form } from 'react-bootstrap'

interface TextareaProps {
  label: string;
  id: string;
  onChangeText(content: string): any;
}
export function Textarea({ label, id, onChangeText } : TextareaProps){
    return(
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="fs-3 fw-semibold">{label}</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={5}
              id={id}
              onChange={(event) => onChangeText(event.target.value)}
              data-testid="textarea"
             />
          </Form.Group>
        </Form>
    )
}