import useTitle from "@/hooks/useTitle";
import React from "react";

const PrivacyPolicyPage = () => {
  useTitle("Privacy Policy");
  return (
    <div className="flex flex-col items-center min-h-screen content pt-20 mb-20">
      <div className="w-full max-w-4xl border rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Privacy Policy
        </h2>
        <p className="mb-6 text-gray-600">
          Effective Date: <strong>16/12/2024</strong>
        </p>
        <p className="mb-6 text-gray-600">
          <strong>Tuplespot</strong> ("we," "our," or "us") is committed to
          protecting your privacy. This Privacy Policy explains how we collect,
          use, and disclose your information when you use our visual testing
          automation software ("Service"). By using our Service, you agree to
          the terms outlined below.
        </p>

        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            1. Information We Collect
          </h3>
          <p className="text-gray-600 mb-2">
            We collect certain information when you use our Service, which may
            include:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>
              <strong>Personal Information</strong>: Name, email address, and
              other contact details provided during account creation.
            </li>
            <li>
              <strong>Usage Data</strong>: Information about how you use our
              Service, such as uploaded visual assets, test settings, logs, and
              results.
            </li>
            <li>
              <strong>Cookies and Tracking Technologies</strong>: Cookies, log
              files, and similar technologies to enhance your user experience.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            2. How We Use Your Information
          </h3>
          <p className="text-gray-600 mb-2">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>
              <strong>Service Provision</strong>: To process and execute visual
              tests.
            </li>
            <li>
              <strong>Improvement and Optimization</strong>: To enhance the
              features and performance of our software.
            </li>
            <li>
              <strong>Customer Support</strong>: To respond to inquiries and
              resolve technical issues.
            </li>
            <li>
              <strong>Analytics</strong>: To monitor usage trends and improve
              user experience.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            3. Sharing Your Information
          </h3>
          <p className="text-gray-600">
            We do not sell or share your information with third parties except
            as required for the operation of our Service or by law. We may share
            data with:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>
              <strong>Service Providers</strong>: Trusted third-party vendors
              assisting with hosting, analytics, and communication.
            </li>
            <li>
              <strong>Legal Compliance</strong>: Authorities or entities to
              comply with applicable laws or regulations.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            4. Data Retention
          </h3>
          <p className="text-gray-600">
            We retain your information for as long as necessary to provide our
            Service and fulfill the purposes described in this Privacy Policy.
            Once your information is no longer needed, we securely delete or
            anonymize it.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            5. Data Security
          </h3>
          <p className="text-gray-600">
            We employ industry-standard security measures to protect your data.
            However, no method of data transmission or storage is entirely
            secure. We encourage you to use strong passwords and take necessary
            precautions when using our Service.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            6. Your Rights
          </h3>
          <p className="text-gray-600">
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Access and update your information.</li>
            <li>Request deletion of your personal data.</li>
            <li>Opt-out of non-essential data collection or processing.</li>
          </ul>
          <p className="text-gray-600">
            To exercise these rights, contact us at{" "}
            <strong>support@tupplespot.com</strong>.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            7. Changes to this Privacy Policy
          </h3>
          <p className="text-gray-600">
            We may update this Privacy Policy to reflect changes in our
            practices or for other operational, legal, or regulatory reasons. We
            will notify you of any significant changes by posting the revised
            policy on our website.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            8. Contact Us
          </h3>
          <p className="text-gray-600">
            If you have questions about this Privacy Policy or our data
            practices, please contact us at:
          </p>
          <ul className="list-none pl-0 text-gray-600">
            <li>Tuplespot</li>
            <li>Dhanmondi, Dhaka, Bangladesh</li>
            <li>
              Email: <strong>support@tuplespot.com</strong>
            </li>
            <li>
              Phone: <strong>+8801521305382</strong>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
