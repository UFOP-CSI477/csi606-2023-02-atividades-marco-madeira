"use client";

import { ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

interface QueryProviderProps {
  children: ReactElement;
}

export default function QueryProvider({ children }: QueryProviderProps) {
  const client = new QueryClient();

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
