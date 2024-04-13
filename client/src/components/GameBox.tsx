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
import bahog from "../images/baHog/0.png"
import bahog1 from "../images/baHog/1.png"
import bahog2 from "../images/baHog/2.png"
import bahog3 from "../images/baHog/3.png"
import bahog4 from "../images/baHog/4.png"
import bahog5 from "../images/baHog/5.png"
import bahog6 from "../images/baHog/6.png"
import bahog7 from "../images/baHog/7.png"
import bahog8 from "../images/baHog/8.png"
import hogReverse from "../images/baseHogReverse/0.png"
import hogReverse1 from "../images/baseHogReverse/1.png"
import hogReverse2 from "../images/baseHogReverse/2.png"
import hogReverse3 from "../images/baseHogReverse/3.png"
import hogReverse4 from "../images/baseHogReverse/4.png"
import hogReverse5 from "../images/baseHogReverse/5.png"
import hogReverse6 from "../images/baseHogReverse/6.png"
import hogReverse7 from "../images/baseHogReverse/7.png"
import fbhogReverse from "../images/fbHogReverse/0.png"
import fbhogReverse1 from "../images/fbHogReverse/1.png"
import fbhogReverse2 from "../images/fbHogReverse/2.png"
import fbhogReverse3 from "../images/fbHogReverse/3.png"
import fbhogReverse4 from "../images/fbHogReverse/4.png"
import fbhogReverse5 from "../images/fbHogReverse/5.png"
import fbhogReverse6 from "../images/fbHogReverse/6.png"
import fbhogReverse7 from "../images/fbHogReverse/7.png"
import fbhogReverse8 from "../images/fbHogReverse/8.png"
import bahogReverse from "../images/baHogReverse/0.png"
import bahogReverse1 from "../images/baHogReverse/1.png"
import bahogReverse2 from "../images/baHogReverse/2.png"
import bahogReverse3 from "../images/baHogReverse/3.png"
import bahogReverse4 from "../images/baHogReverse/4.png"
import bahogReverse5 from "../images/baHogReverse/5.png"
import bahogReverse6 from "../images/baHogReverse/6.png"
import bahogReverse7 from "../images/baHogReverse/7.png"
import bahogReverse8 from "../images/baHogReverse/8.png"

type props = {
    width: number
    xPosition: number
    yPosition: number
    xVelocity: number
    yVelocity: number
}

function Hog({ width, xPosition, yPosition, xVelocity, yVelocity }: props) {
    const [position, setPosition] = useState({ x: xPosition, y: yPosition });
    const [velocity, setVelocity] = useState({ x: xVelocity, y: yVelocity });
    const hogArray = [hog, hog1, hog2, hog3, hog4, hog5, hog6, hog7];
    const hogReverseArray = [hogReverse, hogReverse1, hogReverse2, hogReverse3, hogReverse4, hogReverse5, hogReverse6, hogReverse7]
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const hogPng = hogArray[currentImageIndex];
    const hogReversePng = hogReverseArray[currentImageIndex]

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
        <>
            {velocity.x < 0 ? (
                <Sprite
                    image={hogReversePng}
                    x={position.x + velocity.x}
                    y={position.y + velocity.y}
                    width={150}
                    height={150}
                />
            ) : (
                <Sprite
                    image={hogPng}
                    x={position.x + velocity.x}
                    y={position.y + velocity.y}
                    width={150}
                    height={150}
                />
            )}
        </>
    );
}

function FBHog({ width, xPosition, yPosition, xVelocity, yVelocity }: props) {
    const [position, setPosition] = useState({ x: xPosition, y: yPosition });
    const [velocity, setVelocity] = useState({ x: xVelocity, y: yVelocity });
    const fbHogArray = [fbhog, fbhog1, fbhog2, fbhog3, fbhog4, fbhog5, fbhog6, fbhog7, fbhog8];
    const fbReverseHogArray = [fbhogReverse, fbhogReverse1, fbhogReverse2, fbhogReverse3, fbhogReverse4, fbhogReverse5, fbhogReverse6, fbhogReverse7, fbhogReverse8]
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const fbHogPng = fbHogArray[currentImageIndex];
    const fbHogReversePng = fbReverseHogArray[currentImageIndex]

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
        <>
            {velocity.x < 0 ? (
                <Sprite
                    image={fbHogReversePng}
                    x={position.x + velocity.x}
                    y={position.y + velocity.y}
                    width={150}
                    height={150}
                />
            ) : (
                <Sprite
                    image={fbHogPng}
                    x={position.x + velocity.x}
                    y={position.y + velocity.y}
                    width={150}
                    height={150}
                />
            )}
        </>
    );
}

function BAHog({ width, xPosition, yPosition, xVelocity, yVelocity }: props) {
    const [position, setPosition] = useState({ x: xPosition, y: yPosition });
    const [velocity, setVelocity] = useState({ x: xVelocity, y: yVelocity });
    const baHogArray = [bahog, bahog1, bahog2, bahog3, bahog4, bahog5, bahog6, bahog7, bahog8];
    const baHogReverseArray = [bahogReverse, bahogReverse1, bahogReverse2, bahogReverse3, bahogReverse4, bahogReverse5, bahogReverse6, bahogReverse7, bahogReverse8]
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const baHogPng = baHogArray[currentImageIndex];
    const baHogReversePng = baHogReverseArray[currentImageIndex]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % baHogArray.length);
        }, 150);
        return () => clearInterval(interval);
    }, [baHogArray.length]);

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
        <>
            {velocity.x < 0 ? (
                <Sprite
                    image={baHogReversePng}
                    x={position.x + velocity.x}
                    y={position.y + velocity.y}
                    width={150}
                    height={150}
                />
            ) : (
                <Sprite
                    image={baHogPng}
                    x={position.x + velocity.x}
                    y={position.y + velocity.y}
                    width={150}
                    height={150}
                />
            )}
        </>
    );
}

function GameBox() {
    const [width, setWidth] = useState(window.innerWidth * 0.8);

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
            <BAHog width={width} xPosition={width / 3} yPosition={250} xVelocity={10} yVelocity={10} />
        </Stage>
    );
}

export default GameBox;

