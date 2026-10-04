import SubjectTable from "@/components/SubjectTable";
import { subjects } from "@/lib/mockData";

export default function SubjectsPage() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-500">
        {subjects.length} subjects enrolled across {new Set(subjects.map((s) => s.studyId)).size} studies
      </p>
      <SubjectTable subjects={subjects} />
    </div>
  );
}
