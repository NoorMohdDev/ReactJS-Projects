/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState, useRef, useLayoutEffect } from "react";


export function UseWindowResizeTest() {
    const windowSize = useWindowResize();
    const { width, height } = windowSize;
  
    return (
      <div>
        <h1>Use Window resize Hook</h1>
        <p>Width is {width}</p>
        <p>Height is {height}</p>
      </div>
    );
  }

export  function UseOnclickOutsideTest() {
    const [showContent, setShowContent] = useState(false);
    const ref = useRef();
    useOutsideClick(ref, () => setShowContent(false));
  
    return (
      <div>
        {showContent ? (
          <div ref={ref}>
            <h1>This is a random content</h1>
            <p>
              Please click outside of this to close this. It won't close if you
              click inside of this content
            </p>
          </div>
        ) : (
          <button className="border rounded" onClick={() => setShowContent(true)}>Show Content</button>
        )}
      </div>
    );
  }

export  function UseFetchHookTest() {
  const { data, error, pending } = UseFetch(
    "https://dummyjson.com/products",
    {}
  );

  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {pending ? <h3>Pending ! Please wait</h3> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((productItem) => (
            <p key={productItem.key}>{productItem.title}</p>
          ))
        : null}
    </div>
  );
}

export function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setPending(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      setData(result);
      setError(null);
      setPending(false);
    } catch (e) {
      setError(`${e}. Some Error Occured`);
      setPending(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, pending };
}

function useOutsideClick(ref, handler) {
  useEffect(() => {
    function listener(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    }

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler, ref]);
}

function useWindowResize() {
    const [windowSize, setWindowSize] = useState({
      width: 0,
      height: 0,
    });
  
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  
    useLayoutEffect(() => {
      handleResize();
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    return windowSize;
  }