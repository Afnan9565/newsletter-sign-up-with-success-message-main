// Defining variables
// const submit = document.querySelector("#submit");
const dismiss = document.querySelector("#dismiss");
const reaction = document.querySelector(".reaction");
const action = document.querySelector("#action");
const invalidEmailEl = document.querySelector("#invalid-email");
const emailInput = document.querySelector("#email");
const userEmailEl = document.querySelector("#user-email");
const submitBtnEl = document.querySelector("#submit");

dismiss.addEventListener("click", function () {
  reaction.classList.add("hide");
  action.classList.remove("hide");
});
// .show = .active
submitBtnEl.addEventListener("click", function () {
   reaction.classList.remove("hide");
   action.classList.add("hide");
 });
 