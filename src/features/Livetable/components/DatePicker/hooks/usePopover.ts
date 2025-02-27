import { useState } from 'react';
import type { MouseEvent } from 'react';

const usePopover = () => {
  const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);
  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => setAnchor(event.currentTarget);
  const handleClose = () => setAnchor(null);

  return { anchor, handleOpen, handleClose };
};

export default usePopover;
