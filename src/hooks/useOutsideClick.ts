import { useRef, useEffect, RefObject } from "react";

function useOutsideClick<T extends HTMLElement = HTMLElement>(
    handler: () => void,
    listenCapturingPhase: boolean = true
): RefObject<T> {
    const ref = useRef<T>(null);
    
    useEffect(() => {
        function handleClick(event: MouseEvent): void {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                handler();
            }
        }
        
        document.addEventListener("click", handleClick, listenCapturingPhase); // listen for clicks outside the modal on the capture phase (as the event moves down the DOM tree)
        
        return () =>
            document.removeEventListener(
                "click",
                handleClick,
                listenCapturingPhase
            );
    }, [handler, listenCapturingPhase]);
    
    return ref;
}

export default useOutsideClick;
