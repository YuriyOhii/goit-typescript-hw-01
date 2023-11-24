import { concat } from "./concatination";

const refs = {
  input: document.querySelector("input")!,
  button: document.querySelector("button"),
};

if (refs.button && refs.input)
  refs.button.addEventListener("click", () => {
    concat("Hello!", refs.input.value);
  });
