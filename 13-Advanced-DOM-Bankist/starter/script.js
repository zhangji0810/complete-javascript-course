"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//////////////
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector(".header");
// // // const allSections = document.querySelectorAll(".section");
// // // console.log(allSections);

// // // document.getElementById("section--1");
// // // const allButtons = document.getElementsByTagName("button");
// // // console.log(allButtons);

// const message = document.createElement("div");
// message.classList.add("cookie-message");
// // message.textContent =
// //   "We use cookied for improved functionality and analytics.";
// message.innerHTML =
//   "We use cookied for improved functionality and analytics. <button class='btn btn--close--cookie'>Got it!</button>";

// header.prepend(message);
// // // header.append(message.cloneNode(true));

// // // header.before(message.cloneNode(true));
// // // header.after(message.cloneNode(true));
// document.querySelector(".btn--close--cookie").addEventListener("click", () => {
//   message.remove();
// });

// message.style.backgroundColor = "#37383d";
// message.style.width = "120%";

// console.log(message.style.color);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 40 + "px";
// console.log(getComputedStyle(message).height);

// document.documentElement.style.setProperty("--color-primary", "orangered");

// const logo = document.querySelector(".nav__logo");
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = "Beautiful minimalist logo";
// console.log(logo.alt);

// console.log(logo.getAttribute("designer"));
// const company = logo.setAttribute("company", "Bankist");
// console.log(logo.getAttribute("company"));

// console.log(logo.dataset.versionNumber);

const btnSrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnSrollTo.addEventListener("click", (e) => {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());

  console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset);

  console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: "smooth",
  });

  section1.scrollIntoView({ behavior: "smooth" });
});
