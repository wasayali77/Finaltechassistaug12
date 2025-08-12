"use client";

import { useEffect, useState } from "react";
import {Shell} from "@360/portal-layout";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [appName, setAppName] = useState<string | null>(null);

  useEffect(() => {
    const currentUrl = window.location.origin;

    const appUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const envAppName = process.env.NEXT_PUBLIC_APP_NAME;

    if (currentUrl === appUrl) {
      setAppName(envAppName ?? "");
    } else {
      setAppName("portal");
    }
  }, []);

  return <Shell app={appName}>{children}</Shell>;
}
