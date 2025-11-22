import React from "react";

const ControlPanel = ({ status, runFullPipeline, detectIntrusions }) => (
  <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20 mb-6">
    <h2 className="text-xl font-bold text-white mb-4">Control Panel</h2>

    <div className="flex gap-4 items-center">
      <button
        onClick={runFullPipeline}
        disabled={status === "training" || status === "detecting"}
        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white rounded-lg"
      >
        {status === "training" ? "Training..." :
         status === "detecting" ? "Detecting..." : "Run Full Pipeline"}
      </button>

      {status === "trained" && (
        <button
          onClick={detectIntrusions}
          className="bg-green-600 hover:bg-green-700 px-6 py-3 text-white rounded-lg"
        >
          Detect Only
        </button>
      )}

      <div className="ml-auto text-gray-400">
        Status:
        <span className="ml-2 text-blue-300">{status.toUpperCase()}</span>
      </div>
    </div>
  </div>
);

export default ControlPanel;
