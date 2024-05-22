import { useEffect } from "react";

const usePreventScreenshot = () => {
    useEffect( () => {
        const handleVisibilityChange = () => {
            if ( document.hidden && /Mobi|Android/i.test( navigator.userAgent ) ) {
                document.body.classList.add( "background-hidden" );
            } else {
                document.body.classList.remove( "background-hidden" );
            }
        };

        const handleScreenshot = () => {
            document.body.classList.add( "no-screenshot" );
        };

        const removeScreenshotProtection = () => {
            document.body.classList.remove( "no-screenshot" );
        };

        document.addEventListener( "visibilitychange", handleVisibilityChange );
        window.addEventListener( "blur", handleScreenshot );
        window.addEventListener( "focus", removeScreenshotProtection );

        return () => {
            document.removeEventListener( "visibilitychange", handleVisibilityChange );
            window.removeEventListener( "blur", handleScreenshot );
            window.removeEventListener( "focus", removeScreenshotProtection );
        };
    }, [] );
};

export default usePreventScreenshot;
