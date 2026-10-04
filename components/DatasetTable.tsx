import { statusColors, type Dataset } from "@/lib/mockData";

export default function DatasetTable({ datasets }: { datasets: Dataset[] }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-left text-slate-500">
              <th className="px-4 py-3 font-medium">Dataset</th>
              <th className="px-4 py-3 font-medium">Domain</th>
              <th className="px-4 py-3 font-medium">Records</th>
              <th className="px-4 py-3 font-medium">Variables</th>
              <th className="px-4 py-3 font-medium">Study</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Last Updated</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {datasets.map((ds) => (
              <tr key={ds.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-4 py-3 font-medium text-slate-700">{ds.name}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-xs font-mono font-medium">
                    {ds.domain}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-600">{ds.records.toLocaleString()}</td>
                <td className="px-4 py-3 text-slate-600">{ds.variables}</td>
                <td className="px-4 py-3 font-mono text-xs text-brand-600 font-medium">{ds.studyId}</td>
                <td className="px-4 py-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[ds.status]}`}>
                    {ds.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-500 text-xs">{ds.lastUpdated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
