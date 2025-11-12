import { Slide, useScrollTrigger } from "@mui/material";

interface Props {
  children: React.ReactElement;
}

export function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
