import { statusColors, type Study } from "@/lib/mockData";

export default function StudyTable({ studies }: { studies: Study[] }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-left text-slate-500">
              <th className="px-4 py-3 font-medium">Study ID</th>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Phase</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Subjects</th>
              <th className="px-4 py-3 font-medium">Sponsor</th>
              <th className="px-4 py-3 font-medium">Start Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {studies.map((study) => (
              <tr key={study.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-4 py-3 font-mono text-xs text-brand-600 font-medium">{study.id}</td>
                <td className="px-4 py-3 font-medium text-slate-700">{study.name}</td>
                <td className="px-4 py-3 text-slate-600">{study.phase}</td>
                <td className="px-4 py-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[study.status]}`}>
                    {study.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-600">{study.subjects.toLocaleString()}</td>
                <td className="px-4 py-3 text-slate-600">{study.sponsor}</td>
                <td className="px-4 py-3 text-slate-500 text-xs">{study.startDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
