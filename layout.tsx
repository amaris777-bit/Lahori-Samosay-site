import React from 'react';

export const metadata = {
  title: 'Lahori Samosay',
  description: 'Authentic Street Food',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
