import { FC, ChangeEvent } from "react"

interface InputProps {
    value?: string,
    onChange: (value: string, e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = ({ value, onChange }) => {
    return <input value={value} onChange={(e) => onChange(e.target.value, e)} />
}