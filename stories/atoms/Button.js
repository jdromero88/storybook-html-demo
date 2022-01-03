import "./Button.css";
// import Icons from "../assets/icons/icons.svg";

export const createButton = ({
  size,
  disabled = false,
  style = "filled",
  label,
  onClick,
  leadingIcon = false,
  trailingIcon = false,
}) => {
  const btn = document.createElement("button");

  btn.type = "button";
  btn.disabled = !disabled ? disabled : disabled;
  btn.addEventListener("click", onClick);

  // TODO: add actual icons
  leadingIcon ? addLeadingIcon(btn, label) : (btn.innerText = label);
  trailingIcon ? addTrailingIcon(btn) : btn;

  btn.className = ["btn", `btn--${style}`, `btn--${size}`].join(" ");

  return btn;
};

function addLeadingIcon(btn, label) {
  console.log(Icons);
  const lIcon = document.createElement("svg");
  lIcon.classList.add("icon");
  lIcon.innerText = "<-";
  btn.append(lIcon, label);
  return btn;
}

function addTrailingIcon(btn) {
  const tIcon = document.createElement("svg");
  tIcon.classList.add("icon");
  tIcon.innerText = "->";
  btn.append(tIcon);
  return btn;
}
