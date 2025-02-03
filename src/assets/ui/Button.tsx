import clsx from 'clsx';

interface ButtonProps {
    text: string,
    href?: string,
    onClick: () => void,
    variant?: "primary" | "secondary" | "outline",
    disabled?: boolean,
    fullWidth?: boolean,
    className?: string,
    icon?: React.ReactNode,
    iconPosition?: "right" | "left"
}

const Button = (props: ButtonProps) => {
    const variantStyles = {
        primary: "bg-white text-gray",
        secondary: "bg-gray text-white inset-ring-2 inset-ring-white/20",
        outline: "bg-transparent text-white inset-ring-2 inset-ring-white/20",
    }
    const defaultStyles = "z-40 cursor-pointer flex justify-center items-center max-h-10 min-w-10 px-4 py-6 rounded-lg font-barlow font-bold"
    return <>
        <button
            disabled={props.disabled}
           className={clsx(defaultStyles, props.variant ? variantStyles[props.variant] : variantStyles.primary, props.className)}
            onClick={props.onClick}
        >
            <span className=" flex justify-center items-center gap-2">
                {props.iconPosition === 'left' && props.icon}
                {props.text}
                {props.iconPosition !== 'left' && props.icon}
            </span>
        </button>
    </>;
};

export default Button;
