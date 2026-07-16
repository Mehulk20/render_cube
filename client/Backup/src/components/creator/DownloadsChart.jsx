import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

import { Card } from '../ui';

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border border-border bg-surface-raised px-3 py-2 shadow-xl">
      <p className="text-xs text-ink-faint">{label}</p>
      <p className="text-sm font-semibold text-ink">
        Downloads {payload[0].value.toLocaleString()}
      </p>
    </div>
  );
}

export default function DownloadsChart({ data }) {
  return (
    <Card className="p-4 sm:p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-display text-sm font-semibold text-ink">Downloads Overview</h3>
        <select className="rounded-lg border border-border bg-surface-raised px-2.5 py-1 text-xs text-ink-soft outline-none focus-ring">
          <option>Last 30 days</option>
          <option>Last 7 days</option>
          <option>Last 90 days</option>
        </select>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="downloadsFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7c5cfc" stopOpacity={0.45} />
                <stop offset="100%" stopColor="#7c5cfc" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#26262f" vertical={false} />
            <XAxis
              dataKey="date"
              tick={{ fill: '#75758a', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis tick={{ fill: '#75758a', fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: '#7c5cfc', strokeWidth: 1, strokeDasharray: '4 4' }}
            />
            <Area
              type="monotone"
              dataKey="downloads"
              stroke="#7c5cfc"
              strokeWidth={2.5}
              fill="url(#downloadsFill)"
              dot={false}
              activeDot={{ r: 5, fill: '#7c5cfc', stroke: '#0a0a0f', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
