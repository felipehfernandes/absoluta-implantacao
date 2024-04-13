function logError(error) {
    console.error(error);
    chrome.runtime.sendMessage({ type: "error", text: error.toString() });
  }
  
  function logInfo(info) {
    console.log(info);
    chrome.runtime.sendMessage({ type: "log", text: info });
  }
  