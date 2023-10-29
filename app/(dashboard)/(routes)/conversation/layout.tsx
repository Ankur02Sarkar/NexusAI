import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexusAI - Conversation Model",
  description: "GPT4 powered Conversation Model",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
