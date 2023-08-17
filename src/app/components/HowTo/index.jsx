const TimelineBlock = ({ step, content }) => {
  return (
    <div className="relative flex items-start">
      <div className="flex-shrink-0 w-10 h-10 mt-1 bg-black rounded-full flex justify-center items-center">
        <svg
          className="w-6 h-6 mx-auto text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <div className="ml-4">
        <h3 className="font-bold">{step}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

const HowToRentAFridge = () => {
  const instructions = [
    {
      step: "Step 1: Verify Eligibility",
      content:
        "Ensure you are a current university student living in student housing.",
    },
    {
      step: "Step 2: Gather Required Documents",
      content:
        "Prepare documents like proof of student residence, registration, and photo ID.",
    },
    {
      step: "Step 3: Contact the Agent",
      content: "Express interest in renting a fridge by phone or email.",
    },
    {
      step: "Step 4: Submit Your Documents",
      content: "Share your documents with the agent for verification.",
    },
    {
      step: "Step 5: Complete the Rental Process",
      content:
        "Be present to receive and install the fridge after agent approval.",
    },
  ];
  return (
    <div id="howTo" className="p-6 text-start bg-white">
      <h2
        data-aos="fade-up"
        className="text-3xl font-bold mb-6 uppercase text-center"
      >
        How to Rent a Fridge
      </h2>
      <div className="mx-20 space-y-6">
        {instructions.map((instruction, index) => (
          <TimelineBlock
            key={index}
            step={instruction.step}
            content={instruction.content}
          />
        ))}
      </div>
    </div>
  );
};

export default HowToRentAFridge;