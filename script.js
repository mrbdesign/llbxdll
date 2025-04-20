// Initialize EmailJS with your Public Key
emailjs.init("6U7D2I9QkVCCNf_9k"); // Replace "YOUR_PUBLIC_KEY" with your actual Public Key
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("form-status");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        // Send the form data via EmailJS
        emailjs.sendForm(
            "service_xk3nfr8", // Replace with your Service ID
            "template_stl5b6g", // Replace with your Template ID
            this // Pass the form element directly
        ).then(() => {
            status.textContent = "Message sent successfully!";
            status.style.color = "green";
            form.reset(); // Reset the form fields
        }).catch((error) => {
            console.error("Failed to send message:", error);
            status.textContent = "Failed to send message. Please try again.";
            status.style.color = "red";
        });
    });
});
