import React from "react";

const MetricsCard = ({ detection }) => (
  <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20 mb-6">
    <h2 className="text-xl font-bold text-white mb-4">Detection Metrics</h2>

    <div className="grid grid-cols-2 gap-4">
      <MetricBox label="Accuracy" value={detection.accuracy} color="green" />
      <MetricBox label="Precision" value={detection.precision} color="blue" />
      <MetricBox label="Recall" value={detection.recall} color="purple" />
      <MetricBox label="F1 Score" value={detection.f1Score} color="pink" />
    </div>
  </div>
);

const MetricBox = ({ label, value, color }) => (
  <div className={`bg-${color}-500/20 p-4 rounded-lg border border-${color}-500/30`}>
    <div className={`text-sm text-${color}-300`}>{label}</div>
    <div className={`text-3xl font-bold text-${color}-400`}>{value}%</div>
  </div>
);

export default MetricsCard;
