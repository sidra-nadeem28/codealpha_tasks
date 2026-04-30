{var randomNumber = Math.floor(Math.random() * messages.length);
  messageBox.innerHTML = messages[randomNumber];
}

function sendMessage() {
  var name    = document.getElementById("contact-name").value;
  var email   = document.getElementById("contact-email").value;
  var msg     = document.getElementById("contact-msg").value;
  var response = document.getElementById("form-response");

  if (name == "" || email == "" || msg == "") {
    response.style.color = "#ff6b6b";
    response.innerHTML = "⚠️ Please fill in all the fields!";
  } else {
    response.style.color = "#a8ffba";
    response.innerHTML = "✅ Message sent! Thanks, I will reply soon!";

    document.getElementById("contact-name").value  = "";
    document.getElementById("contact-email").value = "";
    document.getElementById("contact-msg").value   = "";
  }
}

document.querySelectorAll("#nav-links a").forEach(function(link) {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    var targetId = this.getAttribute("href").replace("#", "");
    var targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

window.addEventListener("scroll", function() {
  var sections = ["home", "about", "projects", "contact"];
  var navLinks = document.querySelectorAll("#nav-links a");
  var scrollPos = window.scrollY + 100;

  sections.forEach(function(id, i) {
    var section = document.getElementById(id);
    if (section) {
      if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        navLinks.forEach(function(link) { link.style.color = "white"; });
        navLinks[i].style.color = "#e040fb";
      }
    }
  });
});

var barsAnimated = false;

window.addEventListener("scroll", function() {
  var aboutSection = document.getElementById("about");
  if (!aboutSection) return;

  var sectionTop = aboutSection.getBoundingClientRect().top;
  if (sectionTop < window.innerHeight - 100 && !barsAnimated) {
    barsAnimated = true;

    var bars = document.querySelectorAll(".bar-fill");
    bars.forEach(function(bar) {
      var targetWidth = bar.style.width;
      bar.style.width = "0%";
      setTimeout(function() {
        bar.style.transition = "width 1.2s ease";
        bar.style.width = targetWidth;
      }, 200);
    });
  }
});