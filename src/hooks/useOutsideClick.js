import { useRef } from "react";
import { useEffect } from "react";

function useOutsideClick(handler, listenCapturingPhase = true) {
    const ref = useRef();
    useEffect(() => {
        function handleClick(event) {
            if (ref.current && !ref.current.contains(event.target)) {
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
