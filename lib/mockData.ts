export type StudyStatus = "Active" | "Completed" | "Paused" | "Planning";

export interface Study {
  id: string;
  name: string;
  phase: string;
  status: StudyStatus;
  subjects: number;
  startDate: string;
  sponsor: string;
  therapeuticArea: string;
}

export interface Dataset {
  id: string;
  name: string;
  domain: string;
  records: number;
  variables: number;
  studyId: string;
  lastUpdated: string;
  status: "Validated" | "Pending" | "Error";
}

export interface Subject {
  id: string;
  studyId: string;
  age: number;
  sex: "M" | "F";
  arm: string;
  enrollmentDate: string;
  status: "Enrolled" | "Completed" | "Withdrawn" | "Screening";
}

export const studies: Study[] = [
  { id: "STY-001", name: "Oncology Phase III — CAR-T", phase: "Phase III", status: "Active", subjects: 248, startDate: "2025-01-15", sponsor: "Meridian Bio", therapeuticArea: "Oncology" },
  { id: "STY-002", name: "Cardiovascular Outcomes Trial", phase: "Phase II", status: "Active", subjects: 512, startDate: "2024-09-01", sponsor: "Helix Pharma", therapeuticArea: "Cardiology" },
  { id: "STY-003", name: "Vaccine Efficacy Study", phase: "Phase III", status: "Completed", subjects: 1200, startDate: "2024-03-10", sponsor: "VaxCorp", therapeuticArea: "Infectious Disease" },
  { id: "STY-004", name: "Diabetes Combination Therapy", phase: "Phase II", status: "Paused", subjects: 180, startDate: "2025-02-20", sponsor: "GlucoTherapeutics", therapeuticArea: "Endocrinology" },
  { id: "STY-005", name: "Neurodegeneration Biomarker", phase: "Phase I", status: "Planning", subjects: 0, startDate: "2026-01-01", sponsor: "NeuroGen Labs", therapeuticArea: "Neurology" },
  { id: "STY-006", name: "Autoimmune Biologic Study", phase: "Phase III", status: "Active", subjects: 640, startDate: "2024-11-05", sponsor: "ImmunoWorks", therapeuticArea: "Immunology" },
];

export const datasets: Dataset[] = [
  { id: "DS-001", name: "Demographics (DM)", domain: "DM", records: 248, variables: 18, studyId: "STY-001", lastUpdated: "2026-09-28", status: "Validated" },
  { id: "DS-002", name: "Adverse Events (AE)", domain: "AE", records: 1024, variables: 35, studyId: "STY-001", lastUpdated: "2026-09-30", status: "Validated" },
  { id: "DS-003", name: "Concomitant Meds (CM)", domain: "CM", records: 876, variables: 22, studyId: "STY-001", lastUpdated: "2026-09-25", status: "Pending" },
  { id: "DS-004", name: "Lab Results (LB)", domain: "LB", records: 5600, variables: 28, studyId: "STY-002", lastUpdated: "2026-09-29", status: "Validated" },
  { id: "DS-005", name: "Vital Signs (VS)", domain: "VS", records: 3200, variables: 15, studyId: "STY-002", lastUpdated: "2026-09-30", status: "Validated" },
  { id: "DS-006", name: "Exposure (EX)", domain: "EX", records: 512, variables: 12, studyId: "STY-002", lastUpdated: "2026-09-27", status: "Error" },
  { id: "DS-007", name: "Demographics (DM)", domain: "DM", records: 1200, variables: 18, studyId: "STY-003", lastUpdated: "2025-12-15", status: "Validated" },
  { id: "DS-008", name: "Adverse Events (AE)", domain: "AE", records: 2100, variables: 35, studyId: "STY-003", lastUpdated: "2025-12-20", status: "Validated" },
  { id: "DS-009", name: "Demographics (DM)", domain: "DM", records: 640, variables: 18, studyId: "STY-006", lastUpdated: "2026-09-28", status: "Pending" },
  { id: "DS-010", name: "Lab Results (LB)", domain: "LB", records: 8900, variables: 28, studyId: "STY-006", lastUpdated: "2026-09-30", status: "Validated" },
];

export const subjects: Subject[] = [
  { id: "SUB-0001", studyId: "STY-001", age: 58, sex: "M", arm: "Treatment A", enrollmentDate: "2025-02-01", status: "Completed" },
  { id: "SUB-0002", studyId: "STY-001", age: 64, sex: "F", arm: "Treatment B", enrollmentDate: "2025-02-05", status: "Enrolled" },
  { id: "SUB-0003", studyId: "STY-001", age: 47, sex: "M", arm: "Placebo", enrollmentDate: "2025-02-10", status: "Withdrawn" },
  { id: "SUB-0004", studyId: "STY-002", age: 71, sex: "F", arm: "Treatment A", enrollmentDate: "2024-09-15", status: "Completed" },
  { id: "SUB-0005", studyId: "STY-002", age: 55, sex: "M", arm: "Treatment B", enrollmentDate: "2024-09-20", status: "Enrolled" },
  { id: "SUB-0006", studyId: "STY-002", age: 62, sex: "F", arm: "Placebo", enrollmentDate: "2024-10-01", status: "Enrolled" },
  { id: "SUB-0007", studyId: "STY-006", age: 38, sex: "F", arm: "Treatment A", enrollmentDate: "2024-11-10", status: "Completed" },
  { id: "SUB-0008", studyId: "STY-006", age: 44, sex: "M", arm: "Treatment B", enrollmentDate: "2024-11-15", status: "Screening" },
  { id: "SUB-0009", studyId: "STY-006", age: 29, sex: "F", arm: "Placebo", enrollmentDate: "2024-12-01", status: "Enrolled" },
  { id: "SUB-0010", studyId: "STY-001", age: 67, sex: "M", arm: "Treatment A", enrollmentDate: "2025-03-01", status: "Enrolled" },
];

export function getStudyById(id: string): Study | undefined {
  return studies.find((s) => s.id === id);
}

export function getDatasetsByStudy(studyId: string): Dataset[] {
  return datasets.filter((d) => d.studyId === studyId);
}

export function getSubjectsByStudy(studyId: string): Subject[] {
  return subjects.filter((s) => s.studyId === studyId);
}

export const statusColors: Record<string, string> = {
  Active: "bg-green-100 text-green-700",
  Completed: "bg-blue-100 text-blue-700",
  Paused: "bg-amber-100 text-amber-700",
  Planning: "bg-slate-100 text-slate-600",
  Validated: "bg-green-100 text-green-700",
  Pending: "bg-amber-100 text-amber-700",
  Error: "bg-red-100 text-red-700",
  Enrolled: "bg-green-100 text-green-700",
  Withdrawn: "bg-red-100 text-red-700",
  Screening: "bg-amber-100 text-amber-700",
};
