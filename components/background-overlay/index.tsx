import { ReactNode } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';

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
  className,
  overlayStyle,
  wrapperStyle = {},
}: BackgroundOverlayProps) => {
  return visible ? (
    <div className={classNames(styles['wrapper'], className)} style={wrapperStyle}>
      <div className={styles['overlay']} onClick={onClose} style={overlayStyle}></div>
      {children}
    </div>
  ) : null;
};
