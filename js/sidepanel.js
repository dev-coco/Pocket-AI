const iframe = document.querySelector('iframe')
const url = document.querySelector('#url')
const li = document.querySelectorAll('li > a')

// 默认清单
const init = {
  ChatGPT: 'https://chatgpt.com/',
  Claude: 'https://claude.ai/',
  'Bing AI': 'https://www.bing.com/chat',
  'Duck AI': 'https://duck.ai/',
  Gemini: 'https://gemini.google.com/app',
  Poe: 'https://poe.com/'
}

// 初始化
chrome.storage.local.get(null, config => {
  const link = config.link || 'https://duck.ai'
  iframe.src = link
  url.value = link
})

// 监听菜单点击事件
li.forEach(item => {
  item.addEventListener('click', () => {
    const link = init[item.outerText]
    if (link) {
      iframe.src = link
      url.value = link
      chrome.storage.local.set({ link })
    }
  })
})

// 自定义链接
url.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    event.preventDefault()
    iframe.src = url.value
    chrome.storage.local.set({ link: url.value })
  }
})
