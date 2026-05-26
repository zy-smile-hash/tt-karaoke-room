import { useState } from 'react';
import { Copy, Check, Play, Figma } from 'lucide-react';

const codeExample = `import React from 'react';
import './Button.css';

export default function Button({ 
  variant = 'primary', 
  children 
}) {
  return (
    <button className={\`btn btn-\${variant}\`}>
      {children}
    </button>
  );
}`;

const cssExample = `.btn {
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
}`;

export default function CodePreview() {
  const [activeTab, setActiveTab] = useState('react');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const code = activeTab === 'react' ? codeExample : cssExample;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="preview" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            See It In Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Export your Figma designs to production-ready code in seconds.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex border-b border-gray-200">
            <div className="flex items-center px-4 py-3 border-r border-gray-200">
              <div className="flex items-center space-x-2">
                <Figma className="w-5 h-5 text-purple-600" />
                <span className="font-medium text-gray-700">Figma Design</span>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center space-x-1">
              <button
                onClick={() => setActiveTab('react')}
                className={`px-4 py-2 rounded-t-lg text-sm font-medium transition-colors ${
                  activeTab === 'react'
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                React
              </button>
              <button
                onClick={() => setActiveTab('css')}
                className={`px-4 py-2 rounded-t-lg text-sm font-medium transition-colors ${
                  activeTab === 'css'
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                CSS
              </button>
              <button
                onClick={() => setActiveTab('html')}
                className={`px-4 py-2 rounded-t-lg text-sm font-medium transition-colors ${
                  activeTab === 'html'
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                HTML
              </button>
            </div>
            <div className="flex items-center px-4 py-3">
              <button
                onClick={handleCopy}
                className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-500">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-sm">Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
                  <Figma className="w-16 h-16 text-white" />
                </div>
                <p className="text-gray-600">Your Figma Design</p>
                <div className="mt-4 inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow">
                  <Play className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium text-gray-700">Open in Figma</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-900">
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code>
                  {activeTab === 'react' && codeExample}
                  {activeTab === 'css' && cssExample}
                  {activeTab === 'html' && `<button class="btn btn-primary">
  Click Me
</button>`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
