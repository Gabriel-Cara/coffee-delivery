import type { ElementType } from "react";

import { type BaseInputProps } from "./Input";

interface InputRadioProps extends BaseInputProps {
  icon: ElementType;
  tag: string;
  content: string;
}


export function Radio({ icon: Icon, tag, content, ...rest }: InputRadioProps) {
  return (
    <label htmlFor={tag} className="flex items-center gap-3 bg-base-button p-4 rounded-md has-checked:bg-purple-light has-checked:outline has-checked:outline-purple hover:bg-base-hover hover:text-base-subtitle">
      <Icon size={16} className="text-purple" />
      <span className="uppercase text-base-text text-xs">{content}</span>
      <input type="radio" id={tag} value={tag} className="hidden" {...rest} />
    </label>
  );
}