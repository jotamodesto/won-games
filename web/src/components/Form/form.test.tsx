import { renderWithTheme } from 'utils/tests/helpers'

import { FormLink, FormWrapper } from '.'

describe('<Form />', () => {
  it('should render the form wrapper', () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        <FormLink>
          <a href="#">My link</a>
        </FormLink>
      </FormWrapper>
    )

    expect(container.parentElement).toMatchInlineSnapshot(`
      .emotion-0 .e1iiv4hj0 {
        margin: 0.8rem 0;
      }

      .emotion-0 .e1dtc9em0 {
        margin: 3.2rem auto 1.6rem;
      }

      .emotion-2 {
        font-size: 1.4rem;
        color: #030517;
        text-align: center;
      }

      .emotion-2 a {
        color: #3CD3C1;
        -webkit-text-decoration: none;
        text-decoration: none;
        border-bottom: 0.1rem solid #3CD3C1;
        -webkit-transition: color,border,0.1s ease-in-out;
        transition: color,border,0.1s ease-in-out;
      }

      .emotion-2 a:hover {
        color: #29b3a3;
        border-bottom: 0.1rem solid #29b3a3;
      }

      <body>
        <div>
          <div
            class="emotion-0 emotion-1"
          >
            <div
              class="emotion-2 emotion-3"
            >
              <a
                href="#"
              >
                My link
              </a>
            </div>
          </div>
        </div>
      </body>
    `)
  })
})
