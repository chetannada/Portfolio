import { ReactNode } from "react";

interface ContentWrapperProps {
  children: ReactNode;
}

const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return (
    <main className="min-h-[calc(100vh-2.6rem)] mx-16 max-xs:mx-8 pt-20 pb-10">
      {children}
    </main>
  );
};

export default ContentWrapper;
