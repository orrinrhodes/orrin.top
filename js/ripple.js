function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
};

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

function colormode() {
  document.body.classList.toggle("secondary");
  var box = document.querySelector(".controller");
  if (document.body.classList.contains("secondary")) {
    box.textContent = "¡Black!";
  } else {
    box.textContent = "¡Pink!";
  }
};

$(function hover() {
  $('p').hover(function() {
    console.log('lol')
    $('.ripple').css({
      opacity: 0.01
    });
  }, function revert() {
    $('.ripple').css({
      opacity: 1
    });
  });
});


window.addEventListener("click", colormode);
