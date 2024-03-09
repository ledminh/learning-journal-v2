import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function AddGoal() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [aiGoalSuggestion, setAiGoalSuggestion] = useState<string>("");
  const [goal, setGoal] = useState<string>("");
  const [steps, setSteps] = useState<[string, number | null][]>([]);
  const [aiStepsSuggestion, setAiStepsSuggestion] = useState<string>("");

  const [submitting, setSubmitting] = useState<boolean>(false);

  const router = useRouter();

  const goBack = () =>
    setStep((prev: 1 | 2 | 3 | 4) => {
      if (prev === 2) return 1;
      if (prev === 3) return 2;

      return 1;
    });

  function handleStep1(userResponse: string) {
    // Use userResponse to get A.I. suggestions
    // and update the state with the suggestions
    setAiGoalSuggestion(`A.I. suggestions for ${userResponse} here`);
    setStep(2);
  }

  function handleStep2(goal: string) {
    setGoal(goal);
    setAiStepsSuggestion(`A.I. suggestions for steps to achieve ${goal} here`);
    setStep(3);
  }

  function handleStep3(steps: [string, number | null][]) {
    // submit the goal and steps to the server
    setSteps(steps);
    console.log({ goal, steps });
    setSubmitting(true);
    setStep(4);

    // simulate submitting to the server
    setTimeout(() => {
      router.push("/dashboard");
    }, 1000);
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">ADD GOAL</h1>
      <div className="w-96 bg-white rounded-lg shadow-md p-8">
        {step === 1 && <Step1 handleStep1={handleStep1} />}
        {step === 2 && (
          <Step2
            goBack={goBack}
            handleStep2={handleStep2}
            aiGoalSuggestion={aiGoalSuggestion}
          />
        )}
        {step === 3 && (
          <Step3
            goBack={goBack}
            handleStep3={handleStep3}
            aiStepsSuggestion={aiStepsSuggestion}
          />
        )}
        {step === 4 && (
          <Step4 goal={goal} steps={steps} submitting={submitting} />
        )}
      </div>
    </main>
  );
}

type Step1Props = {
  handleStep1: (userResponse: string) => void;
};
function Step1({ handleStep1 }: Step1Props) {
  const [text, setText] = useState<string>("");

  const onClick = () => {
    handleStep1(text);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">What do you want to achieve?</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={onClick}
        disabled={text === ""}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 mt-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-500 disabled:hover:text-white"
      >
        Next
      </button>
    </div>
  );
}

type Step2Props = {
  goBack: () => void;
  handleStep2: (goal: string) => void;
  aiGoalSuggestion: string;
};

function Step2({ goBack, handleStep2, aiGoalSuggestion }: Step2Props) {
  const [text, setText] = useState<string>("");

  const onClick = () => {
    handleStep2(text);
  };

  return (
    <div>
      <button
        onClick={() => goBack && goBack()}
        className="mb-4 text-blue-500 hover:text-blue-700 transition-colors duration-300"
      >
        Back
      </button>
      <h2 className="text-xl font-bold mb-4">A.I. suggestions:</h2>
      <div className="bg-gray-200 rounded-md p-4 mb-4">
        {aiGoalSuggestion || "A.I. suggestions will appear here"}
      </div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />
      <button
        onClick={onClick}
        disabled={text === ""}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 mt-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-500 disabled:hover:text-white"
      >
        Add Goal
      </button>
    </div>
  );
}

type Step3Props = {
  goBack: () => void;
  handleStep3: (steps: [string, number | null][]) => void;
  aiStepsSuggestion: string;
};

function Step3({ goBack, handleStep3, aiStepsSuggestion }: Step3Props) {
  const [steps, setSteps] = useState<[string, number | null][]>([]);
  const [newStep, setNewStep] = useState<string>("");

  const handleAddStep = () => {
    if (newStep !== "") {
      setSteps((prevSteps) => [...prevSteps, [newStep, 1]]);
      setNewStep("");
    }
  };

  const handleRemoveStep = (index: number) => {
    setSteps((prevSteps) => {
      const newSteps = [...prevSteps];
      newSteps.splice(index, 1);
      return newSteps;
    });
  };

  return (
    <div>
      <button
        onClick={() => goBack && goBack()}
        className="mb-4 text-blue-500 hover:text-blue-700 transition-colors duration-300"
      >
        Back
      </button>
      <h2 className="text-xl font-bold mb-4">Add Steps:</h2>
      <div className="bg-gray-200 rounded-md p-4 mb-4">
        {aiStepsSuggestion || "A.I. suggestions will appear here"}
      </div>
      <div className="flex items-center mt-4">
        <input
          type="text"
          value={newStep}
          onChange={(e) => setNewStep(e.target.value)}
          className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddStep}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 ml-4"
        >
          Add
        </button>
      </div>
      <div className="mt-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <span className="mr-2">{index + 1}.</span>
            <span>{step[0]}</span>
            <input
              type="number"
              min={1}
              value={step[1] || ""}
              onChange={(e) => {
                const value = e.target.value;
                if (Number.isNaN(parseInt(value))) return;

                setSteps((prev) => {
                  const newSteps = [...prev];
                  newSteps[index][1] = value === "" ? null : parseInt(value);
                  return newSteps;
                });
              }}
              className="w-16 ml-4 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              disabled={step[1] === null}
            />
            <label className="ml-2" htmlFor="numEntries">
              entries
            </label>
            <label className="ml-2" htmlFor="numEntries">
              <span className="italic">or</span>
              <input
                type="checkbox"
                checked={step[1] === null}
                onChange={(e) => {
                  setSteps((prev) => {
                    const newSteps = [...prev];
                    if (e.target.checked) newSteps[index][1] = null;
                    else newSteps[index][1] = 1;
                    return newSteps;
                  });
                }}
                className="ml-2"
              />
              <span>unlimited</span>
            </label>
            <button
              onClick={() => handleRemoveStep(index)}
              className="ml-4 text-red-500 hover:text-red-700 transition-colors duration-300"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => handleStep3(steps)}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 mt-4"
      >
        Confirm
      </button>
    </div>
  );
}

type Step4Props = {
  goal: string;
  steps: [string, number | null][];
  submitting: boolean;
};

function Step4({ goal, steps, submitting }: Step4Props) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Goal:</h2>
      <p>{goal}</p>
      <h2 className="text-xl font-bold mb-4 mt-4">Steps:</h2>
      <ul>
        {steps.map((step, index) => (
          <li key={index}>
            {step[0]} - {step[1] === null ? "unlimited" : step[1]}
          </li>
        ))}
      </ul>
      {submitting && <p>Submitting...</p>}
    </div>
  );
}
