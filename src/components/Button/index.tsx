import { classMerge } from "../../utils/classMerge";

type Props = React.ComponentProps<"button"> & {
  title: string;
  variant?: "base" | "hero";
};

const variants = {
  button: {
    base: "w-40 text-green-300 border-green-300 hover:text-black hover:border-black ",
    hero: "w-50 text-black border-black hover:text-white hover:border-white",
  },
};

export function Button({ title, variant = "base", ...rest }: Props) {
  return (
    <button
      className={classMerge([
        "m-auto py-3 text-base outline-none border-2 rounded-full uppercase cursor-pointer transition]",
        variants.button[variant],
      ])}
      {...rest}
    >
      {title}
    </button>
  );
}
