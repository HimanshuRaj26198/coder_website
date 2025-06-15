export function htmlToJsx(html) {
    const errors = []

    if (!html.trim()) {
        return { result: '', errors }
    }

    try {
        // Basic HTML to JSX conversion
        let result = html
            // Replace class with className
            .replace(/class=/g, 'className=')
            // Replace for with htmlFor
            .replace(/for=/g, 'htmlFor=')
            // Replace inline event handlers
            .replace(/on([a-z]+)="([^"]*)"/g, (match, event, handler) => {
                const reactEvent = `on${event.charAt(0).toUpperCase()}${event.slice(1)}`
                return `${reactEvent}={${handler.includes('(') ? handler : `() => ${handler}`}}`
            })
            // Replace style attributes
            .replace(/style="([^"]*)"/g, (match, styles) => {
                try {
                    const jsxStyles = styles.split(';')
                        .filter(style => style.trim())
                        .map(style => {
                            const [property, value] = style.split(':').map(s => s.trim())
                            if (!property || !value) {
                                throw new Error(`Invalid style: ${style}`)
                            }
                            const jsxProperty = property.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
                            return `${jsxProperty}: '${value}'`
                        })
                        .join(', ')
                    return `style={{ ${jsxStyles} }}`
                } catch (error) {
                    errors.push({
                        message: error.message,
                        line: getLineNumber(html, match)
                    })
                    return match
                }
            })
            // Self-closing tags
            .replace(/<(\w+)([^>]*)\s*\/>/g, '<$1$2 />')
            // Convert boolean attributes
            .replace(/(\w+)=""/g, '$1={true}')

        // Format the JSX with proper indentation and line breaks
        result = beautifyJSX(result)

        return { result, errors }
    } catch (error) {
        errors.push({
            message: error.message,
            line: 0
        })
        return { result: '', errors }
    }
}

function beautifyJSX(jsx) {
    let indent = 0
    let formatted = ''
    const lines = jsx.split('\n')
    const maxLineLength = 80 // Maximum line length before wrapping

    for (let line of lines) {
        line = line.trim()

        // Handle closing tags
        if (line.startsWith('</')) {
            indent = Math.max(0, indent - 1)
        }

        // Format the current line with proper indentation
        let currentLine = '  '.repeat(indent) + line

        // Check if line needs wrapping
        if (currentLine.length > maxLineLength) {
            currentLine = wrapLongLine(currentLine, indent, maxLineLength)
        }

        formatted += currentLine + '\n'

        // Handle opening tags
        if (line.startsWith('<') && !line.startsWith('</') && !line.endsWith('/>')) {
            indent++
        }
    }

    return formatted.trim()
}

function wrapLongLine(line, baseIndent, maxLength) {
    const indentStr = '  '.repeat(baseIndent + 1)
    let result = ''
    let currentLine = ''
    let inTag = false
    let inAttribute = false

    for (let i = 0; i < line.length; i++) {
        const char = line[i]
        currentLine += char

        if (char === '<') inTag = true
        if (char === '>') inTag = false
        if (char === '{') inAttribute = true
        if (char === '}') inAttribute = false

        // Wrap at spaces when not inside tags/attributes
        if (!inTag && !inAttribute && char === ' ' && currentLine.length > maxLength) {
            const lastSpace = currentLine.lastIndexOf(' ')
            result += currentLine.substring(0, lastSpace) + '\n' + indentStr
            currentLine = currentLine.substring(lastSpace + 1)
        }
    }

    return result + currentLine
}

function getLineNumber(text, substring) {
    const lines = text.split('\n')
    let charCount = 0
    for (let i = 0; i < lines.length; i++) {
        charCount += lines[i].length + 1 // +1 for newline character
        if (charCount >= text.indexOf(substring)) {
            return i + 1
        }
    }
    return 0
}