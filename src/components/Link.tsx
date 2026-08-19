import NextLink from "next/link";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof NextLink>;

/** Default prefetch off so each page view does not fetch every nav route. */
export function Link({ prefetch = false, ...props }: Props) {
  return <NextLink prefetch={prefetch} {...props} />;
}
