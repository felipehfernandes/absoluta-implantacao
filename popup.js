document.getElementById('activateUnimed').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        files: ['content_scripts/unimed.js']
      });
    });
  });
  