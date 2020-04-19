const button = document.querySelector("button")!;

function clickhandler(message: string) {
  console.log("Clicked! " + message);
}

if (button) {
  button.addEventListener("click", clickhandler.bind(null, 'You\'re welcome!'));
}
