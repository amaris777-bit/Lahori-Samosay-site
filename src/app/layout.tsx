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
      <head>
        {/* This injects Tailwind CSS into our raw browser build */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
