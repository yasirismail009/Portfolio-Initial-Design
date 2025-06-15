import CaseStudyDetail from "../../components/CaseStudyDetail";

export default function CaseStudyPage({ params }) {
  return <CaseStudyDetail id={params.id} />;
} 