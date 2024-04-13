import { useState, useEffect } from 'react';
import { Stage, Sprite } from '@pixi/react';
import background from "../images/fence.png"
import hog from "../images/baseHog/0.png"
import hog1 from "../images/baseHog/1.png"
import hog2 from "../images/baseHog/2.png"
import hog3 from "../images/baseHog/3.png"
import hog4 from "../images/baseHog/4.png"
import hog5 from "../images/baseHog/5.png"
import hog6 from "../images/baseHog/6.png"
import hog7 from "../images/baseHog/7.png"
import fbhog from "../images/fbHog/0.png"
import fbhog1 from "../images/fbHog/1.png"
import fbhog2 from "../images/fbHog/2.png"
import fbhog3 from "../images/fbHog/3.png"
import fbhog4 from "../images/fbHog/4.png"
import fbhog5 from "../images/fbHog/5.png"
import fbhog6 from "../images/fbHog/6.png"
import fbhog7 from "../images/fbHog/7.png"
import fbhog8 from "../images/fbHog/8.png"

type props = {
    width: number
    xPosition: number
    yPosition: number
    xVelocity: number
    yVelocity: number

}

function Hog({ width, xPosition, yPosition, xVelocity, yVelocity
}: props) {
    const [position, setPosition] = useState({ x: xPosition, y: yPosition });
    const [velocity, setVelocity] = useState({ x: xVelocity, y: yVelocity });
    const hogArray = [hog, hog1, hog2, hog3, hog4, hog5, hog6, hog7];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const hogPng = hogArray[currentImageIndex];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % hogArray.length);
        }, 150);
        return () => clearInterval(interval);
    }, [hogArray.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            let newX = position.x + velocity.x;
            let newY = position.y + velocity.y;
            let newVeloX = velocity.x;
            let newVeloY = velocity.y;

            if (newX >= width - 250 || newX <= 0 + 150) {
                newVeloX *= -1;
            }

            if (newY >= 500 - 150 || newY <= 0) {
                newVeloY *= -1;
            }

            if (newX >= width - 250) {
                newX = width - 250;
            } else if (newX <= 0) {
                newX = 0;
            }

            if (newY >= 500 - 150) {
                newY = 500 - 150;
            } else if (newY <= 0) {
                newY = 0;
            }

            setPosition({ x: newX, y: newY });
            setVelocity({ x: newVeloX, y: newVeloY });
        }, 150);

        return () => clearInterval(interval);
    }, [position, width]);

    return (
        <Sprite image={hogPng} x={position.x + velocity.x} y={position.y + velocity.y} width={150} height={150} />
    );
}


function FBHog({ width, xPosition, yPosition, xVelocity, yVelocity }: props) {
    const [position, setPosition] = useState({ x: xPosition, y: yPosition });
    const [velocity, setVelocity] = useState({ x: xVelocity, y: yVelocity });
    const fbHogArray = [fbhog, fbhog1, fbhog2, fbhog3, fbhog4, fbhog5, fbhog6, fbhog7];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const fbHogPng = fbHogArray[currentImageIndex];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % fbHogArray.length);
        }, 150);
        return () => clearInterval(interval);
    }, [fbHogArray.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            let newX = position.x + velocity.x;
            let newY = position.y + velocity.y;
            let newVeloX = velocity.x;
            let newVeloY = velocity.y;

            if (newX >= width - 250 || newX <= 0 + 150) {
                newVeloX *= -1;
            }

            if (newY >= 500 - 150 || newY <= 0) {
                newVeloY *= -1;
            }

            if (newX >= width - 250) {
                newX = width - 250;
            } else if (newX <= 0) {
                newX = 0;
            }

            if (newY >= 500 - 150) {
                newY = 500 - 150;
            } else if (newY <= 0) {
                newY = 0;
            }

            setPosition({ x: newX, y: newY });
            setVelocity({ x: newVeloX, y: newVeloY });
        }, 150);

        return () => clearInterval(interval);
    }, [position, width]);

    return (
        <Sprite image={fbHogPng} x={position.x + velocity.x} y={position.y + velocity.y} width={150} height={150} />
    );
}

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
            <Sprite image={background} x={0} y={0} width={width} height={500} />
            <Hog width={width} xPosition={width / 2} yPosition={250} xVelocity={10} yVelocity={10} />
            <FBHog width={width} xPosition={width / 4} yPosition={250} xVelocity={10} yVelocity={10} />
        </Stage>
    );
}

export default GameBox;
