import React, { ReactNode } from 'react';

interface BubbleBoxProps {
    children: ReactNode;
    link?: string
}

const BubbleButton: React.FC<BubbleBoxProps> = ({ children, link }) => {
    return (
        <button className="bg-darkRed rounded-lg p-4 hover:bg-lightRed" onClick={() => { window.location.href = link ?? '' }}>
            {children}
        </button>
    );
}

export default BubbleButton;

