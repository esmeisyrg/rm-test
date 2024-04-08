import styles from '../../styles/components/extra/texts.module.scss';

interface TextsProps {
  text: string;
  color?: string;
  fontWeight?: 'normal' | 'bold' | 'lighter' | 'bolder' | 'initial' | 'inherit';
  fontStyle?: 'normal' | 'italic' | 'oblique' | 'initial' | 'inherit';
  fontSize?: string;
  className?: string;
}

export default function Texts({ color, text, fontWeight, fontStyle, fontSize, className }: TextsProps) {
  const combinedClassName = className ? `${styles.text} ${className}` : styles.text;

  return (
    <p className={combinedClassName} style={{ color, fontWeight, fontStyle, fontSize }}>
      {text}
    </p>
  );
}