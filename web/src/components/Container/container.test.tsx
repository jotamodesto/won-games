import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import { Container } from '.'

describe('<Container />', () => {
  it('should render the container', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Won Games</span>
      </Container>
    )

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
      .emotion-0 {
        max-width: 130rem;
        padding-right: calc(3.2rem / 2);
        padding-left: calc(3.2rem / 2);
        margin-right: auto;
        margin-left: auto;
      }

      <div
        class="emotion-0 emotion-1"
      >
        <span>
          Won Games
        </span>
      </div>
    `)
  })
})
