const passwordBox = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const toast = document.getElementById("toast");

const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]<>?/";

/* Generate Password */
generateBtn.addEventListener("click", () => {

  let password = "";
  let length = 12;

  for(let i = 0; i < length; i++){

    let random = Math.floor(Math.random() * chars.length);

    password += chars[random];

  }

  passwordBox.value = password;

});


/* Copy Password */
copyBtn.addEventListener("click", () => {

  if(passwordBox.value === ""){
    alert("Generate password first!");
    return;
  }

  passwordBox.select();
  document.execCommand("copy");

  showToast();

});


/* Toast Function */
function showToast(){

  toast.style.display = "block";

  setTimeout(() => {

    toast.style.display = "none";

  }, 2000);

}