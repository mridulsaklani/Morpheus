import React from 'react';

const CancellationRefundPolicy = () => {
  return (
    <div className=" py-36 pb-56 max-w-7xl mx-auto ">
      <h1 className="text-3xl font-bold text-red-600 mb-6">
        Cancellation and Refund Policy
      </h1>
      <p className="text-white mb-4">
        At Morpheous Gaming, we strive to provide a seamless and enjoyable experience for all our
        players. However, we understand that situations may arise where cancellations or refunds are
        necessary. Please read our policy carefully to understand how these situations are handled.
      </p>

      <h2 className="text-2xl font-semibold text-red-600 mb-4">1. Token Purchases</h2>
      <ul className="text-white list-disc ml-6 mb-4">
        <li>All token purchases on Morpheous Gaming are final and non-refundable.</li>
        <li>Tokens cannot be exchanged for cash, transferred to another user, or refunded under any circumstances.</li>
        <li>
          In the event of a technical issue during token purchase, please contact us at
          <span className="text-blue-500"> support@morpheousgaming.com</span> with relevant details, and we’ll work to resolve the issue.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-red-600 mb-4">2. Tournament Registrations</h2>
      <ul className="text-white list-disc ml-6 mb-4">
        <li>
          Once you register for a tournament and use your tokens to purchase a ticket, the registration is final and cannot be canceled.
        </li>
        <li>
          If a tournament is canceled or rescheduled by Morpheous Gaming:
          <ul className="list-disc ml-6">
            <li>You will receive a full refund of tokens used for registration.</li>
            <li>Any additional compensation will be decided at the discretion of Morpheous Gaming.</li>
          </ul>
        </li>
        <li>After registering, the tournament timing and details will be provided to you. It is the player’s responsibility to join the tournament on time.</li>
        <li>
          Failure to join the tournament at the specified time due to lateness, personal issues, or technical difficulties on the user’s end will result in the forfeiture of tokens, and no refunds will be issued.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-red-600 mb-4">3. Tournament Disqualification</h2>
      <ul className="text-white list-disc ml-6 mb-4">
        <li>
          Disqualification from a tournament due to rule violations (e.g., cheating, unsportsmanlike behavior) will result in the forfeiture of tokens used for entry. Refunds will not be provided.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-red-600 mb-4">4. Payment Disputes</h2>
      <ul className="text-white list-disc ml-6 mb-4">
        <li>
          If a payment for tokens is disputed (e.g., chargebacks or unauthorized transactions), Morpheous Gaming reserves the right to suspend or terminate the associated account until the issue is resolved.
        </li>
        <li>
          Users are encouraged to reach out to our support team for assistance with any payment-related concerns.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-red-600 mb-4">5. Technical Issues</h2>
      <ul className="text-white list-disc ml-6 mb-4">
        <li>
          If technical issues on the Morpheous Gaming platform prevent you from successfully completing a tournament registration or token purchase, contact our support team immediately.
        </li>
        <li>Refunds or token adjustments for technical issues will be evaluated on a case-by-case basis.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-red-600 mb-4">6. Contact Us for Assistance</h2>
      <p className="text-white mb-4">
        If you have any questions or concerns regarding cancellations or refunds, please don’t hesitate to contact us:
      </p>
      <ul className="text-white list-disc ml-6 mb-4">
        <li>Email: <span className="text-blue-500">support@morpheousgaming.com</span></li>
        <li>Support Hours: Monday to Saturday, 10 AM – 7 PM</li>
      </ul>

      <p className="text-white">
        Note: By using Morpheous Gaming, you agree to this Cancellation and Refund Policy. This policy is subject to change, and any updates will be communicated through platform announcements or email. We appreciate your understanding and thank you for being a part of the Morpheous Gaming community.
      </p>
    </div>
  );
};

export default CancellationRefundPolicy;
