import { Suspense } from "react";
import { ExampleSubmission } from "../_components/ExampleSubmission";

export default function ExampleSubmissionPage() {
  return (
    <Suspense>
      <ExampleSubmission />
    </Suspense>
  );
}
