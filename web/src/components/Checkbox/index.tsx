import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type CheckboxProps = {
  isChecked?: boolean
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
  value?: string | ReadonlyArray<string> | number
  onCheck?: (status: boolean) => void
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  isChecked = false,
  label,
  labelFor = '',
  labelColor = 'white',
  value,
  onCheck,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    setChecked(prevChecked => !prevChecked)

    onCheck?.(!checked)
  }

  return (
    <S.Wrapper>
      <S.Input
        {...props}
        type="checkbox"
        id={labelFor}
        checked={checked}
        value={value}
        onChange={onChange}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Checkbox
