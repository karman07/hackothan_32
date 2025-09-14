import React, { useState } from "react";
import { CheckCircle, Eye } from "lucide-react";
import { FileUploadProps } from "../types";

interface ExtendedFileUploadProps extends FileUploadProps {
  multiple?: boolean;
  previewList?: string[];
}

export const FileUpload: React.FC<ExtendedFileUploadProps> = ({
  label,
  onChange,
  preview,
  previewList,
  icon: Icon,
  isLoading,
  multiple = false,
}) => {
  const [dragOver, setDragOver] = useState(false);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    if (multiple) {
      onChange(Array.from(files) as unknown as File); // trick TS, handled in App
    } else {
      onChange(files[0]);
    }
  };

  return (
    <div
      className={`relative group transition-all duration-300 ${
        dragOver ? "scale-102" : "hover:scale-101"
      }`}
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragOver(false);
        handleFiles(e.dataTransfer.files);
      }}
    >
      <div
        className={`flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-2xl transition-all duration-300 min-h-48 ${
          dragOver
            ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 scale-102"
            : preview || (previewList && previewList.length > 0)
            ? "border-green-400 bg-green-50 dark:bg-green-900/20"
            : "border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10"
        } backdrop-blur-sm shadow-lg hover:shadow-xl`}
      >
        <label className="cursor-pointer w-full h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-center space-y-4">
            <div
              className={`p-4 rounded-full transition-all duration-300 ${
                preview || (previewList && previewList.length > 0)
                  ? "bg-green-100 dark:bg-green-800"
                  : "bg-blue-100 dark:bg-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-700"
              }`}
            >
              {preview || (previewList && previewList.length > 0) ? (
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              ) : (
                <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              )}
            </div>

            <div className="text-center">
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {label}
              </p>
              {!preview && (!previewList || previewList.length === 0) && (
                <>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Drop files here or click to browse
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    PNG, JPG, PDF up to 10MB
                  </p>
                </>
              )}
            </div>
          </div>

          <input
            type="file"
            accept="image/*,.pdf"
            hidden
            multiple={multiple}
            onChange={(e) => handleFiles(e.target.files)}
            disabled={isLoading}
          />
        </label>

        {/* Previews */}
        {preview && (
          <div className="mt-4 relative group/preview">
            <img
              src={preview}
              alt="preview"
              className="max-h-32 max-w-full rounded-lg shadow-md border-2 border-white dark:border-gray-700"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover/preview:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
              <Eye className="w-6 h-6 text-white opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        )}
        {previewList && previewList.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-2">
            {previewList.map((src, i) => (
              <div key={i} className="relative group/preview">
                <img
                  src={src}
                  alt={`cert-${i}`}
                  className="max-h-24 rounded-lg shadow-md border-2 border-white dark:border-gray-700"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover/preview:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
