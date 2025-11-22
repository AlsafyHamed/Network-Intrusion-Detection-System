import { useState } from "react";

const useDetection = () => {
  const [detectionResults, setDetectionResults] = useState(null);
  const [anomalyScores, setAnomalyScores] = useState([]);

  const detectIntrusions = async () => {
    await new Promise((res) => setTimeout(res, 1500));

    let scores = [];
    const attacks = [
      "Normal",
      "Fuzzers",
      "DoS",
      "Exploits",
      "Reconnaissance",
      "Shellcode",
    ];

    for (let i = 0; i < 100; i++) {
      const anomaly = Math.random() > 0.7;
      const attackType = anomaly
        ? attacks[Math.floor(Math.random() * (attacks.length - 1)) + 1]
        : "Normal";

      scores.push({
        index: i,
        score: anomaly ? 0.3 + Math.random() * 0.7 : Math.random() * 0.25,
        predicted: anomaly ? "Attack" : "Normal",
        actual: attackType,
        color: anomaly ? "#ef4444" : "#10b981",
      });
    }

    setAnomalyScores(scores);

    const tp = scores.filter((s) => s.predicted === "Attack" && s.actual !== "Normal").length;
    const fp = scores.filter((s) => s.predicted === "Attack" && s.actual === "Normal").length;
    const tn = scores.filter((s) => s.predicted === "Normal" && s.actual === "Normal").length;
    const fn = scores.filter((s) => s.predicted === "Normal" && s.actual !== "Normal").length;

    const precision = tp / (tp + fp);
    const recall = tp / (tp + fn);
    const f1 = 2 * ((precision * recall) / (precision + recall));
    const acc = (tp + tn) / (tp + fp + tn + fn);

    setDetectionResults({
      accuracy: (acc * 100).toFixed(2),
      precision: (precision * 100).toFixed(2),
      recall: (recall * 100).toFixed(2),
      f1Score: (f1 * 100).toFixed(2),
      truePositives: tp,
      falsePositives: fp,
      trueNegatives: tn,
      falseNegatives: fn,
    });
  };

  return { detectionResults, anomalyScores, detectIntrusions };
};

export default useDetection;
