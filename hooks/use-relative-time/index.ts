"use client";

import { useEffect, useState } from "react";
import { formatRelativeTime } from "@/utils/format";

/**
 * "1 hour ago" for a timestamp, worked out in the browser after the page has
 * loaded. The server does not know the visitor's clock, so rendering the text
 * on the server and again on the client could give two different strings and
 * a hydration warning. Until the page has loaded this returns null.
 */
export const useRelativeTime = (date?: string | number | Date) => {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
  }, []);

  if (!date || now === null) return null;

  return formatRelativeTime(date, now);
};
