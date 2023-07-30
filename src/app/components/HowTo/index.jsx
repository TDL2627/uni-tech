import Head from 'next/head';

const HowToRentAFridge = () => {
  const instructions = [
    {
      step: 'Step 1: Verify Eligibility',
      content:
        'To rent a fridge as a university student, ensure that you are currently enrolled as a student at the university and living in a student residence or university-approved accommodation.',
    },
    {
      step: 'Step 2: Gather Required Documents',
      content:
        'Prepare the following documents to show the agent for verification:',
      substeps: [
        'Proof of Student Residence: Provide a document that confirms your accommodation in a student residence.',
        'Student Registration: Submit proof of your current student registration at the university.',
        'Photo of ID: Provide a clear photo of your student ID or any valid identification document.',
      ],
    },
    {
      step: 'Step 3: Contact the Agent',
      content:
        'Reach out to the fridge rental agent or company to express your interest in renting a fridge. You can do this by phone or email.',
    },
    {
      step: 'Step 4: Submit Your Documents',
      content:
        'Share the documents you gathered with the agent for verification. They will assess your eligibility based on the provided information.',
    },
    {
      step: 'Step 5: Await Approval and Fee Details',
      content:
        'Wait for the agent to review your documents and verify your eligibility. Once approved, the agent will inform you about the rental fees and any other relevant details.',
    },
    {
      step: 'Step 6: Review the Contract',
      content:
        'Carefully review the rental contract provided by the agent. Make sure you understand all the terms and conditions before proceeding.',
    },
    {
      step: 'Step 7: Schedule Delivery',
      content:
        'If you agree with the terms and fees, contact the agent to set a delivery date for the fridge to your student residence.',
    },
    {
      step: 'Step 8: Complete the Rental Process',
      content:
        'On the scheduled delivery date, ensure you are present at the residence to receive the fridge. The agent may also help with the installation if required.',
    },
    {
      step: 'Step 9: Enjoy Your Rental Fridge',
      content: 'Congratulations! You now have a rented fridge to meet your needs during your time as a university student.',
    },
  ];

  return (
    <div className="p-6">
      <Head>
        <title>How to Rent a Fridge</title>
      </Head>
      <h1 className="text-3xl font-bold mb-6">How to Rent a Fridge</h1>
      <ol className="list-decimal list-inside space-y-3">
        {instructions.map((instruction, index) => (
          <li key={index}>
            <p>
              <span className="font-bold">{instruction.step}</span>
              <br />
              {instruction.content}
            </p>
            {instruction.substeps && (
              <ul className="list-disc list-inside ml-6 space-y-1">
                {instruction.substeps.map((substep, subIndex) => (
                  <li key={subIndex}>{substep}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default HowToRentAFridge;