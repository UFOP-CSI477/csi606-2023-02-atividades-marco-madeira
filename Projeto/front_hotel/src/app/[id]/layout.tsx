import NavBar from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="my-12 mx-16 gap-y-6">
      <NavBar />
      {children}
    </div>
  );
}
