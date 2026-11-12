// Small display formatters shared by the feed and the profile page.

/**
 * Compact count for engagement figures: 132 -> "132", 2000 -> "2k",
 * 16200 -> "16.2k", 1500000 -> "1.5M". One decimal at most, no trailing ".0".
 */
export const formatCount = (value: number) => {
  const abs = Math.abs(value);

  if (abs < 1000) return String(value);

  const [divisor, suffix] = abs < 1_000_000 ? [1000, "k"] : [1_000_000, "M"];
  // Cut, don't round: 16,299 is "16.2k", never "16.3k".
  const scaled = Math.floor((abs / divisor) * 10) / 10;

  return `${value < 0 ? "-" : ""}${scaled}${suffix}`;
};

/**
 * Relative time for a timestamp: "Just now", "5 minutes ago", "1 hour ago",
 * "3 days ago", and the date itself after a week. `now` is passed in so the
 * caller decides when "now" is (see useRelativeTime).
 */
export const formatRelativeTime = (
  date: string | number | Date,
  now: number,
) => {
  const time = new Date(date).getTime();

  if (!Number.isFinite(time)) return "";

  const seconds = Math.max(0, Math.floor((now - time) / 1000));
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const plural = (count: number, unit: string) =>
    `${count} ${unit}${count === 1 ? "" : "s"} ago`;

  if (seconds < 60) return "Just now";
  if (minutes < 60) return plural(minutes, "minute");
  if (hours < 24) return plural(hours, "hour");
  if (days < 7) return plural(days, "day");

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(time);
};
