
# Inflation predictions website

Studying project on Single-Page Applications and Client-Side Routing using React. 

Its initially loaded HTML is set to a minimum amount, with all of its content being further dynamically rendered as user-chosen states change.

## About its content

As detailed on the app About page, the content presented on the website consists in an evaluation of models of both of Brazil’s main inflation indexes. 

The entire report, with a still partial translation to English, along with the R scripts developed for the task, is available for download inside a zip file.

One can download the *inflation_predictions_files.zip* either directly from this repo or by running locally the application, as further explained, and by clicking on the “Download” button from the top menu.

## Local setup instructions

To run the page locally, follow these steps:

* Ensure Node.js and npm are installed on your system.

* Clone this repo to your computer:

  ``` git clone https://github.com/tomazlanza/inflation-predictions ```

* Navigate to the project folder and install the required dependencies:

  ``` cd inflation-predictions ```

  ``` npm install ```

* Run locally the app using its Vite dev dependency:

  ``` npm run dev ```

Then, access the app at **localhost:5173** in a browser - _as a default address, but one should change the 5173 port reference accordingly to which one is being used_.

## Technical evaluation of the project

Below is an assessment on technical aspects of the project.

### Pros

As a Single-Page Application, the page minimizes the need for additional server requests after the initial loading of the compiled JS bundle. This approach can enhance user experience by reducing page load times and improving responsiveness.

### Cons

However, there is a risk that the page may not be effectively indexed by search engines if the compiled JS bundle fails to load quickly.

Since the HTML content is generated dynamically post-load, search engines may not accurately capture the page content, potentially affecting its visibility in search results.

One way to mitigate this issue is to ensure other good Search Engine Optimization (SEO) practices, such as using meaningful HTML elements and meta tags whenever possible.
