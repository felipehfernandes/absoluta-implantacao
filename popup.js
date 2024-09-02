document.getElementById('clickButton').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: clickButtonUnimed
      });
    });
  });
  
  function clickButtonUnimed() {
    var botaoUnimed = document.querySelector('div#meus-seguros-unicos button');
    if (botaoUnimed) {
      botaoUnimed.click();
    }
  }
  