if (document.documentElement.classList.contains('dark')) {
    toggleFavicon('light', 'dark')
}

const toggleColorSchemeButton = document.querySelector(
    'button.js-toggle-color-scheme'
)

toggleColorSchemeButton.addEventListener(
    'click',
    toggleColorSchemeButtonClickListener
)

function toggleColorSchemeButtonClickListener(event) {
    const rootHtml = document.documentElement
    if (rootHtml.classList.contains('dark')) {
        rootHtml.classList.remove('dark')
        rootHtml.classList.remove('bg-stone-800')
        rootHtml.classList.add('bg-stone-100')
        toggleFavicon('dark', 'light')
        localStorage.theme = 'light'
    } else {
        rootHtml.classList.remove('bg-stone-100')
        rootHtml.classList.add('dark')
        rootHtml.classList.add('bg-stone-800')
        toggleFavicon('light', 'dark')
        localStorage.theme = 'dark'
    }
}

function toggleFavicon(pattern, replacement) {
    const links = document.querySelectorAll('head > link')
    for (const link of links) {
        if (link.href.includes('favicon')) {
            link.href = link.href.replace(pattern, replacement)
        }
    }
}
