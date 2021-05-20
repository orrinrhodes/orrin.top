function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
};

//Ripple Event Handler
async function drawRipple(ev) {
    var x = ev.clientX;
    var y = ev.clientY;
    var node = document.querySelector(".ripple");
    var clone = node.cloneNode(true);
    clone.classList.add("animate");
    clone.style.left = ev.clientX - 5 + "px";
    clone.style.top = ev.clientY - 5 + "px";
    node.after(clone);
    await sleep(250)
    clone.remove();
};

window.addEventListener("mousemove", drawRipple);

//Control Handler
function controlHandler() {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    controller.textContent = "Dark Ripple";
  } else {
    controller.textContent = "Bright Ripple";
  }
};

// Control Trigger
var controller = document.querySelector(".controller");
window.addEventListener("click", controlHandler);