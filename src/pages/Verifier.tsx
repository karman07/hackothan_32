import { useState, useEffect } from "react";
import {
  FileText,
  Shield,
  XCircle,
  Search,
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { FileUpload } from "../components/FileUpload";
import { ResultCard } from "../components/ResultCard";
import { ThemeToggle } from "../components/ThemeToggle";
import { CertificateResult } from "../types";
import { verifyWithAPI } from "../api/verify";
import jsPDF from "jspdf";

export default function Verifier() {
  const [theme, setTheme] = useState("light");

  // Upload states
  const [sampleFile, setSampleFile] = useState<File | null>(null);
  const [certFiles, setCertFiles] = useState<File[]>([]);
  const [samplePreview, setSamplePreview] = useState<string | null>(null);
  const [certPreviews, setCertPreviews] = useState<string[]>([]);

  // Process states
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<CertificateResult[]>([]);
  const [error, setError] = useState<string | null>(null);

  // UI states
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Filtered + paginated certificates
  const filteredFiles = certFiles.filter((f) =>
    f.name.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filteredFiles.length / itemsPerPage);
  const paginatedFiles = filteredFiles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleVerify = async () => {
    if (!sampleFile || certFiles.length === 0) {
      setError("Please upload sample and at least one certificate.");
      return;
    }

    setError(null);
    setLoading(true);
    setProgress(0);
    setResults([]);

    try {
      const responses: CertificateResult[] = [];
      for (let i = 0; i < certFiles.length; i++) {
        const cert = certFiles[i];
        const res = await verifyWithAPI(sampleFile, cert);
        responses.push(res);
        setProgress(Math.round(((i + 1) / certFiles.length) * 100));
      }
      setResults(responses);
    } catch (err) {
      setError("Verification failed. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSampleFile(null);
    setCertFiles([]);
    setSamplePreview(null);
    setCertPreviews([]);
    setResults([]);
    setError(null);
    setProgress(0);
    setSearch("");
    setCurrentPage(1);
  };

  const downloadResultsAsPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text("Certificate Verification Results", 10, 10);

    results.forEach((r, i) => {
      const y = 20 + i * 50;
      doc.text(`Student: ${r.key_details.student_name}`, 10, y);
      doc.text(`Course: ${r.key_details.course}`, 10, y + 7);
      doc.text(`Institution: ${r.key_details.institution}`, 10, y + 14);
      doc.text(`Division: ${r.key_details.division}`, 10, y + 21);
      doc.text(
        `Signature Match: ${r.signature_match ? "Yes" : "No"} (Score: ${
          r.signature_similarity_score
        })`,
        10,
        y + 28
      );
      doc.text(`Authenticity: ${r.authenticity_check}`, 10, y + 35);
    });

    doc.save("verification_results.pdf");
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
        {results.length === 0 ? (
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Sample (single) */}
              <FileUpload
                label="Sample Signature"
                onChange={(f) => {
                  if (Array.isArray(f)) return; // only single
                  setSampleFile(f);
                  setSamplePreview(URL.createObjectURL(f));
                }}
                preview={samplePreview}
                icon={FileText}
                isLoading={loading}
              />

              {/* Certificates (multiple) */}
              <FileUpload
                label="Certificates to Verify"
                onChange={(f) => {
                  const arr = Array.isArray(f) ? f : [f];
                  setCertFiles(arr);
                  setCertPreviews(arr.map((file) => URL.createObjectURL(file)));
                }}
                preview={null}
                icon={Shield}
                isLoading={loading}
                multiple
                previewList={certPreviews}
              />
            </div>

            {/* Table of files */}
            {certFiles.length > 0 && (
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-2">
                  <Search className="w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search certificates..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-gray-700 dark:text-gray-200"
                  />
                </div>

                <table className="w-full border-collapse rounded-lg overflow-hidden shadow">
                  <thead>
                    <tr className="bg-gray-200 dark:bg-gray-700 text-left">
                      <th className="p-3">#</th>
                      <th className="p-3">File Name</th>
                      <th className="p-3">Size (KB)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                    {paginatedFiles.map((file, i) => (
                      <tr
                        key={i}
                        className="hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        <td className="p-3">
                          {(currentPage - 1) * itemsPerPage + i + 1}
                        </td>
                        <td className="p-3">{file.name}</td>
                        <td className="p-3">
                          {(file.size / 1024).toFixed(1)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-4 mt-4">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((p) => p - 1)}
                      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-gray-600 dark:text-gray-300">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((p) => p + 1)}
                      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-col gap-4 items-center">
              <button
                onClick={handleVerify}
                disabled={loading || !sampleFile || certFiles.length === 0}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl disabled:opacity-50"
              >
                {loading ? "Verifying..." : "Verify Certificates"}
              </button>
              {(sampleFile || certFiles.length > 0) && (
                <button
                  onClick={resetForm}
                  className="px-6 py-3 text-gray-500 hover:text-gray-700"
                >
                  Clear All
                </button>
              )}
              {loading && (
                <div className="w-full max-w-lg bg-gray-200 rounded-full h-4 dark:bg-gray-700 overflow-hidden">
                  <div
                    className="bg-blue-600 h-4 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}
              {error && (
                <div className="flex items-center gap-2 text-red-600">
                  <XCircle className="w-5 h-5" />
                  {error}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-6 max-w-5xl mx-auto">
            {results.map((res, i) => (
              <ResultCard key={i} result={res} />
            ))}

            {results.length > 0 && (
              <div className="flex justify-center">
                <button
                  onClick={downloadResultsAsPDF}
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700"
                >
                  <Download className="w-5 h-5" />
                  Download Results as PDF
                </button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
