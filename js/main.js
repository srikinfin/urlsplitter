console.log("Hi");

var urlinput = document.getElementById("url_field");

urlinput.addEventListener("input", function(evt) {
  if (this.value) {
    // console.log(this.value);

    this.classList.add("bg-gray");
    this.classList.add("p-1");
  } else {
    this.classList.remove("p-1");
    this.classList.remove("bg-gray");
    // console.log();
  }
});
