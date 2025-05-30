// Selecting form and input elements
const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-toggle-btn");

// Function to display error messages
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}

// Function to handle form submission
const handleFormData = (e) => {
    e.preventDefault();

    // Retrieving input elements
    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const dateInput = document.getElementById("date");
    const genderInput = document.getElementById("gender");
   
    // Getting trimmed values from input fields
    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const password = passwordInput.value.trim();
    const date = dateInput.value;
    const gender = genderInput.value;

    // Regular expression pattern for email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const phonePattern = /^[0-9]{10,15}$/;

    // Clearing previous error messages
    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());
    
    // Valid email check function
    function isValidEmail(email) {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
    return emailPattern.test(email);
    }
    
    // Function to check valid phone number (Vietnam: 03,05,07,08,09 + 8 digits) 
    function isValidPhone(phone) {
    const phonePattern = /^(03|05|07|08|09)[0-9]{8}$/;
    return phonePattern.test(phone);
    }
    
    // Password strength check function 
    function isValidPassword(password) {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return passwordPattern.test(password);
    }

    // Performing validation checks (Kiểm tra xác thực)
    if (fullname === "") {
        showError(fullnameInput, "Enter your full name");
    }
    /*if (!emailPattern.test(email)) {
        showError(emailInput, "Enter a valid email address");
    }
    if (!phonePattern.test(phone)) {
        showError(phoneInput, "Enter a valid phone number (10-15 digits)");
    }
    if (password === "") {
        showError(passwordInput, "Enter your password");
    }  */
    if (!isValidEmail(email)) {
        showError(emailInput, "Enter a valid email address");
    }
    if (!isValidPhone(phone)) {
        showError(phoneInput, "Enter a valid Vietnamese phone number");
    }
    if (!isValidPassword(password)) {
        showError(passwordInput, "Password must be at least 8 characters and include uppercase, lowercase, number, and special character");
    }
    if (date === "") {
        showError(dateInput, "Select your date of birth");
    }
    if (gender === "") {
        showError(genderInput, "Select your gender");
    }

    // Checking for any remaining errors before form submission (Kiểm tra bất kỳ lỗi nào còn lại trước khi gửi form)
    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;
    
    // Submitting the form (Gửi form)
    form.submit();
}
// Toggling password visibility
passToggleBtn.addEventListener('click', () => {
    passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

// Handling form submission event
form.addEventListener("submit", handleFormData);