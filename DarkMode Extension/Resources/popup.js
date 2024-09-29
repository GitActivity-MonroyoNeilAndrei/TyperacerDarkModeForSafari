let darkModeEnabled = false;

document.getElementById('toggle-dark-mode').addEventListener('click', () => {
    darkModeEnabled = !darkModeEnabled;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { enableDarkMode: darkModeEnabled });
    });
});
