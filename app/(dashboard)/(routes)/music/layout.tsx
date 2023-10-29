import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexusAI - Music Model",
  description: "NexusAI Music Generation Model",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
