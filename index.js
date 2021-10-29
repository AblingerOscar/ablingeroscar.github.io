(function() {
    window.addEventListener('load', function() {
        let aLinkIsFocused = false
        let hoveringColor = undefined

        const links = document.querySelector('.links')
        const wrapper = document.querySelector('.wrapper')

        ;['github', 'blog', 'linkedin', 'twitter'].forEach(link => {
            const el = links.getElementsByClassName(link)[0].getElementsByTagName('a')[0]

            el.addEventListener('mouseenter', function() {
                hoveringColor = link
                if (!aLinkIsFocused) {
                    wrapper.dataset.selectedLink = link
                }
            })
            el.addEventListener('mouseleave', function() {
                hoveringColor = undefined
                if (!aLinkIsFocused) {
                    delete wrapper.dataset.selectedLink
                }
            })

            el.addEventListener('focusin', function() {
                aLinkIsFocused = true
                wrapper.dataset.selectedLink = link
            })
            el.addEventListener('focusout', function() {
                aLinkIsFocused = false
                if (hoveringColor) {
                    wrapper.dataset.selectedLink = hoveringColor
                } else {
                    delete wrapper.dataset.selectedLink
                }
            })
        });
    })
})()