import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexusAI - Image Generation Model",
  description: "NexusAI Image Generation Model",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
