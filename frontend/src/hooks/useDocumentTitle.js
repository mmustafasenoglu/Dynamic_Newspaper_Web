import { useEffect } from 'react';

const useDocumentTitle = (title) => {
  useEffect(() => {
    if (title) {
      document.title = `Ferit Tercan | ${title}`;
    } else {
      document.title = 'Ferit Tercan | Haber & Blog';
    }
  }, [title]);
};

export default useDocumentTitle;
