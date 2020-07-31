import { useRef, useEffect } from 'react';

export default (callback: Function, deps: any[] = []) => {
  const init = useRef(true);
  useEffect(() => {
    if (init.current) {
      init.current = false;
    } else {
      return callback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback, ...deps]);
};
