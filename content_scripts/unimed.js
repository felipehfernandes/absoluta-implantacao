(function() {
    function login() {
      try {
        const usernameXPath = '/html/body/div[1]/div[3]/main/div/div[4]/div[1]/div[1]/form/div[1]/input';
        const passwordXPath = '/html/body/div[1]/div[3]/main/div/div[4]/div[1]/div[1]/form/div[2]/div/input';
        const loginButtonXPath = '/html/body/div[1]/div[3]/main/div/div[4]/div[1]/div[1]/form/a';
  
        const usernameField = document.evaluate(usernameXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        const passwordField = document.evaluate(passwordXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        const loginButton = document.evaluate(loginButtonXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  
        if (!usernameField || !passwordField || !loginButton) {
          throw new Error("One or more required elements are missing on the page.");
        }
  
        usernameField.value = '394803238699456366000144';
        passwordField.value = 'Abs@2023Saude#';
        loginButton.click();
  
        console.log("Login attempt for Unimed executed successfully.");
      } catch (error) {
        console.error("Login script failed:", error);
        chrome.runtime.sendMessage({type: "error", text: error.toString()});
      }
    }
  
    document.addEventListener('DOMContentLoaded', login);
  })();
  