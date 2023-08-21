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
      <div className="timeline-container">
        {instructions.map((instruction, index) => (
          <div key={index} className="timeline-card">
            <h3>{instruction.step}</h3>
            <p>{instruction.content}</p>
          </div>
        ))}
        <div className="timeline-line" />
      </div>
    </div>
  );
};
export default HowToRentAFridge;
