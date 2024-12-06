import React from 'react'

export default function CustomProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <> {children}</>;
}
