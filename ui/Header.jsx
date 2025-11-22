import React from "react";
import { Shield, Activity, Cpu, Brain, Database } from "lucide-react";

const Header = () => (
  <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20 mb-6">
    <div className="flex items-center gap-4">
      <Shield className="w-12 h-12 text-blue-400" />
      <div>
        <h1 className="text-3xl text-white font-bold">
          Network Intrusion Detection System
        </h1>
        <p className="text-blue-300">
          1D-CNN + LSTM Autoencoder for Anomaly Detection
        </p>
      </div>
    </div>
  </div>
);

export default Header;
