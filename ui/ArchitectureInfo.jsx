import React from "react";

const ArchitectureInfo = () => (
  <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20 mt-6">
    <h2 className="text-xl text-white font-bold mb-4">Model Architecture</h2>

    <div className="grid grid-cols-3 gap-4">
      <ArchBox title="Input Layer" color="blue" desc="10 flow sequences × 49 features" />
      <ArchBox title="1D-CNN" color="purple" desc="Extract spatial correlations" />
      <ArchBox title="LSTM Encoder" color="pink" desc="Temporal compression" />
      <ArchBox title="LSTM Decoder" color="green" desc="Sequence reconstruction" />
      <ArchBox title="Anomaly Detection" color="yellow" desc="High error = intrusion" />
      <ArchBox title="Classification" color="red" desc="Detect DoS, Fuzzers, Exploits, etc." />
    </div>
  </div>
);

const ArchBox = ({ title, color, desc }) => (
  <div className={`bg-${color}-500/10 p-4 rounded-lg border border-${color}-500/30`}>
    <h3 className={`text-${color}-300 font-bold mb-2`}>{title}</h3>
    <p className="text-gray-400 text-sm">{desc}</p>
  </div>
);

export default ArchitectureInfo;
