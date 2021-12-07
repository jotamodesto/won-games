import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    renderWithTheme(<Ribbon>Best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toBeInTheDocument()
  })

  it('should render with primary color', () => {
    renderWithTheme(<Ribbon>Best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      'background-color': '#F231A5'
    })
  })

  it('should render with secondary color', () => {
    renderWithTheme(<Ribbon color="secondary">Best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      'background-color': '#3CD3C1'
    })
  })

  it('should render with normal size', () => {
    renderWithTheme(<Ribbon>Best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '3.6rem',
      'font-size': '1.4rem'
    })
  })

  it('should render with small size', () => {
    renderWithTheme(<Ribbon size="small">Best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '2.6rem',
      'font-size': '1.2rem'
    })
  })
})
