import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/shared/legal-page";
import { PageHero } from "@/components/shared/page-hero";
import { school } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Saint Mary’s School, Jagda, Raurkela handles information shared through this website.",
  path: "/privacy-policy",
});

const sections: LegalSection[] = [
  {
    id: "overview",
    title: "Overview",
    body: (
      <p>
        This policy explains how {school.name}, {school.locality}, {school.city} (&ldquo;the school&rdquo;,
        &ldquo;we&rdquo;) handles personal information shared through this website. We collect only what is needed to
        respond to your enquiry, and we treat it with care.
      </p>
    ),
  },
  {
    id: "information",
    title: "Information we collect",
    body: (
      <>
        <p>When you submit the enquiry form on our Contact page, we receive:</p>
        <ul>
          <li>Parent or guardian name</li>
          <li>Phone number</li>
          <li>Email address (optional)</li>
          <li>The class or admission interest you select</li>
          <li>Any message you choose to include</li>
        </ul>
        <p>
          Please do not include sensitive information about your child (such as health details or identity numbers) in
          the enquiry form. The full admission form is completed separately through the school office.
        </p>
      </>
    ),
  },
  {
    id: "use",
    title: "How we use it",
    body: (
      <>
        <p>Information you share is used only to:</p>
        <ul>
          <li>Respond to your enquiry</li>
          <li>Provide information about admission and the school</li>
        </ul>
        <p>
          Enquiries are sent over an encrypted (HTTPS) connection and forwarded only to the school&rsquo;s own enquiry
          inbox. We do not sell, rent or trade your information, and we do not use it for unrelated marketing.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and analytics",
    body: (
      <p>
        This website does not use advertising or tracking cookies. If analytics are added in future to help us improve
        the site, this policy will be updated to describe them.
      </p>
    ),
  },
  {
    id: "retention",
    title: "Storage and retention",
    body: (
      <p>
        Enquiries are kept only for as long as needed to respond and to follow up on admission-related questions, after
        which they are deleted. Reasonable measures are taken to protect information from unauthorised access.
      </p>
    ),
  },
  {
    id: "rights",
    title: "Your choices",
    body: (
      <p>
        You may ask the school to correct or delete information you have shared through this website by calling{" "}
        <a href={school.contact.phone.href}>{school.contact.phone.display}</a>, emailing{" "}
        <a href={school.contact.email.href}>{school.contact.email.display}</a>, or visiting the school office at{" "}
        {school.address.short}.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy from time to time. The latest version will always be available on this page. See also
        our <Link href="/terms">Website Terms</Link>.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        crumb={{ name: "Privacy Policy", path: "/privacy-policy" }}
        eyebrow="Legal"
        title={["Privacy Policy"]}
        size="md"
        intro={<p>How we handle the information you share with us through this website.</p>}
      />
      <LegalPage sections={sections} updated="October 2026" />
    </>
  );
}
