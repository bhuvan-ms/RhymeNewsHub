document.addEventListener("DOMContentLoaded", function() {
  const fetchDataButton = document.getElementById("fetchDataButton");
  const headlineInput = document.getElementById("headlineInput");
  const resultDisplay = document.getElementById("resultDisplay");

  fetchDataButton.addEventListener("click", async () => {
    try {
      const headline = headlineInput.value;
      if (!headline) {
        resultDisplay.innerText = 'Please enter a headline.';
        return;
      }
      //firebase function API route
      const response = await fetch(`https://<REGION>-<PROJECT_ID>.cloudfunctions.net/<FUNCTION_NAME>?headline=${encodeURIComponent(headline)}`);
      const data = await response.json();
      resultDisplay.innerText = JSON.stringify(data, null, 2);
    } catch (error) {
      console.error('Error fetching data:', error);
      resultDisplay.innerText = 'Error fetching data';
    }
  });
});