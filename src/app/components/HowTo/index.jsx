const HowToRentAFridge = () => {
    const instructions = [
      {
        step: 'Step 1: Verify Eligibility',
        content:
          'Ensure you are a current university student living in student housing.',
      },
      {
        step: 'Step 2: Gather Required Documents',
        content:
          'Prepare documents like proof of student residence, registration, and photo ID.',
      },
      {
        step: 'Step 3: Contact the Agent',
        content:
          'Express interest in renting a fridge by phone or email.',
      },
      {
        step: 'Step 4: Submit Your Documents',
        content:
          'Share your documents with the agent for verification.',
      },
      {
        step: 'Step 5: Complete the Rental Process',
        content: 'Be present to receive and install the fridge after agent approval.',
      },
      // ... (remaining steps, if any)
    ];
  return (
    <div id="howTo" className="p-6 text-center bg-gray-100 ">

      <h2 className="text-3xl font-bold mb-6">How to Rent a Fridge</h2>
      <ul className="list-none space-y-3">
        {instructions.map((instruction, index) => (
          <li key={index} className="mb-3">
            <p>
              <span className="font-bold">{instruction.step}</span>
              <br />
              {instruction.content}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HowToRentAFridge;