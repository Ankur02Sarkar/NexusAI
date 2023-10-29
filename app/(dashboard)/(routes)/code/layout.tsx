import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexusAI - Code Generation Model",
  description: "GPT4 powered Code Generation Model",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
