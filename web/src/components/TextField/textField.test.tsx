import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Email } from '@emotion-icons/material-outlined/Email'

import { renderWithTheme } from 'utils/tests/helpers'
import TextField from '.'

describe('<TextField />', () => {
  it('should render with Label', () => {
    renderWithTheme(<TextField label="Label" labelFor="field" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('should render without Label', () => {
    renderWithTheme(<TextField />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    renderWithTheme(<TextField placeholder="input here" />)

    expect(screen.getByPlaceholderText('input here')).toBeInTheDocument()
  })

  it('should render with icon', () => {
    renderWithTheme(<TextField icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should position the icon to the right', () => {
    renderWithTheme(<TextField icon={<Email />} iconPosition="end" />)

    const inputWrapper = screen.getByRole('textbox').parentElement

    expect(inputWrapper).toHaveStyle({ flexDirection: 'row-reverse' })
  })

  it('should render the input disabled', async () => {
    const onInput = jest.fn()
    renderWithTheme(<TextField disabled label="Label" onInput={onInput} />)

    const input = screen.getByRole('textbox')
    const text = 'Input value'

    expect(input).toBeDisabled()

    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onInput).not.toHaveBeenCalled()

    expect(screen.getByText('Label')).toHaveStyle({ color: '#8F8F8F' })
  })

  it('shoudl render the input with error', () => {
    renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        error="Error"
        icon={<Email data-testid="icon" />}
      />
    )

    const inputWrapper = screen.getByRole('textbox').parentElement
    const errorColor = '#FF6347'

    expect(screen.getByText('Error')).toBeInTheDocument()
    expect(screen.getByText('TextField')).toHaveStyle({ color: errorColor })
    expect(screen.getByTestId('icon').parentElement).toHaveStyle({
      color: errorColor
    })
    expect(inputWrapper).toHaveStyle({ borderColor: errorColor })
  })

  it('should change value when typing', async () => {
    const onInput = jest.fn()

    renderWithTheme(
      <TextField label="TextField" labelFor="field" onInput={onInput} />
    )

    const input = screen.getByRole('textbox')
    const text = 'Typed text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('should be accessible by tab', () => {
    renderWithTheme(<TextField label="TextField" labelFor="field" />)

    const input = screen.getByRole('textbox')

    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })
})
