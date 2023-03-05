import { useEffect, useState } from 'react';

const useDocumentLoadCompleted = (): boolean => {
  const [isLoaded, setIsLoaded] = useState(false);
  const loaded = () => setIsLoaded(true);

  useEffect(() => {
    if (document.readyState === 'complete') {
      loaded();
      return;
    }
    // またページが完全に読み込まれていないので、読み込みが完了したら処理させる
    window.addEventListener('load', loaded, {
      once: true,
      passive: true,
    });
    return () => {
      window.removeEventListener('load', loaded);
    };
  }, []);

  return isLoaded;
};

export default useDocumentLoadCompleted;
