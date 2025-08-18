'use client';

import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, ReferenceLine
} from 'recharts';

export function RoiChart({
  data,
  color = '#1b4d2b',
}: { data: Array<{ year: string; cashflow: number }>; color?: string }) {
  return (
    <div className="h-56">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="year" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `${(v/1000).toFixed(0)}k`} />
          <Tooltip formatter={(v: number) => `${(v/1000).toFixed(0)}k €`} />
          <ReferenceLine y={0} stroke="#64748b" />
          <Bar dataKey="cashflow" fill={color} radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
