'use client'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { useEffect, useRef, useState } from 'react'

export default function SyntaxHighlighterWithLines({
    code,
    language = 'javascript',
    showLineNumbers = true,
}) {
    const [containerWidth, setContainerWidth] = useState(null)
    const containerRef = useRef(null)
    const lineCount = code.split('\n').length

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.clientWidth)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className="relative" ref={containerRef}>
            {showLineNumbers && (
                <div className="absolute left-0 top-0 h-full w-10 bg-gray-900 overflow-hidden">
                    <div className="font-mono text-xs text-right text-gray-500 pr-2 pt-1">
                        {Array.from({ length: lineCount }).map((_, i) => (
                            <div key={i} className="h-5 leading-5">
                                {i + 1}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <SyntaxHighlighter
                language={language}
                style={atomDark}
                customStyle={{
                    margin: 0,
                    paddingLeft: showLineNumbers ? '3.5rem' : '1rem',
                    background: '#1a1a1a',
                    fontSize: '0.875rem',
                    lineHeight: '1.25rem',
                    wordBreak: 'break-word',
                    whiteSpace: 'pre-wrap',
                    overflowX: 'hidden',
                    maxWidth: containerWidth ? `${containerWidth}px` : '100%'
                }}
                wrapLines={true}
                showLineNumbers={false}
                lineProps={(lineNumber) => ({
                    style: {
                        display: 'block',
                        wordBreak: 'break-word',
                        whiteSpace: 'pre-wrap'
                    }
                })}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    )
}