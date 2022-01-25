import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { down } from 'styled-breakpoints'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .slick-prev,
    .slick-next {
      position: absolute;
      top: 50%;
      display: block;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      color: ${theme.colors.white};
      cursor: pointer;
      transform: translate(0, -50%);
    }

    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }

    .slick-next {
      right: -${theme.spacings.xxlarge};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }

    .slick-slide > div {
      margin: 0 ${theme.spacings.xsmall};
      cursor: pointer;
    }

    .slick-list {
      margin: 0 -${theme.spacings.xsmall};
    }

    ${down('lg')({ theme })} {
      overflow-x: hidden;
    }
  `}
`
type ModalProps = { isOpen: boolean }

const modalModifiers = {
  open: () => css`
    opacity: 1;
  `,
  close: () => css`
    pointer-events: none;
    opacity: 0;
  `
}

export const Modal = styled.div<ModalProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${theme.layers.modal};
    display: flex;
    align-items: enter;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    transition: opacity ${theme.transition.default};

    ${isOpen ? modalModifiers.open() : modalModifiers.close()}
  `}
`

export const Close = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: ${theme.colors.white};
    text-align: right;
    cursor: pointer;
  `}
`

export const Content = styled.div`
  max-width: min(120rem, 120rem);
  max-height: 80rem;
`
