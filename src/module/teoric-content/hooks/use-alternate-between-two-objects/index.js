import { useEffect, useState } from "react";

const useAlternateBetweenTwoObjects = (initialObject, alternateObject, interval) => {
    const [currentObject, setCurrentObject] = useState(initialObject);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentObject(prev => 
                prev.name === initialObject.name ? alternateObject : initialObject
            );
        }, interval);

        return () => clearInterval(intervalId);
    }, [initialObject, alternateObject, interval]); // Ensure dependencies are correctly set

    return currentObject;
};

export default useAlternateBetweenTwoObjects;
