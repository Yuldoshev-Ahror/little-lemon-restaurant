import styles from "./Button.module.css";
export default function Button({
  children,
  as: Tag = "button",
  className = "",
  ...props
}) {
  return (
    <Tag className={`${styles.button} ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}
