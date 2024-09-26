chrome.runtime.onInstalled.addListener(details => {
  if (details.reason === 'install') {
    chrome.tabs.create({ url: chrome.i18n.getMessage('tutorial') })
  }
})

chrome.sidePanel.setPanelBehavior({
  openPanelOnActionClick: true
})

chrome.action.onClicked.addListener(() => {
  chrome.sidePanel.setOptions({
    path: '/sidepanel.html'
  })
})
