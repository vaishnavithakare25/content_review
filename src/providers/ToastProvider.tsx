

import type { PropsWithChildren } from "react";

import { Toaster } from "react-hot-toast";

export const ToastProvider = ({
  children,
}: PropsWithChildren) => {
  return (
    <>
      {children}

      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 3000,
        }}
      />
    </>
  );
};