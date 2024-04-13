import { useState, useEffect } from 'react';
import { Stage } from '@pixi/react';
import { Application, Assets, Sprite } from 'pixi.js';


function GameBox() {
    const [width, setWidth] = useState(window.innerWidth * 0.9);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth * 0.9);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Stage width={width} height={500} className='rounded-lg'>

        </Stage>
    );
}

export default GameBox;
