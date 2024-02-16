import NavBar from "@/components/NavBar";
import { ReactNode } from "react";

interface ContentLayoutProps {
  children: ReactNode;
}

export default function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <div className="my-16 mx-16 gap-y-6 w-full">
      <NavBar />
      <div className="p-8">{children}</div>
    </div>
  );
}
