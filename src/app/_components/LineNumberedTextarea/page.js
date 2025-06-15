'use client'

import { useEffect, useRef, useState } from 'react'

export default function LineNumberedTextarea({
    value,
    onChange,
    errors = [],
    language = 'text',
    className = '',
}) {
    const textareaRef = useRef(null)
    const lineNumbersRef = useRef(null)
    const [lineCount, setLineCount] = useState(1)

    useEffect(() => {
        updateLineNumbers()
    }, [value])

    const updateLineNumbers = () => {
        const lines = value.split('\n')
        setLineCount(lines.length || 1)

        // Sync scroll between textarea and line numbers
        if (textareaRef.current && lineNumbersRef.current) {
            lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop
        }
    }

    const handleScroll = () => {
        if (textareaRef.current && lineNumbersRef.current) {
            lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop
        }
    }

    const getLineClass = (lineNumber) => {
        const error = errors.find(err => err.line === lineNumber)
        return error ? 'bg-red-50 text-red-600' : ''
    }

    return (
        <div className={`relative ${className}`}>
            <div className="absolute left-0 top-0 h-full w-10 bg-gray-50 overflow-hidden">
                <div
                    ref={lineNumbersRef}
                    className="font-mono text-xs text-right text-gray-400 pr-2 pt-2 pb-10"
                >
                    {Array.from({ length: lineCount }).map((_, i) => (
                        <div
                            key={i}
                            className={`h-5 leading-5 ${getLineClass(i + 1)}`}
                        >
                            {i + 1}
                        </div>
                    ))}
                </div>
            </div>
            <textarea
                ref={textareaRef}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onScroll={handleScroll}
                className="w-full h-full pl-12 pr-4 py-2 font-mono text-sm outline-none resize-none bg-white"
                spellCheck="false"
            />
        </div>
    )
}