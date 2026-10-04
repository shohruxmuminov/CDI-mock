import StatCard from "@/components/StatCard";
import StudyTable from "@/components/StudyTable";
import DatasetTable from "@/components/DatasetTable";
import { studies, datasets, subjects } from "@/lib/mockData";

export default function DashboardPage() {
  const activeStudies = studies.filter((s) => s.status === "Active").length;
  const totalSubjects = studies.reduce((sum, s) => sum + s.subjects, 0);
  const totalRecords = datasets.reduce((sum, d) => sum + d.records, 0);
  const validatedDs = datasets.filter((d) => d.status === "Validated").length;
  const pendingDs = datasets.filter((d) => d.status === "Pending").length;
  const errorDs = datasets.filter((d) => d.status === "Error").length;

  return (
    <div className="space-y-6">
      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Active Studies"
          value={activeStudies}
          icon="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          trend={`${studies.length} total studies`}
          trendColor="text-brand-600"
        />
        <StatCard
          label="Total Subjects"
          value={totalSubjects.toLocaleString()}
          icon="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          trend="Across all studies"
        />
        <StatCard
          label="Dataset Records"
          value={totalRecords.toLocaleString()}
          icon="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
          trend={`${datasets.length} datasets`}
        />
        <StatCard
          label="Validation Rate"
          value={`${Math.round((validatedDs / datasets.length) * 100)}%`}
          icon="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          trend={`${errorDs} errors, ${pendingDs} pending`}
          trendColor={errorDs > 0 ? "text-red-600" : "text-green-600"}
        />
      </div>

      {/* Dataset validation summary */}
      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <h3 className="text-sm font-semibold text-slate-700 mb-4">Dataset Validation Overview</h3>
        <div className="flex items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-slate-500">Validated</span>
              <span className="font-medium text-green-600">{validatedDs}</span>
            </div>
            <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{ width: `${(validatedDs / datasets.length) * 100}%` }} />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-slate-500">Pending</span>
              <span className="font-medium text-amber-600">{pendingDs}</span>
            </div>
            <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-amber-500 rounded-full" style={{ width: `${(pendingDs / datasets.length) * 100}%` }} />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-slate-500">Errors</span>
              <span className="font-medium text-red-600">{errorDs}</span>
            </div>
            <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-red-500 rounded-full" style={{ width: `${(errorDs / datasets.length) * 100}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* Recent studies */}
      <div>
        <h3 className="text-base font-semibold text-slate-800 mb-3">Recent Studies</h3>
        <StudyTable studies={studies.slice(0, 4)} />
      </div>

      {/* Recent datasets */}
      <div>
        <h3 className="text-base font-semibold text-slate-800 mb-3">Recent Datasets</h3>
        <DatasetTable datasets={datasets.slice(0, 5)} />
      </div>
    </div>
  );
}
