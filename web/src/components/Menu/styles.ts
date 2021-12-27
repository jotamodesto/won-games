import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { down } from 'styled-breakpoints'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.small} 0;
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    width: 2.4rem;
    height: 2.4rem;
    color: ${theme.colors.white};
    cursor: pointer;
  `}
`

export const LogoWrapper = styled.div`
  ${down('md')} {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: flex-end;

    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`

export const MenuNav = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.small};
  `}
`

const hoverAnimation = keyframes`
  from {
    width: 0;
    left: 50%;
  }
  to {
    width: 100%;
    left: 0;
  }
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    margin: 0.3rem ${theme.spacings.small} 0;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
    text-align: center;
    text-decoration: none;

    &:hover {
      &::after {
        position: absolute;
        display: block;
        height: 0.3rem;
        content: '';
        background-color: ${theme.colors.primary};
        animation: ${hoverAnimation} 0.2s forwards;
      }
    }
  `}
`

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

    > span {
      display: block;
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${theme.layers.menu};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    overflow: hidden;
    pointer-events: ${isOpen ? 'all' : 'none'};
    background: ${theme.colors.white};
    opacity: ${isOpen ? 1 : 0};
    transition: opacity 0.3s ease-in-out;

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      width: 2.4rem;
      height: 2.4rem;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      transition: transform 0.3s ease-in-out;
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
    }

    ${MenuNav} {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-left: 0;
    }

    ${MenuLink} {
      margin-bottom: ${theme.spacings.small};
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.black};
      transition: transform 0.3s ease-in-out;
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
    }

    ${RegisterBox} {
      transition: transform 0.3s ease-in-out;
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
    }
  `}
`

export const CreateAccount = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-decoration: none;
    border-bottom: 0.2rem solid ${theme.colors.primary};
  `}
`
