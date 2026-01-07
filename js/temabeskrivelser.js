document.addEventListener("DOMContentLoaded", function () {
  const bokse = document.querySelectorAll(".laesmere-boks");

  bokse.forEach(function (boks) {
    const knap = boks.querySelector(".laesmere-knap");
    const indhold = boks.querySelector(".laesmere-indhold");

    knap.addEventListener("click", function () {
      const erSkjult = indhold.hasAttribute("hidden");

      if (erSkjult) {
        indhold.removeAttribute("hidden");
        knap.textContent = "Læs mindre";
      } else {
        indhold.setAttribute("hidden", "");
        knap.textContent = "Læs mere";
      }
    });
  });
});
