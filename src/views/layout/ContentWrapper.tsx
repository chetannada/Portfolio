import { ReactNode } from "react";

interface ContentWrapperProps {
  children: ReactNode;
}

const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return (
    <main className="min-h-[calc(100vh-2.6rem)] max-2xs:min-h-[calc(100vh-2.1rem)] mx-8 max-2xs:mx-4 pt-20 pb-10">
      {children}
    </main>
  );
};

export default ContentWrapper;
