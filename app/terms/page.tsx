import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/shared/legal-page";
import { PageHero } from "@/components/shared/page-hero";
import { school } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Website Terms",
  description: "Terms of use for the website of Saint Mary’s School, Jagda, Raurkela.",
  path: "/terms",
});

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Using this website",
    body: (
      <p>
        This website is provided by {school.name}, {school.locality}, {school.city} to share information about the
        school with parents, students and visitors. By using the site, you agree to these terms.
      </p>
    ),
  },
  {
    id: "information",
    title: "Accuracy of information",
    body: (
      <p>
        We take care to keep information on this website accurate and current. However, details such as admission
        procedures, timelines and school arrangements may change. Official information is always confirmed by the school
        office, and nothing on this website constitutes an offer or guarantee of admission.
      </p>
    ),
  },
  {
    id: "content",
    title: "Content and images",
    body: (
      <p>
        Text, photographs, logos and other content on this website belong to the school or are used with permission.
        Please do not copy or reuse them, particularly photographs of students, without the school&rsquo;s written
        consent.
      </p>
    ),
  },
  {
    id: "conduct",
    title: "Acceptable use",
    body: (
      <ul>
        <li>Do not submit false, misleading or offensive information through the enquiry form.</li>
        <li>Do not attempt to disrupt, damage or gain unauthorised access to the website.</li>
      </ul>
    ),
  },
  {
    id: "links",
    title: "External links",
    body: (
      <p>
        Links to external services (such as maps) are provided for convenience. The school is not responsible for the
        content or privacy practices of external websites.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing law",
    body: <p>These terms are governed by the laws of India.</p>,
  },
  {
    id: "privacy",
    title: "Privacy",
    body: (
      <p>
        Please read our <Link href="/privacy-policy">Privacy Policy</Link> to understand how information shared through
        this website is handled.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        crumb={{ name: "Terms", path: "/terms" }}
        eyebrow="Legal"
        title={["Website Terms"]}
        size="md"
        intro={<p>The terms that apply when you use this website.</p>}
      />
      <LegalPage sections={sections} updated="October 2026" />
    </>
  );
}
