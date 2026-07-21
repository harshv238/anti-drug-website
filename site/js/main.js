// ClearHead Bangalore — shared behavior. No external dependencies.

document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
      var expanded = links.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
  }

  // Highlight current page in nav
  var here = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    var target = a.getAttribute("href");
    if (target === here || (here === "" && target === "index.html")) {
      a.classList.add("active");
    }
  });

  // Myth/fact flip cards
  document.querySelectorAll(".flip-card").forEach(function (card) {
    card.addEventListener("click", function () {
      card.classList.toggle("flipped");
    });
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.classList.toggle("flipped");
      }
    });
  });

  // Static pledge form — no backend; confirms locally and points to a mailto fallback.
  var form = document.getElementById("pledge-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("pledge-name").value.trim();
      var status = document.getElementById("pledge-status");
      if (!name) {
        status.textContent = "Please enter your name to take the pledge.";
        status.style.color = "#c0392b";
        return;
      }
      status.textContent = "Thanks, " + name + " — your pledge is noted on this device. " +
        "(This form has no backend yet; see the Get Involved page for how to actually submit it.)";
      status.style.color = "#0f766e";
      form.reset();
    });
  }
});
