import styles from '../../styles/components/extra/texts.module.scss';

interface TextsProps {
  text: string;
  color?: string;
  fontWeight?: 'normal' | 'bold' | 'lighter' | 'bolder' | 'initial' | 'inherit';
  fontStyle?: 'normal' | 'italic' | 'oblique' | 'initial' | 'inherit';
  fontSize?: string;
}

export default function Texts({ color, text, fontWeight, fontStyle, fontSize }: TextsProps) {
  return (
    <p className={styles.text} style={{ color, fontWeight, fontStyle, fontSize }}>
      {text}
    </p>
  );
}
