import { createButton } from "../atoms/Button";
import './ButtonGroup.css'
export const createButtonGroup = ({
  quantity = 3,
  style,
  size,
  leadingIcon,
  trailingIcon,
}) => {
  const btnContainer = document.createElement('div')
  const btns = []
  for (let index = 0; index < quantity; index++) {
    const button = createButton({
      label: 'Button Group',
      style: style,
      size: size,
      disabled: false,
      leadingIcon: leadingIcon,
      trailingIcon: trailingIcon,
    })
    btns.push(button)
  }
  btns.forEach(btn => {
    btnContainer.append(btn)
  });
  return btnContainer
}