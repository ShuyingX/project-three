// Define options
var options = {
  root: document.querySelector(".slides"),
  threshold: 0.8,
};

// Define what we do when things intersect or don't
var callback = (entries, observer) => {
  entries.forEach((entry) => {
    // Handle if the entry is intersecting or not
    if (entry.isIntersecting) {
      // Do this if its intersecting
      // add the active class to the right dot
      if (entry.target.id === "slide-2") {
        console.log("Do the animation");
        document.querySelector("#setup").classList.add("active");
      } else {
        console.log("Reverse the animation");
        document.querySelector("#setup").classList.remove("active");
      }

      if (entry.target.id === "slide-3") {
        console.log("Do the animation");
        document.querySelector("#setup1").classList.add("active");
      } else {
        console.log("Reverse the animation");
        document.querySelector("#setup1").classList.remove("active");
      }

      if (entry.target.id === "slide-4") {
        console.log("Do the animation");
        document.querySelector("#setup2").classList.add("active");
      } else {
        console.log("Reverse the animation");
        document.querySelector("#setup2").classList.remove("active");
      }

      if (entry.target.id === "slide-5") {
        console.log("Do the animation");
        document.querySelector("#setup3").classList.add("active");
      } else {
        console.log("Reverse the animation");
        document.querySelector("#setup3").classList.remove("active");
      }

      if (entry.target.id === "slide-6") {
        console.log("Do the animation");
        document.querySelector("#setup4").classList.add("active");
      } else {
        console.log("Reverse the animation");
        document.querySelector("#setup4").classList.remove("active");
      }

      if (entry.target.id === "slide-7") {
        console.log("Do the animation");
        document.querySelector("#setup5").classList.add("active");
      } else {
        console.log("Reverse the animation");
        document.querySelector("#setup5").classList.remove("active");
      }

      if (entry.target.id === "slide-8") {
        console.log("Do the animation");
        document.querySelector("#setup6").classList.add("active");
      } else {
        console.log("Reverse the animation");
        document.querySelector("#setup6").classList.remove("active");
      }

      if (entry.target.id === "slide-9") {
        console.log("Do the animation");
        document.querySelector("#setup7").classList.add("active");
      } else {
        console.log("Reverse the animation");
        document.querySelector("#setup7").classList.remove("active");
      }

      var id = entry.target.id.replace("slide", "dot");
      var dot = document.getElementById(id);

      dot.classList.add("active");
    } else {
      // Do this if its not
      // remove the active class from any other dot

      var id = entry.target.id.replace("slide", "dot");
      var dot = document.getElementById(id);

      dot.classList.remove("active");
    }
  });
};

// Setup observer
var observer = new IntersectionObserver(callback, options);

// Tell the observer what to look for
var targets = document.querySelectorAll(".slides > div");

targets.forEach((target) => {
  observer.observe(target);
});

// slide 1
function typeEffect(element, speed) {
  var text = element.innerHTML;
  element.innerHTML = "";

  var i = 0;
  var timer = setInterval(function () {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

// application
var speed = 85;
var h1 = document.querySelector("h1");
var p = document.querySelector("p");
var delay = h1.innerHTML.length * speed + speed;

// type affect to header
typeEffect(h1, speed);

// type affect to body
setTimeout(function () {
  p.style.display = "inline-block";
  typeEffect(p, speed);
}, delay);

// drag and drop
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.currentTarget.innerHTML = "";
  // console.log(ev.target, ev.currentTarget);
  ev.currentTarget.appendChild(document.getElementById(data));
}
