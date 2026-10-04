import StudyTable from "@/components/StudyTable";
import { studies } from "@/lib/mockData";

export default function StudiesPage() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-500">
        {studies.length} clinical studies across {new Set(studies.map((s) => s.therapeuticArea)).size} therapeutic areas
      </p>
      <StudyTable studies={studies} />
    </div>
  );
}
