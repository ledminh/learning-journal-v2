import React, { useState } from "react";

export default function AddGoal() {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const goBack = () =>
    setStep((prev: 1 | 2 | 3) => {
      if (prev === 2) return 1;
      if (prev === 3) return 2;

      return 1;
    });

  function handleStep1(userResponse: string) {
    // Use userResponse to get A.I. suggestions
    // and update the state with the suggestions
    console.log(userResponse);
    setStep(2);
  }

  function handleStep2(goal: string) {}

  function handleStep3(s: string) {}

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">ADD GOAL</h1>
      <div className="w-96 bg-white rounded-lg shadow-md p-8">
        {step === 1 && <Step1 handleFinish={handleStep1} />}
        {step === 2 && <Step2 goBack={goBack} handleFinish={handleStep2} />}
        {step === 3 && <Step3 goBack={goBack} handleFinish={handleStep3} />}
      </div>
    </main>
  );
}

interface StepProps {
  goBack?: () => void;
  handleFinish: (response: string) => void;
}

function Step1({ handleFinish }: StepProps) {
  const ref = React.useRef<HTMLInputElement>(null);

  const onClick = () => {
    if (ref.current) {
      handleFinish(ref.current.value);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">What do you want to achieve?</h2>
      <input
        ref={ref}
        type="text"
        className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={onClick}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 mt-4"
      >
        Next
      </button>
    </div>
  );
}

function Step2({ goBack, handleFinish }: StepProps) {
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
        A.I. suggestions here
      </div>
      <input
        type="text"
        className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />
      <button
        onClick={() => handleFinish("heeloooo")}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
      >
        Add Goal
      </button>
    </div>
  );
}

function Step3({ goBack, handleFinish }: StepProps) {
  return (
    <div>
      <button
        onClick={() => goBack && goBack()}
        className="mb-4 text-blue-500 hover:text-blue-700 transition-colors duration-300"
      >
        Back
      </button>
      <h2 className="text-xl font-bold mb-4">Review:</h2>
      <div className="bg-gray-200 rounded-md p-4 mb-4">Review here</div>
      <button
        onClick={() => handleFinish("hello")}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
      >
        Confirm
      </button>
    </div>
  );
}
