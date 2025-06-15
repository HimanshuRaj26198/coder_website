'use client'

import { useState, useEffect } from 'react'
import { Copy, RefreshCw, AlertTriangle } from 'lucide-react'
import LineNumberedTextarea from '../LineNumberedTextarea/page'
import SyntaxHighlighterWithLines from '../SyntaxHighlighterLines/page'
import { htmlToJsx } from '@/lib/htmlToJsx'
import { parseHtmlErrors } from '@/lib/errorParser'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'
// import { Button } from '@/components/ui/button'

const sampleHtml = `<div class="container">
  <h1 class="title">Welcome</h1>
  <p>This is a <a href="/link">sample</a>.</p>
  <input type="text" placeholder="Enter name">
  <button onclick="alert('Hello')">Click</button>
</div>`

export default function HtmlToJsxConverter() {
    const [html, setHtml] = useState(sampleHtml)
    const [jsx, setJsx] = useState('')
    const [errors, setErrors] = useState([])
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        convertToJsx()
    }, [html])

    const convertToJsx = () => {
        try {
            const { result, errors: conversionErrors } = htmlToJsx(html)
            setJsx(result)
            setErrors(conversionErrors)
        } catch (error) {
            setJsx('')
            setErrors([{ message: error.message, line: 0 }])
        }
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(jsx)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* HTML Input */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gray-900 text-white px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        <span className="ml-2 text-sm font-medium">HTML</span>
                    </div>
                    <div className="text-sm text-gray-400">
                        {errors.length > 0 ? (
                            <div className="flex items-center gap-1 text-yellow-400">
                                <AlertTriangle className="h-4 w-4" />
                                <span>{errors.length} error{errors.length !== 1 ? 's' : ''}</span>
                            </div>
                        ) : (
                            'Valid HTML'
                        )}
                    </div>
                </div>
                <LineNumberedTextarea
                    value={html}
                    onChange={setHtml}
                    errors={errors}
                    language="html"
                    className="h-96"
                />
            </div>

            {/* JSX Output */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gray-900 text-white px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="text-blue-400 font-bold text-sm">JSX</div>
                        <span className="text-sm font-medium">React JSX</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400">
                            {jsx.split('\n').length} line{jsx.split('\n').length !== 1 ? 's' : ''}
                        </span>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button
                                        onClick={handleCopy}
                                        disabled={!jsx}
                                        className="p-1 rounded hover:bg-gray-800 transition-colors disabled:opacity-50"
                                    >
                                        <Copy className="h-4 w-4" />
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent side="left">
                                    {copied ? 'Copied!' : 'Copy to clipboard'}
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
                <div className="h-96 overflow-auto relative bg-gray-900">
                    {jsx ? (
                        <SyntaxHighlighterWithLines
                            code={jsx}
                            language="javascript"
                            showLineNumbers={true}
                        />
                    ) : (
                        <div className="h-full flex items-center justify-center text-gray-400">
                            {errors.length > 0 ? (
                                <div className="text-center p-4">
                                    <AlertTriangle className="h-8 w-8 mx-auto text-yellow-500 mb-2" />
                                    <p className="font-medium">Conversion Error</p>
                                    <p className="text-sm mt-1">{errors[0].message}</p>
                                </div>
                            ) : (
                                'JSX output will appear here...'
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Error details */}
            {errors.length > 0 && (
                <div className="lg:col-span-2 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 text-yellow-600">
                            <AlertTriangle className="h-5 w-5" />
                        </div>
                        <div>
                            <h3 className="font-medium text-yellow-800">Conversion Issues</h3>
                            <ul className="mt-2 space-y-2">
                                {errors.map((error, index) => (
                                    <li key={index} className="text-sm text-yellow-700">
                                        <span className="font-medium">Line {error.line}:</span> {error.message}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}