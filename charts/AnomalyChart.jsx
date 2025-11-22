import React from "react";
import { ResponsiveContainer, ScatterChart, Scatter, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const AnomalyChart = ({ scores }) => (
  <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20 mt-6">
    <h2 className="text-xl text-white font-bold mb-4">Anomaly Scores</h2>

    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis dataKey="index" stroke="#9ca3af" />
        <YAxis dataKey="score" stroke="#9ca3af" />
        <Tooltip />
        <Scatter data={scores}>
          {scores.map((d, i) => (
            <circle key={i} r={3} fill={d.color} />
          ))}
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>

    <div className="flex gap-6 mt-4 text-gray-400">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-green-500 rounded-full" />
        Normal Traffic
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        Attacks
      </div>
    </div>
  </div>
);

export default AnomalyChart;
