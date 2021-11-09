const counters = document.querySelectorAll(".counter");
const speed = 350; // The lower the slower

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    // Lower inc to slow and higher to slow
    const inc = Math.floor(target / speed);

    // console.log(inc);
    // console.log(count);

    // Check if target is reached
    if (count < target) {
      // Add inc to count and output in counter
      counter.innerText = count + inc;
      // Call function every ms
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});

function visible() {
  document.getElementById("collection_functionality").style.transition =
    "height 1s";
  document.getElementById("collection_functionality").style.visibility =
    "visible";
  document.getElementById("collection_functionality").style.height = "5em";
  document.getElementById("collection_functionality").style.margin = "2em";
}

function hide() {
  document.getElementById("collection_functionality").style.visibility =
    "hidden";
  document.getElementById("collection_functionality").style.height = "0em";
}
