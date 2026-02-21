import { ReactNode } from "react";

interface BackgroundOverlayProps {
  children?: ReactNode;
  visible?: boolean;
  onClose?: () => any;
  className?: string;
  overlayStyle?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
}

export const BackgroundOverlay = ({
  children = <></>,
  visible = true,
  onClose = () => null,
  className = "",
  overlayStyle,
  wrapperStyle = {},
}: BackgroundOverlayProps) => {
  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${className}`}
      style={wrapperStyle}
    >
      {/* Overlay background */}
      <div
        className="absolute inset-0 bg-black/25 backdrop-blur-sm z-0"
        onClick={onClose}
        style={overlayStyle}
      />

      {/* Modal content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
