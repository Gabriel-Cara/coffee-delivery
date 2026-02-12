interface ItemProps {
  desc: string;
  background: string;
  icon: React.ElementType;
}

export function Item({ desc, background, icon: Icon }: ItemProps) {
  return (
    <span className="text-base-text inline-flex items-center gap-3">
      <Icon
        className={`${background} text-base-background rounded-full p-2`}
        size={32}
        weight="fill"
      />
      {desc}
    </span>
  );
}
