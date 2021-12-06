import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: React.ReactNode
  as?: React.ElementType
} & ButtonTypes

const Button = ({
  children,
  icon,
  size = 'medium',
  fullWidth = false,
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
      {icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  )
}

export default Button
