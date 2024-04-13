import React, { ReactNode } from 'react';

interface BubbleBoxProps {
    children: ReactNode;
}

const BubbleBox: React.FC<BubbleBoxProps> = ({ children }) => {
    return (
        <div className="bg-darkRed rounded-lg p-4">
            {children}
        </div>
    );
}

export default BubbleBox;

