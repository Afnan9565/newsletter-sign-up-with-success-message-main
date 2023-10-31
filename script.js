// Defining variables
const submit = document.querySelector("#submit");
const dismiss = document.querySelector("#dismiss");
const reaction = document.querySelector(".reaction");
const action = document.querySelector("#action");

dismiss.addEventListener('click', function() {
   reaction.classList.add("hide");
   action.classList.remove("hide")
});
