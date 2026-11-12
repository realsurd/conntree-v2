import { SiAlgorand } from "react-icons/si";
import { formatCount } from "@/utils/format";
import { AwardIcon } from "./icons";

// Figma's "Orange linear" gradient, used for the reward figure.
const ORANGE_GRADIENT =
  "linear-gradient(255.59deg, #FB8500 8.38%, #FB8500 13.58%, #FB8500 18.78%, #FF8C0B 23.99%, #FF8B07 29.19%, #FC8A09 34.39%, #FB8B0C 39.59%, #FC8F14 44.79%, #FF8F11 50%, #FF931A 55.2%, #F89525 60.4%, #FF9721 65.6%, #FF931A 70.8%, #F58C02 76%, #FF9317 81.21%, #FF8F11 86.41%, #FFA138 91.61%)";

interface Props {
  /** Total rewards earned; null when the figure is not available. */
  total: number | null;
  loading?: boolean;
}

/**
 * The compact "Total Rewards" badge from the profile header. Rewards are
 * shown with the Algorand mark, like the reward on every post card.
 */
export const ProfileRewards = ({ total, loading = false }: Props) => {
  const unavailable = !loading && total === null;

  return (
    <p
      className="relative flex shrink-0 flex-col items-center gap-0.5 overflow-hidden rounded-full bg-[#FB8501]/10 px-9 py-1.5"
      title={unavailable ? "Rewards are not available yet" : undefined}
    >
      {/* Two medals sit behind the figures, greyed by the luminosity blend. */}
      <AwardIcon className="pointer-events-none absolute left-[calc(50%-52px)] top-[calc(50%-16px)] size-8 -translate-x-1/2 -translate-y-1/2 -rotate-[26deg] text-[#FB8500] mix-blend-luminosity" />
      <AwardIcon className="pointer-events-none absolute -bottom-[9px] -right-2 size-8 -rotate-[26deg] text-[#FB8500] mix-blend-luminosity" />

      <span className="relative text-[9px] leading-tight text-white">
        Total Rewards
      </span>
      <span className="relative flex items-center gap-[3px] rounded-full bg-[#FB8501]/10 px-1.5 py-0.5">
        <span className="grid size-[18px] place-items-center rounded-full bg-[#FB8501]/10 text-[#FB8500]">
          <SiAlgorand size={13} aria-hidden="true" />
        </span>
        {loading ? (
          <span
            className="h-4 w-7 animate-pulse rounded bg-white/10"
            aria-label="Loading rewards"
          />
        ) : (
          <span
            className="bg-clip-text font-goodtiming text-[15px] leading-[18px] text-transparent"
            style={{ backgroundImage: ORANGE_GRADIENT }}
          >
            {total === null ? "—" : formatCount(total)}
          </span>
        )}
      </span>
    </p>
  );
};
