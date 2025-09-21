import { LucideIcon } from "lucide-react";

export interface ThemeToggleProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export interface FileUploadProps {
  label: string;
  onChange: (file: File | File[]) => void; // ✅ allow single or multiple
  preview?: string | null;                 // ✅ optional now
  icon: LucideIcon;
  isLoading: boolean;
}

// types.ts
export interface CertificateResult {
  extracted_text: string;

  key_details: {
    certificate_type: string;
    course: string;
    course_duration: string;
    institution: string;
    student_name: string;
    registration_no: string;
    cs_no: string;
    marks_obtained: string;
    total_marks: string;
    division: string;
    completion_date: string;
    certificate_date: string;
    place: string;
    exists_in_db: boolean;
  };

  institute: string | null;
  db_match: boolean;

  qr_result: {
    qr_found: boolean;
    qr_valid: boolean;
  };

  tampered: boolean;
  file_hash: string;
  is_legitimate: boolean;

  metadata: Record<string, any> | null;
  ai_generated: boolean;
}



export interface ResultCardProps {
  result: CertificateResult | null;
}
