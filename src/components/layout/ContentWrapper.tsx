import { ReactNode } from "react";

interface ContentWrapperProps {
  children: ReactNode;
}

const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return (
    <main className="min-h-[calc(100vh-2.6rem)] max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-24 pb-10">
      {children}
    </main>
  );
};

export default ContentWrapper;
