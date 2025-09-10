import React, { useState } from "react";
import {
  ClipboardCheck,
  FileText,
  Search,
  Shield,
  ChevronRight,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { ResultCardProps } from "../types";

export const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
  const [activeTab, setActiveTab] = useState<"overview" | "details" | "checks">(
    "overview"
  );

  if (!result) return null;

  const {
    extracted_text,
    key_details,
    authenticity_check,
    signature_similarity_score,
    signature_match,
  } = result;

  const existsInDb = key_details?.exists_in_db ?? false;

  // ✅ Final legitimacy logic
  const isLegitimate = existsInDb && signature_match;

  const tabs = [
    { id: "overview", label: "Overview", icon: ClipboardCheck },
    { id: "details", label: "Details", icon: FileText },
    { id: "checks", label: "Checks", icon: Search },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500">
      {/* Header */}
      <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Shield className="w-7 h-7" /> Verification Result
        </h2>
        <p className="text-sm opacity-80 mt-1">Certificate analysis completed</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id as any)}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors duration-300 ${
              activeTab === id
                ? "border-b-2 border-blue-600 text-blue-600 dark:text-blue-400"
                : "text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {activeTab === "overview" && (
          <div className="space-y-4">
            {/* Final Verdict */}
            <div
              className={`p-4 rounded-xl flex items-center gap-3 ${
                isLegitimate ? "bg-green-100" : "bg-red-100"
              }`}
            >
              {isLegitimate ? (
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              ) : (
                <XCircle className="w-6 h-6 text-red-600" />
              )}
     <p className="font-semibold text-lg text-black">
  {isLegitimate
    ? "✅ Certificate is Legitimate"
    : "❌ Certificate is Suspicious"}
</p>
            </div>

            {/* Authenticity Text */}
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Authenticity Check</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {authenticity_check}
              </p>
            </div>

            {/* Signature Check */}
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Signature Match</h3>
              <p
                className={`font-medium ${
                  signature_match ? "text-green-600" : "text-red-600"
                }`}
              >
                {signature_match ? "✔ Match found" : "✘ No match"}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Similarity Score: {signature_similarity_score.toFixed(2)}
              </p>
            </div>

            {/* Database Check */}
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Database Verification</h3>
              <p
                className={`font-medium ${
                  existsInDb ? "text-green-600" : "text-red-600"
                }`}
              >
                {existsInDb
                  ? "✔ Candidate found in records"
                  : "✘ Candidate not found in records"}
              </p>
            </div>
          </div>
        )}

        {activeTab === "details" && (
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(key_details).map(([key, value]) => (
              <div
                key={key}
                className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl flex items-start gap-2"
              >
                <ChevronRight className="w-4 h-4 mt-1 text-blue-500" />
                <div>
                  <p className="text-xs uppercase text-gray-400">
                    {key.replace(/_/g, " ")}
                  </p>
                  <p className="font-medium text-gray-700 dark:text-gray-200">
                    {String(value)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "checks" && (
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Extracted Text</h3>
              <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                {extracted_text}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
