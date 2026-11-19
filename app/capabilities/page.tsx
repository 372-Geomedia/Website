import { PageIntro } from '@/components/site/page-intro';
import { Capabilities } from '@/components/site/capabilities';
import { InformationCycle } from '@/components/site/information-cycle';
import { ContactCTA } from '@/components/site/contact-cta';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata('Capabilities', 'GIS consulting and software development for emergency response, field operations and community planning.');

export default function CapabilitiesPage() {
  return (
    <>
      <PageIntro label="Capabilities" title="GIS consulting and software development" description="We build and maintain GIS platforms, analyze imagery and develop field applications for emergency response, infrastructure and community planning." />
      <Capabilities showApplications />
      <InformationCycle />
      <ContactCTA />
    </>
  );
}
