/** One cell of the dark problem grid. Place four inside a bordered 2×2 grid on #0d0d0d. */
export interface SignalCardProps {
  title?: string;
  children?: React.ReactNode;
  /** Optional 28px stroked line icon */
  icon?: React.ReactNode;
}
export function SignalCard(props: SignalCardProps): JSX.Element;
