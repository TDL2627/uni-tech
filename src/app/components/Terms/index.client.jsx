const TermsAndConditions = () => {
  return (
    <div className="bg-white py-12 mt-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Rental Terms and Conditions
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Please read these terms and conditions carefully before renting a
          fridge from UniTech. By renting a fridge, you agree to comply with the
          following terms and conditions:
        </p>
        <ol className="list-decimal list-inside mb-8">
          <li>
            <p className="text-lg text-gray-700">
              <span className="font-bold">Rental Period:</span> The rental
              period begins on the agreed delivery date and continues until the
              end of the specified rental duration.
            </p>
          </li>
          <li>
            <p className="text-lg text-gray-700">
              <span className="font-bold">Payment:</span> Rental fees must be
              paid in full before the delivery of the fridge. Late payments may
              incur additional charges.
            </p>
          </li>
          <li>
            <p className="text-lg text-gray-700">
              <span className="font-bold">Use and Care:</span> The rented fridge
              should be used for its intended purpose and maintained in good
              condition. Any damages or malfunctions must be reported to UniTech
              promptly.
            </p>
          </li>
          <li>
            <p className="text-lg text-gray-700">
              <span className="font-bold">Return of Fridge:</span> At the end of
              the rental period, the fridge must be returned to UniTech in the
              same condition as received. Any missing or damaged parts may
              result in repair or replacement charges.
            </p>
          </li>
          <li>
            <p className="text-lg text-gray-700">
              <span className="font-bold">Cancellation:</span> Cancellation
              requests must be submitted at least [X] days before the scheduled
              delivery date to receive a refund. A cancellation fee may apply.
            </p>
          </li>
          <li>
            <p className="text-lg text-gray-700">
              <span className="font-bold">Receipt and Charges:</span> A dated
              receipt will be issued by UniTech upon receipt of the rental
              amount. The receipt will indicate the amount received, any arrears
              due, deposit kept, repair costs, and any other charges incurred
              during the period for which the rental amount was paid.
            </p>
          </li>
          <li>
            <p className="text-lg text-gray-700">
              <span className="font-bold">Deposit:</span> The Lessee cannot
              apply the deposit as payment of the last month’s rental or any
              other rental due to UniTech.
              <br />
              <span className="font-bold">5.3:</span> UniTech may deduct amounts
              payable under this agreement, which remain unpaid after the due
              date, from the deposit. Should such a deduction be made, UniTech
              may request the Lessee to immediately pay an amount to reinstate
              the deposit to its full amount. Should this not be reinstated,
              UniTech will retrieve the rental item from the lessee. UniTech is
              further entitled to deduct from the deposit in addition to extra
              reasonable costs associated with the repair of damages, faults,
              alterations, or repairs caused to the appliance during the lease
              period.
              <br />
              <span className="font-bold">5.4:</span> The balance of the deposit
              could be refunded to the lessee within 14 days after the end of
              the lease agreement to allow the appliance to be assessed for any
              damages, faults, or alterations.
              <br />
              <span className="font-bold">5.5:</span> If no amounts are due and
              owing at the end of this lease agreement and if no damages,
              faults, or alterations are found, the deposit will be refunded to
              the Lessee, in full, within 14 days after the end of the lease
              agreement.
            </p>
          </li>
          <li>
            <p className="text-lg text-gray-700">
              <span className="font-bold">
                Appliance Condition Inspection and Costs:
              </span>
              <br />
              <span className="font-bold">6.1:</span> Images of the appliance
              were taken at the time and day of delivery for future appliance
              condition inspection. When UniTech receives the appliance at the
              end of the lease agreement and upon inspection if there are any
              damages, faults, or alterations that occurred regarding the
              appliance as to the condition the appliance was delivered as, the
              deposit will be forfeited and used as a fraction of the cost of
              damages, faults, or alterations of the appliance.
              <br />
              <span className="font-bold">6.2:</span> The lessee acknowledges
              that when receiving, the appliance is in a good state/condition,
              and such is a witness to these conditions when signing the
              agreement.
              <br />
              <span className="font-bold">6.3:</span> Upon termination of the
              lease agreement, the lessee must restore the appliance to UniTech
              in the same condition it was received at the start of the lease.
              No tampering or self-inspection of machinery of the appliance is
              allowed. The Lessee could be liable for any damage or defects of
              the appliance, whether visible or concealed during the inspection.
              <br />
              <span className="font-bold">6.4:</span> UniTech has no
              responsibility or liability towards the cost of damages, faults,
              alterations, accidents, and natural disasters as soon as the
              appliance has been delivered to the Lessee (Internal machinery
              breakdowns, gas consumption excluded). The Lessee becomes
              responsible and reliable for the appliance costs as if it was
              his/her own. All costs and responsibility will fall on the Lessee.
              <br />
              <span className="font-bold">6.5:</span> UniTech and the Lessee
              agree to the jurisdiction of the Magistrate’s Court, should any
              legal actions or proceedings relating to this agreement or breach
              thereof be instituted.
            </p>
          </li>
          <li>
            <p className="text-lg text-gray-700">
              <span className="font-bold">Cancellation:</span>
              <br />
              <span className="font-bold">7.1:</span> Agreement of the contract
              binds the lessee to the agreed upon contract period. The lessee is
              obligated to pay the monthly rental amount until the lease period
              ends.
              <br />
              <span className="font-bold">7.2:</span> Should the Lessee cancel
              the lease before the lease period expires, the deposit will be
              used as a cancellation fee, and the appliance will be collected
              immediately.
            </p>
          </li>
          {/* Add more terms and conditions as needed */}
        </ol>
        <p className="text-lg text-gray-700">
          These terms and conditions constitute the entire agreement between the
          renter and UniTech. By renting a fridge, you acknowledge that you have
          read, understood, and agreed to these terms.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
