import React from "react";

const ConfusionMatrix = ({ detection }) => (
  <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20">
    <h2 className="text-xl font-bold text-white mb-4">Confusion Matrix</h2>

    <div className="grid grid-cols-2 gap-4">
      <MatrixBox label="True Negatives" value={detection.trueNegatives} color="green" />
      <MatrixBox label="False Positives" value={detection.falsePositives} color="yellow" />
      <MatrixBox label="False Negatives" value={detection.falseNegatives} color="orange" />
      <MatrixBox label="True Positives" value={detection.truePositives} color="red" />
    </div>
  </div>
);

const MatrixBox = ({ label, value, color }) => (
  <div className={`bg-${color}-500/20 p-4 rounded-lg border border-${color}-500/30 text-center`}>
    <div className={`text-sm text-${color}-300`}>{label}</div>
    <div className={`text-3xl font-bold text-${color}-400`}>{value}</div>
  </div>
);

export default ConfusionMatrix;
