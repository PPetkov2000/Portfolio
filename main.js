const navbar = document.getElementById("navbar");
const menuIcon = document.getElementById("menu-icon");
const navbarList = document.getElementById("navbar-list");
const contactForm = document.getElementById("contact-form");

menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("transform");
  navbar.classList.toggle("show");
});

navbarList.addEventListener("click", function (e) {
  menuIcon.classList.remove("transform");
  navbar.classList.toggle("show");
});

contactForm.addEventListener("submit", () => {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  if (name == null || email == null || subject == null || message == null) {
    throw new Error("Missing contact form elements");
  }

  if (!name.value || !email.value || !subject.value || !message.value) return;
});
