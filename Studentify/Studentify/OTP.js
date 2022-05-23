
const otp_form = document.getElementById("otp_form");
const otp = document.getElementById("OTP");
const loginErrorMsg = document.getElementById("login-error-msg");

otp.addEventListener("click", (e) => {
    e.preventDefault();
    const number = otp_form.number.value;

    if (number === "4217") {
        window.location = "dashboard.html"; // Redirecting to other page.
    } else {
        alert("Invalid Credentials");
    }
})