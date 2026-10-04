interface StatCardProps {
  label: string;
  value: string | number;
  icon: string;
  trend?: string;
  trendColor?: string;
}

export default function StatCard({ label, value, icon, trend, trendColor }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 flex items-start justify-between">
      <div>
        <p className="text-sm text-slate-500 font-medium">{label}</p>
        <p className="text-2xl font-bold text-slate-800 mt-1">{value}</p>
        {trend && (
          <p className={`text-xs mt-2 font-medium ${trendColor ?? "text-slate-500"}`}>
            {trend}
          </p>
        )}
      </div>
      <div className="w-11 h-11 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
        <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </div>
    </div>
  );
}
