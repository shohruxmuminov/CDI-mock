import { statusColors, type Subject } from "@/lib/mockData";

export default function SubjectTable({ subjects }: { subjects: Subject[] }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-left text-slate-500">
              <th className="px-4 py-3 font-medium">Subject ID</th>
              <th className="px-4 py-3 font-medium">Study</th>
              <th className="px-4 py-3 font-medium">Age</th>
              <th className="px-4 py-3 font-medium">Sex</th>
              <th className="px-4 py-3 font-medium">Treatment Arm</th>
              <th className="px-4 py-3 font-medium">Enrollment</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {subjects.map((sub) => (
              <tr key={sub.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-4 py-3 font-mono text-xs text-brand-600 font-medium">{sub.id}</td>
                <td className="px-4 py-3 font-mono text-xs text-slate-500">{sub.studyId}</td>
                <td className="px-4 py-3 text-slate-600">{sub.age}</td>
                <td className="px-4 py-3 text-slate-600">{sub.sex}</td>
                <td className="px-4 py-3 text-slate-600">{sub.arm}</td>
                <td className="px-4 py-3 text-slate-500 text-xs">{sub.enrollmentDate}</td>
                <td className="px-4 py-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[sub.status]}`}>
                    {sub.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
