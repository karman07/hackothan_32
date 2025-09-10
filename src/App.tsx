import{ useState, useEffect } from "react";
import {  FileText, Shield, XCircle } from "lucide-react";
import { FileUpload } from "./components/FileUpload";
import { ResultCard } from "./components/ResultCard";
import { ThemeToggle } from "./components/ThemeToggle";
import { CertificateResult } from "./types";
import { verifyWithAPI } from "./api/verify";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [sampleFile, setSampleFile] = useState<File | null>(null);
  const [certFile, setCertFile] = useState<File | null>(null);
  const [samplePreview, setSamplePreview] = useState<string | null>(null);
  const [certPreview, setCertPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CertificateResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleVerify = async () => {
    if (!sampleFile || !certFile) {
      setError("Please upload both files.");
      return;
    }

    setError(null);
    setLoading(true);
    setResult(null);

    try {
      const response = await verifyWithAPI(sampleFile, certFile);
      setResult(response);
    } catch (err) {
      setError("Verification failed. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSampleFile(null);
    setCertFile(null);
    setSamplePreview(null);
    setCertPreview(null);
    setResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Certificate Verifier
        </h1>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </header>

      <main className="p-6">
        {!result ? (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FileUpload
                label="Sample Signature"
                onChange={(f) => {
                  setSampleFile(f);
                  setSamplePreview(URL.createObjectURL(f));
                }}
                preview={samplePreview}
                icon={FileText}
                isLoading={loading}
              />
              <FileUpload
                label="Certificate to Verify"
                onChange={(f) => {
                  setCertFile(f);
                  setCertPreview(URL.createObjectURL(f));
                }}
                preview={certPreview}
                icon={Shield}
                isLoading={loading}
              />
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={handleVerify}
                disabled={loading || !sampleFile || !certFile}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl disabled:opacity-50"
              >
                {loading ? "Verifying..." : "Verify Certificate"}
              </button>
              {(sampleFile || certFile) && (
                <button onClick={resetForm} className="px-6 py-3 text-gray-500">
                  Clear All
                </button>
              )}
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-600">
                <XCircle className="w-5 h-5" />
                {error}
              </div>
            )}
          </div>
        ) : (
          <ResultCard result={result} />
        )}
      </main>
    </div>
  );
}
