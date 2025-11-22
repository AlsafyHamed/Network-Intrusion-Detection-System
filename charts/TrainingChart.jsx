import React from "react";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

const TrainingChart = ({ epoch, loss }) => {
  return (
    <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20 mb-6">
      <h2 className="text-xl font-bold text-white mb-4">Training Progress</h2>

      <div className="mb-2 text-gray-300">
        Epoch {epoch}/50 — Loss: {loss[loss.length - 1]?.trainLoss.toFixed(4)}
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={loss}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="epoch" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="trainLoss" stroke="#3b82f6" strokeWidth={2} />
          <Line type="monotone" dataKey="valLoss" stroke="#8b5cf6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrainingChart;
