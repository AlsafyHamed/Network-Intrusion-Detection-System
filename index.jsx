import React from "react";

import Header from "./ui/Header";
import ControlPanel from "./ui/ControlPanel";
import TrainingChart from "./charts/TrainingChart";
import AnomalyChart from "./charts/AnomalyChart";
import MetricsCard from "./metrics/MetricsCard";
import ConfusionMatrix from "./metrics/ConfusionMatrix";
import ArchitectureInfo from "./ui/ArchitectureInfo";

import useTraining from "./hooks/useTraining";
import useDetection from "./hooks/useDetection";

const IntrusionDetectionSystem = () => {
  const { status, epoch, trainingLoss, trainModel } = useTraining();
  const { detectionResults, anomalyScores, detectIntrusions } = useDetection();

  const runFullPipeline = async () => {
    await trainModel();
    await detectIntrusions();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">

        <Header />

        <ControlPanel
          status={status}
          runFullPipeline={runFullPipeline}
          detectIntrusions={detectIntrusions}
        />

        {trainingLoss.length > 0 && (
          <TrainingChart epoch={epoch} loss={trainingLoss} />
        )}

        {detectionResults && (
          <>
            <MetricsCard detection={detectionResults} />
            <ConfusionMatrix detection={detectionResults} />
            <AnomalyChart scores={anomalyScores} />
          </>
        )}

        <ArchitectureInfo />
      </div>
    </div>
  );
};

export default IntrusionDetectionSystem;
