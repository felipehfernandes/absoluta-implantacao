chrome.runtime.onInstalled.addListener(() => {
    console.log("Extensão de automação de login instalada.");
  });
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "log") {
      console.log("LOG:", message.text);
    } else if (message.type === "error") {
      console.error("ERROR:", message.text);
    }
    sendResponse({ status: "success" });
  });
  