import React, { useState } from "react";
import {
  ClipboardCheck,
  FileText,
  Search,
  Shield,
  ChevronRight,
  CheckCircle2,
  XCircle,
  QrCode,
  Database,
  Bug,
  Brain,
  Hash,
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
    db_match,
    qr_result,
    tampered,
    file_hash,
    is_legitimate,
    metadata,
    ai_generated,
  } = result;

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
                is_legitimate ? "bg-green-100" : "bg-red-100"
              }`}
            >
              {is_legitimate ? (
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              ) : (
                <XCircle className="w-6 h-6 text-red-600" />
              )}
              <p className="font-semibold text-lg text-black">
                {is_legitimate
                  ? "✅ Certificate is Legitimate"
                  : "❌ Certificate is Suspicious"}
              </p>
            </div>

            {/* Database Check */}
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl flex gap-3 items-center">
              <Database className="w-5 h-5 text-blue-500" />
              <span
                className={`font-medium ${
                  db_match ? "text-green-600" : "text-red-600"
                }`}
              >
                {db_match
                  ? "✔ Candidate exists in database"
                  : "✘ Candidate not found in database"}
              </span>
            </div>

            {/* QR Validation */}
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl">
              <h3 className="text-lg font-semibold mb-2 flex gap-2 items-center">
                <QrCode className="w-5 h-5 text-blue-500" /> QR Verification
              </h3>
              {!qr_result?.qr_found ? (
                <p className="text-red-600">❌ No QR code found</p>
              ) : qr_result.qr_valid ? (
                <p className="text-green-600">✔ QR code is valid</p>
              ) : (
                <p className="text-red-600">❌ QR code invalid</p>
              )}
            </div>

            {/* Tampering Check */}
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl flex gap-3 items-center">
              <Bug className="w-5 h-5 text-blue-500" />
              <span
                className={`font-medium ${
                  tampered ? "text-red-600" : "text-green-600"
                }`}
              >
                {tampered ? "⚠ Tampering detected" : "✔ No tampering detected"}
              </span>
            </div>

            {/* AI Generated Check */}
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl flex gap-3 items-center">
              <Brain className="w-5 h-5 text-blue-500" />
              <span
                className={`font-medium ${
                  ai_generated ? "text-red-600" : "text-green-600"
                }`}
              >
                {ai_generated
                  ? "⚠ Content may be AI generated"
                  : "✔ Human-generated text"}
              </span>
            </div>

            {/* File Hash */}
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl flex gap-3 items-center">
              <Hash className="w-5 h-5 text-blue-500" />
              <span className="text-sm break-all text-gray-700 dark:text-gray-300">
                File Hash: {file_hash}
              </span>
            </div>
          </div>
        )}

        {activeTab === "details" && (
          <div className="grid md:grid-cols-2 gap-4">
            {/* <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl">
              <p className="text-xs uppercase text-gray-400">Institute</p>
              <p className="font-medium">{institute || "-"}</p>
            </div> */}
            {key_details &&
              Object.entries(key_details).map(([key, value]) => (
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
                      {String(value || "-")}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        )}

        {activeTab === "checks" && (
          <div className="space-y-4">
            {/* OCR Text */}
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Extracted Text</h3>
              <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                {extracted_text || "No OCR text extracted"}
              </pre>
            </div>

            {/* Metadata */}
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Metadata</h3>
              <pre className="text-xs text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                {metadata ? JSON.stringify(metadata, null, 2) : "No metadata"}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
