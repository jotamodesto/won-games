import React, { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  disabled?: boolean
  label?: string
  labelFor?: string
  initialValue?: string
  icon?: React.ReactElement
  iconPosition?: 'start' | 'end'
  error?: string
  onInput?: (value: string) => void
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  disabled = false,
  label,
  labelFor = '',
  initialValue = '',
  icon,
  iconPosition = 'start',
  error,
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    onInput?.(newValue)
  }

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper iconPosition={iconPosition}>
        {!!icon && <S.Icon>{icon}</S.Icon>}
        <S.Input
          {...props}
          type="text"
          disabled={disabled}
          id={labelFor}
          value={value}
          iconPosition={iconPosition}
          onChange={onChange}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
