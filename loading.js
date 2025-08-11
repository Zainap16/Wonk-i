document.addEventListener("DOMContentLoaded", function () {
  let progressElement = document.getElementById("progress");
  let progress = 0;

  let interval = setInterval(function () {
    if (progress < 90) { // stop at 90% until actual load
      progress += 5;
      progressElement.textContent = progress + "%";
    }
  }, 100);

  window.onload = function () {
    // jump to 100% once everything is loaded
    clearInterval(interval);
    progressElement.textContent = "100%";

    // hide loading screen after a short delay
    setTimeout(function () {
      document.getElementById("loading").setAttribute("aria-hidden", "true");
    }, 300);
  };
});
