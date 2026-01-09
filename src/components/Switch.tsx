import { mergeProps, Switch, useRender } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";

const switchVariants = cva(
  "cursor-pointer h-5.5 w-12 border-1 data-[checked]:border-none border-highlight rounded-full focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-foreground focus-visible:ring-2 bg-background shadow-inset data-[checked]:bg-primary"
);
const thumbVariants = cva(
  "h-5 w-5 bg-background border-1 border-highlight after:w-1.5 after:bg-primary  data-[checked]:after:rounded-full after:bg-muted-foreground after:h-1.5 after:absolute after:top-1/2 after:left-1/2 after:-translate-1/2 relative block ease-out transition-all duration-350 shadow-inset translate-x-0 data-[checked]:translate-x-6.5"
);
interface SwitchProps
  extends useRender.ComponentProps<"switch">,
    VariantProps<typeof switchVariants> {}
const NeuSwitch = (props: SwitchProps) => {
  const mergedProps = mergeProps(props, {
    className: switchVariants(),
  });

  const thumbProps = mergeProps(props, {
    className: thumbVariants(),
  });
  return (
    <Switch.Root {...mergedProps}>
      <Switch.Thumb {...thumbProps} />
    </Switch.Root>
  );
};

export default NeuSwitch;
