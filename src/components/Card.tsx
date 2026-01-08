import { mergeProps, useRender } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const cardVariants = cva("rounded-2xl border-border border-3", {
  variants: {
    variant: {
      raised: "shadow-raised",
      inset: "shadow-inset",
    },
  },
  defaultVariants: {
    variant: "raised",
  },
});
interface CardProps
  extends useRender.ComponentProps<"div">,
    VariantProps<typeof cardVariants> {}

const Card = (props: CardProps) => {
  const mergedProps = mergeProps(props, {
    className: twMerge(
      cardVariants({
        variant: props.variant,
      })
    ),
  });
  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });
  return element;
};

export default Card;

//Card Header
const cardHeaderVariants = cva("flex flex-col space-y-1.5 p-6");
interface cardHeaderProps
  extends useRender.ComponentProps<"div">,
    VariantProps<typeof cardHeaderVariants> {}

export const CardHeader = (props: cardHeaderProps) => {
  const mergedProps = mergeProps(props, {
    className: cardHeaderVariants(),
  });
  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });
  return element;
};

//Card Title

const cardTitleVariants = cva("font-semibold leading-none tracking-tight");
interface cardTitleProps
  extends useRender.ComponentProps<"div">,
    VariantProps<typeof cardTitleVariants> {}

export const CardTitle = (props: cardTitleProps) => {
  const mergedProps = mergeProps(props, {
    className: cardTitleVariants(),
  });
  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });
  return element;
};

//Card Description

const cardDescriptionVariants = cva("text-sm text-muted-foreground");
interface cardDescriptionProps
  extends useRender.ComponentProps<"div">,
    VariantProps<typeof cardDescriptionVariants> {}

export const CardDescription = (props: cardDescriptionProps) => {
  const mergedProps = mergeProps(props, {
    className: cardDescriptionVariants(),
  });
  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });
  return element;
};

//Card Content

const cardContentVariants = cva("p-6 pt-0");
interface cardContentProps
  extends useRender.ComponentProps<"div">,
    VariantProps<typeof cardDescriptionVariants> {}

export const CardContent = (props: cardContentProps) => {
  const mergedProps = mergeProps(props, {
    className: cardContentVariants(),
  });
  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });
  return element;
};
//Card Footer

const cardFooterVariants = cva("p-6 pt-0");
interface cardFooterProps
  extends useRender.ComponentProps<"div">,
    VariantProps<typeof cardFooterVariants> {}

export const CardFooter = (props: cardFooterProps) => {
  const mergedProps = mergeProps(props, {
    className: cardFooterVariants(),
  });
  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });
  return element;
};
