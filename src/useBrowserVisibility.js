// useBrowserVisibility.js
import { useEffect, useState } from 'react';

const useBrowserVisibility = () => {
    const [isVisible, setIsVisible] = useState( true );

    useEffect( () => {
        const handleVisibilityChange = () => {
            setIsVisible( !document.hidden );
        };

        document.addEventListener( 'visibilitychange', handleVisibilityChange );

        return () => {
            document.removeEventListener( 'visibilitychange', handleVisibilityChange );
        };
    }, [] );

    return isVisible;
};

export default useBrowserVisibility;
