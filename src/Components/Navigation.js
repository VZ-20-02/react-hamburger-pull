import { Link } from "react-router-dom";
import './navigation.css'
import { useState, useEffect, useRef } from 'react'
const Navigation = () => {
    const ref = useRef();
    const [show, setShow] = useState(false)
    useOnClickOutside(ref, () => setShow(false));

    return (
        <nav>
            <img src="https://picsum.photos/30/30" alt="" />
            <ul ref={ref} className={show ? "show" : ""}>
                <li>
                    <Link to="/" onClick={() => setShow(false)}>Home</Link>
                </li>
                <li>
                    <Link to="/about" onClick={() => setShow(false)}>About</Link>
                </li>
                <li>
                    <Link to="/faq" onClick={() => setShow(false)}>FAQ</Link>
                </li>
            </ul>
            <div ref={ref} className={`hamburger ${show ? "show-x" : ""}`} onClick={() => setShow(!show)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}

export default Navigation;

// Hook
function useOnClickOutside(ref, handler) {
    useEffect(
        () => {
            const listener = event => {
                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }

                handler(event);
            };

            document.addEventListener('mousedown', listener);
            document.addEventListener('touchstart', listener);

            return () => {
                document.removeEventListener('mousedown', listener);
                document.removeEventListener('touchstart', listener);
            };
        },
        // Add ref and handler to effect dependencies
        // It's worth noting that because passed in handler is a new ...
        // ... function on every render that will cause this effect ...
        // ... callback/cleanup to run every render. It's not a big deal ...
        // ... but to optimize you can wrap handler in useCallback before ...
        // ... passing it into this hook.
        [ref, handler]
    );
}