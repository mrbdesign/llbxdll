# Contact Form Project

This is a simple contact form web page.

## Project Overview

The contact form allows users to input their name, email, and a message, and submit the form. The form uses EmailJS to send the form data to a specified email address.

## Project Structure

-   **index.html:** Main HTML file containing the structure of the contact form page.
-   **style.css:** External CSS file for styling the contact form and the page layout.
-   **script.js:** External JavaScript file for handling form submission using EmailJS.
-   **assets/:** Contains image assets such as favicons and social media icons.
    -   **favicon-dark.webp and favicon-light.webp:** Dark and light mode favicons, respectively.
    -   **og-image.jpg and og-image.webp:** Open Graph images for social sharing.
    -   **footer.png:** Footer logo image.
    -   **x-icon.png:** X/Twitter social media icon.
    -   **discord-icon.png:** Discord social media icon.
-   **LICENSE:** License file.
-   **README.md:** Project documentation.

## How to Run

1.  Clone the repository to your local machine.

    ```bash
    git clone <YOUR_REPOSITORY_URL>
    ```

    Replace `<YOUR_REPOSITORY_URL>` with the actual URL of your repository.

2.  Open the `index.html` file in your web browser.

## EmailJS Integration

This project uses [EmailJS](https://www.emailjs.com/) to handle form submissions. To use EmailJS, you will need to:

1.  Sign up for an EmailJS account.
2.  Create a service and template in EmailJS.
3.  Update the `script.js` file with your EmailJS service ID, template ID, and public key.

## License

This project is licensed under the [MIT License](LICENSE).
