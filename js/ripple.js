function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
};

//Ripple Event Handler
var drawRipple = async function(ev) {
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

//Ripple Triggers
async function wait(x){
    i=1;
    while (true) {
        i++;
        await sleep(x);
        console.log(i)
        if(i % 2 == 0) {
            console.log('yea')
            
        };
    };
};


wait(500);
window.addEventListener("mousemove", drawRipple);

//Control Handler
var controlHandler = function() {
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