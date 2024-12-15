import useTitle from "@/hooks/useTitle";
import React from "react";

const TermsAndConditionsPage = () => {
  useTitle("Terms and Conditions")
  return (
    <div className="flex flex-col items-center min-h-screen content pt-20 mb-20">
      <div className="w-full max-w-4xl border rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Terms of Service
        </h2>
        <p className="mb-6 text-gray-600">
          Effective Date: <strong>16/12/2024</strong>
        </p>
        <p className="mb-6 text-gray-600">
          Welcome to <strong>Tuplespot</strong> ("we," "our," or "us"). By using
          our visual testing automation software ("Service"), you agree to
          comply with and be bound by the following Terms of Service. Please
          read them carefully before using our Service.
        </p>

        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            1. Acceptance of Terms
          </h3>
          <p className="text-gray-600">
            By accessing or using our Service, you confirm that you accept these
            Terms of Service and agree to abide by them. If you do not agree to
            these terms, you must not use our Service.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            2. Description of Service
          </h3>
          <p className="text-gray-600">
            <strong>Tuplespot</strong> provides a visual testing automation
            platform designed to assist users in identifying visual
            discrepancies in their web applications or projects.
          </p>
          <p className="text-gray-600">
            The Service includes features such as visual comparison, test
            reports, and integration with third-party tools, subject to
            subscription plans and availability.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            3. User Responsibilities
          </h3>
          <ul className="list-disc pl-6 text-gray-600">
            <li>
              You must provide accurate and up-to-date information during
              registration and maintain the confidentiality of your account
              credentials.
            </li>
            <li>
              You agree not to use the Service for any unlawful or unauthorized
              purposes.
            </li>
            <li>
              You are responsible for all activity under your account and must
              notify us immediately if you suspect unauthorized access.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            4. Prohibited Conduct
          </h3>
          <p className="text-gray-600">
            While using the Service, you agree not to:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>
              Upload or distribute malicious files, viruses, or harmful code.
            </li>
            <li>
              Engage in any activity that interferes with or disrupts the
              Service.
            </li>
            <li>
              Reverse engineer, decompile, or attempt to access the source code.
            </li>
            <li>Violate any applicable laws or regulations.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            5. Intellectual Property
          </h3>
          <p className="text-gray-600">
            All content, trademarks, logos, and intellectual property associated
            with <strong>Tuplespot</strong> are owned by us or our licensors.
            You may not use or reproduce them without prior written permission.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            6. Limitation of Liability
          </h3>
          <p className="text-gray-600">
            To the extent permitted by law, <strong>Tuplespot</strong> and its
            affiliates are not liable for any indirect, incidental,
            consequential, or punitive damages arising from your use of the
            Service.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            7. Termination
          </h3>
          <p className="text-gray-600">
            We reserve the right to suspend or terminate your access to the
            Service at our sole discretion, without notice, for any breach of
            these Terms or other lawful reasons.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            8. Changes to Terms
          </h3>
          <p className="text-gray-600">
            We may update these Terms of Service periodically. Continued use of
            the Service constitutes your acceptance of any changes.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            9. Governing Law
          </h3>
          <p className="text-gray-600">
            These Terms are governed by and construed in accordance with the
            laws of [Insert Jurisdiction]. Any disputes will be subject to the
            exclusive jurisdiction of the courts in [Insert Jurisdiction].
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            10. Contact Us
          </h3>
          <p className="text-gray-600">
            If you have questions about these Terms of Service, please contact
            us at:
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

export default TermsAndConditionsPage;
