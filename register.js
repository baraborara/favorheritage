const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Account berhasil dibuat!");

    window.location.href = "../login/index.html";

});
