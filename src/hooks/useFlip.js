import React, { useState } from "react";

const useFlip = () => {
    const [isFlipped, setFlipped] = useState(true);
    const flip = () => {
    setFlipped(isUp => !isUp);
    };
    return [isFlipped, flip];
};

export default useFlip;