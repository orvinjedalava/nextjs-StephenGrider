'use client';

import { NextUIProvider } from '@nextui-org/react';

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  // NextUIProvider sets the react context that all NextUI Components use across the application
  return (<NextUIProvider>{children}</NextUIProvider>);
}
