import React from "react";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className=" max-w-7xl mx-auto py-20 pb-40 ">
      <div className=" shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-rose-600 mb-6">Privacy Policy</h1>

        <p className="text-white mb-6">
          At Morpheous Gaming, we prioritize the privacy and security of our users. This Privacy Policy outlines how we collect, use, and protect your personal information, as well as our stance on cheating and the legal framework governing our platform.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-rose-600 mb-4">1. Information We Collect</h2>
          <ul className="list-disc list-inside text-white space-y-2">
            <li><strong>Personal Information:</strong> Your name, email address, phone number, and other details provided during account registration or tournament participation.</li>
            <li><strong>Payment Information:</strong> Payment-related details processed securely through our gateways when purchasing tokens or tickets.</li>
            <li><strong>Usage Data:</strong> Interactions with the platform, including tournament participation, preferences, and activities.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-rose-600 mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside text-white space-y-2">
            <li><strong>To Provide Services:</strong> Facilitate registration, tournament participation, and account management.</li>
            <li><strong>To Improve Your Experience:</strong> Customize our platform and enhance user experience.</li>
            <li><strong>To Communicate with You:</strong> Send notifications, updates, and important account-related information.</li>
            <li><strong>For Legal Compliance:</strong> Adhere to laws and regulations as required.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-rose-600 mb-4">3. Data Security</h2>
          <p className="text-white">
            We implement various measures, including encryption, secure servers, and access controls, to safeguard your personal information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-rose-600 mb-4">4. Cheating and Fair Play</h2>
          <p className="text-white mb-4">
            Morpheous Gaming is committed to providing a fair and competitive environment. Cheating, including hacking, exploiting bugs, account sharing, boosting, collusion, or match-fixing, is strictly prohibited. Violations may result in account suspension or banning, prize forfeiture, and permanent exclusion from the platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-rose-600 mb-4">5. User Responsibilities</h2>
          <ul className="list-disc list-inside text-white space-y-2">
            <li><strong>Respecting Others:</strong> Treating players, staff, and users with respect, avoiding harassment or inappropriate behavior.</li>
            <li><strong>Following Laws:</strong> Ensuring platform use complies with applicable laws and regulations.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-rose-600 mb-4">6. Government Law and Compliance</h2>
          <p className="text-white mb-4">
            Morpheous Gaming adheres to the laws and regulations of the Republic of India, including the Information Technology Act, Consumer Protection Laws, and gambling laws ensuring tournaments are skill-based.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-rose-600 mb-4">7. Cookies and Tracking Technologies</h2>
          <p className="text-white">
            We use cookies and tracking technologies to improve your experience, personalize content, and analyze usage patterns. By using the platform, you consent to this usage.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-rose-600 mb-4">8. Third-Party Links</h2>
          <p className="text-white">
            Our platform may include links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-rose-600 mb-4">9. Changes to This Privacy Policy</h2>
          <p className="text-white">
            We may update this Privacy Policy at any time. Changes will be posted here with an updated revision date. Review this policy periodically.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-rose-600 mb-4">10. Contact Us</h2>
          <p className="text-white">
            If you have questions or concerns, contact us at:
          </p>
          <ul className="list-none space-y-2 text-white">
            <li><strong>Email:</strong> support@morpheousgaming.com</li>
            <li><strong>Phone:</strong><Link className="hover:text-rose-600 transition-all hover:translate-x-[6px]" href={"tel:8627819683"}> 8627819683</Link> </li>
            <li><strong>Address:</strong> 12/1 sector 41a market road Chandigarh  160036 India</li>
          </ul>
        </section>

        <p className="text-sm text-white mt-8">
          © {new Date().getFullYear()} Morpheous Gaming. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
