import { useRef, useEffect } from 'react';

export default (callback: Function, deps: any[] = []) => {
  const init = useRef(true);
  useEffect(() => {
    if (init.current) {
      init.current = false;
    } else {
      return callback();
    }
  }, [callback, ...deps]);
};
