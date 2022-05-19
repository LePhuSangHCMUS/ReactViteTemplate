import React from 'react'
// import styles from "./SampleComponent.module.less"
// import classNames from "classnames"
interface IProps{
    title: string,
    size?: "small" | "medium" | "large",
    backgroundColor: string,
    className?: string,
    onClick: () => {},
    disabled?: boolean,
    borderRadius:string,
  }
export default function SampleButton({title,size,backgroundColor,className,onClick,disabled,borderRadius}:IProps) {
  return (
      <button disabled={disabled}  onClick={onClick}>{ title}</button>
  )
}
