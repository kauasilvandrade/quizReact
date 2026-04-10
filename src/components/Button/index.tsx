type Props = React.ComponentProps<"button"> & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <button
      className="w-50 m-auto py-3 text-base outline-none text-black border border-black rounded-full uppercase cursor-pointer hover:text-white hover:border-white transition"
      {...rest}
    >
      {title}
    </button>
  );
}
