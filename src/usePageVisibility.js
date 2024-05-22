import { useEffect } from "react";

const usePageVisibility = () => {
    useEffect( () => {
        const handleVisibilityChange = () => {
            if ( document.hidden && /Mobi|Android/i.test( navigator.userAgent ) ) {
                document.body.style.visibility = "hidden";
            } else {
                document.body.style.visibility = "visible";
            }
        };

        document.addEventListener( "visibilitychange", handleVisibilityChange );

        return () => {
            document.removeEventListener( "visibilitychange", handleVisibilityChange );
        };
    }, [] );
};

export default usePageVisibility;
