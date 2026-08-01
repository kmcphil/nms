/** One numbered step in the White Space Growth Framework. Render four inside a two-column <ol>. */
export interface FrameworkStepProps {
  number?: string;
  title?: string;
  children?: React.ReactNode;
}
export function FrameworkStep(props: FrameworkStepProps): JSX.Element;
