import { useState } from "react";
import { Form } from "react-bootstrap";

interface InputRangeProps {
  label: string;
  step: number;
  min: number;
  max: number;
  value: number;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}
export function InputRange({ label, step, min, max, value, onChange } : InputRangeProps) {
    return(
        <>
          <Form.Label>{label}: {value}</Form.Label>
          <Form.Range
            step={step}
            min={min}
            max={max}
            value={value}
            onChange={onChange}
          />
        </>
    )
}