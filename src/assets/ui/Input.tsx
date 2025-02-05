import clsx from "clsx";
import React from "react";

interface InputProps {
    placeHolder?: string
    name?: string
    type: string
    variant?: "primary" | "secondary" | "outline"
    disabled?: boolean
    fullWidth?: boolean
    className?: string
    register?: any
}

const Input = (props: InputProps) => {
    const variantStyles = {
        primary: "bg-white text-gray",
        secondary: "bg-gray text-white inset-ring-2 inset-ring-white/20",
        outline: "bg-transparent placeholder-gray-txt inset-ring-2 inset-ring-white/20",
    }
    const defaultStyles = "z-40 outline-none flex justify-center items-center max-h-10 min-w-10 pl-6 px-4 py-6 rounded-full font-sora text-sm md:text-base"
    return (
        <>
            <input
                className={clsx(defaultStyles, props.fullWidth? 'w-full md:w-auto' : '', props.variant ? variantStyles[props.variant] : variantStyles.primary, props.className)}
                type={props.type}
                placeholder={props.placeHolder}
                {...props.register(props.name)}

            />
        </>
  )
};

export default Input;
