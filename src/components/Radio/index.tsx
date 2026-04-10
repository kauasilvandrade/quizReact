import { useState } from "react";
import { classMerge } from "../../utils/classMerge";
import styles from "./app.module.css";

type Props = {
  options: string[];
  value: string;
  setValue: (value: string) => void;
};

export function Radio({ options, value, setValue, ...rest }: Props) {
  const [focused, setFocused] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <div>
      {options.map((option) => (
        <label
          className={classMerge([
            "block pl-6 mb-4 text-base relative",
            styles.container,
            value === option ? styles.ativado : "",
            focused === option ? styles.focused : "",
          ])}
        >
          <input
            type="radio"
            value={option}
            checked={value === option}
            onChange={handleChange}
            onFocus={() => setFocused(option)}
            onBlur={() => setFocused(null)}
            {...rest}
            className={styles.input}
          />
          {option}
        </label>
      ))}
    </div>
  );
}
