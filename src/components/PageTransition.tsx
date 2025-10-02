import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <div className="animate-fade-in">
      {children}
    </div>
  );
}
