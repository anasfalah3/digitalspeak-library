import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...rest }: InputProps) {
  return (
    <input
      {...rest}
      className={clsx(
        "h-10 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
        className
      )}
    />
  );
}
