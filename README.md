# RhymeNewsHub

Chrome extension to transform headlines into mini rhymes.

## Stack Used

Firebase, Firebase Functions, HTML, JavaScript

## Task

Build a Chrome extension that takes headlines from a news source and converts them into mini rhymes.

## Steps Taken to Complete

1. Built a Chrome extension and learned how to work with the OpenAI API.
2. Secured the API key by using Firebase Functions to handle the fetch logic. This is crucial as Chrome extension source code can be easily accessed by end-users.
3. Initially planned to fetch all headlines from the URL 'https://www.foxnews.com/media/*' using URL pattern matching.
4. Revised the approach and gave users the option to copy and paste the code themselves for better flexibility.
5. User's input is sent to Firebase Functions, which utilizes the `node-fetch` library to fetch data from the specified URL.
6. The response from Firebase Functions is sent back to the Chrome extension and displayed to the end user.
