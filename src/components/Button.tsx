import styles from "../styles/components/Button.module.css";

import Link from "next/link";

interface ButtonProps {
  text: string;
  onClick?: (e: any) => void;
  href?: string;
}

export default function Button(props: ButtonProps) {
  const renderButton = () => {
    return (
      <button className={styles.container} onClick={props.onClick}>
        {props.text}
      </button>
    );
  };

  return props.href ? (
    <Link href={props.href}>{renderButton()}</Link>
  ) : (
    renderButton()
  );
}
