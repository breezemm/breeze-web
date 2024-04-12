import { useState, useEffect } from "react";

export default function useDebounce<T>(searchInputValue: T, delay: number) {
  const [debounceValue, setDebounceValue] = useState<T>(searchInputValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(searchInputValue);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [searchInputValue, delay]);
  return debounceValue;
}
