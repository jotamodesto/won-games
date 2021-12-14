import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render the game card', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument()

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render default price', () => {
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText(props.price)

    expect(price).not.toHaveStyle({
      'text-decoration': 'line-through'
    })

    expect(price).toHaveStyle({
      'background-color': '#3CD3C1'
    })
  })

  it('should render promotional price', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 210,00" />)

    expect(screen.getByText(props.price)).toHaveStyle({
      'text-decoration': 'line-through'
    })

    expect(screen.getByText('R$ 210,00')).not.toHaveStyle({
      'text-decoration': 'line-through'
    })
  })

  it('should render filled favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should trigger onFav method when faverit is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should render ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )

    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
    expect(ribbon).toBeInTheDocument()
  })
})
