import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexusAI - Video Model",
  description: "NexusAI Video Generation Model",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
