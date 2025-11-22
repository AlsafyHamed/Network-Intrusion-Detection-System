import { useState } from "react";

const useTraining = () => {
  const [status, setStatus] = useState("idle");
  const [epoch, setEpoch] = useState(0);
  const [trainingLoss, setTrainingLoss] = useState([]);

  const trainModel = async () => {
    setStatus("training");
    setTrainingLoss([]);
    setEpoch(0);

    const totalEpochs = 50;

    for (let i = 1; i <= totalEpochs; i++) {
      await new Promise((res) => setTimeout(res, 100));

      const loss = 0.8 * Math.exp(-i / 15) + 0.05 + Math.random() * 0.05;
      const valLoss = 0.8 * Math.exp(-i / 15) + 0.08 + Math.random() * 0.06;

      setEpoch(i);
      setTrainingLoss((prev) => [
        ...prev,
        { epoch: i, trainLoss: loss, valLoss: valLoss },
      ]);
    }

    setStatus("trained");
  };

  return { status, epoch, trainingLoss, trainModel };
};

export default useTraining;
