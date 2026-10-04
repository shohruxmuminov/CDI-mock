import DatasetTable from "@/components/DatasetTable";
import { datasets } from "@/lib/mockData";

export default function DatasetsPage() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-500">
        {datasets.length} SDTM datasets — {datasets.reduce((s, d) => s + d.records, 0).toLocaleString()} total records
      </p>
      <DatasetTable datasets={datasets} />
    </div>
  );
}
