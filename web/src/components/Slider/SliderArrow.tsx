import type { CustomArrowProps } from 'react-slick'

const SliderArrow = ({
  currentSlide,
  slideCount,
  element,
  ...props
}: { element: React.ReactNode } & CustomArrowProps) => {
  return (
    <span {...props} role="button" aria-hidden="true">
      {element}
    </span>
  )
}

export default SliderArrow
