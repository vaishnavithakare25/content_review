import type { PropsWithChildren } from "react";

import { QueryProvider } from "./QueryProvider";
import { ToastProvider } from "./ToastProvider";

export const AppProviders = ({
  children,
}: PropsWithChildren) => {
  return (
    <QueryProvider>
       <ToastProvider>
        {children}
      </ToastProvider>
    </QueryProvider>
  );
};