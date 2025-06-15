export function parseHtmlErrors(html) {
    const errors = []

    // Check for unclosed tags (simplified)
    const tagStack = []
    const lines = html.split('\n')

    lines.forEach((line, lineIndex) => {
        const tagMatches = line.match(/<(\/?)([a-zA-Z][a-zA-Z0-9]*)/g)

        if (tagMatches) {
            tagMatches.forEach(match => {
                const isClosing = match.startsWith('</')
                const tagName = match.replace(/<\/?/, '')

                if (!isClosing) {
                    tagStack.push({ tag: tagName, line: lineIndex + 1 })
                } else {
                    const lastOpenedTag = tagStack.pop()
                    if (!lastOpenedTag || lastOpenedTag.tag !== tagName) {
                        errors.push({
                            message: `Mismatched tag: ${match}`,
                            line: lineIndex + 1
                        })
                    }
                }
            })
        }
    })

    // Check for any unclosed tags
    tagStack.forEach(unclosedTag => {
        errors.push({
            message: `Unclosed tag: <${unclosedTag.tag}>`,
            line: unclosedTag.line
        })
    })

    return errors
}