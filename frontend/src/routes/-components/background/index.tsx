import { type CSSProperties, useMemo } from 'react';
import './_background.scss';


/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const Background = () => {
    const { nebulaBlobs, stars } = useMemo(() => {
        const nebulaBlobs = Array.from({ length: 100 }, () => ({
            xPosition: Math.round(Math.random() * 100) + 0,
            yPosition: Math.round(Math.random() * 100) + 0,
            size: Math.round(Math.random() * 40) + 10,
            color: Math.random() < 0.5 ? 'rgba(150, 0, 235, 0.1)' : 'rgba(0, 0, 100, 0.1)',
            animationDuration: Math.round(Math.random() * 20) + 10,
            animationDelay: Math.round(Math.random() * -20),

            moveXStart: Math.round(Math.random() * 120) - 60,
            moveYStart: Math.round(Math.random() * 120) - 60,
            moveXEnd: Math.round(Math.random() * 240) - 120,
            moveYEnd: Math.round(Math.random() * 240) - 120,
        }));

        const stars = Array.from({ length: 500 }, () => ({
            xPosition: Math.random() * 100,
            yPosition: Math.random() * 100,
            size: Math.random() * 2 + 1,
            animationDelay: Math.random() * -4,
        }));

        return { nebulaBlobs, stars }
    }, []);

    /***** RENDER *****/
    return (
        <div className="nebula">
            {nebulaBlobs.map((nebulaBlob, index) => {
                const style = {
                    left: `${nebulaBlob.xPosition}%`,
                    top: `${nebulaBlob.yPosition}%`,
                    width: `${nebulaBlob.size}vw`,
                    height: `${nebulaBlob.size}vw`,
                    background: `radial-gradient(circle, ${nebulaBlob.color} 0%, transparent 70%)`,
                    animationDuration: `${nebulaBlob.animationDuration}s`,
                    animationDelay: `${nebulaBlob.animationDelay}s`,
                    '--move-x-start': `${nebulaBlob.moveXStart}px`,
                    '--move-y-start': `${nebulaBlob.moveYStart}px`,
                    '--move-x-end': `${nebulaBlob.moveXEnd}px`,
                    '--move-y-end': `${nebulaBlob.moveYEnd}px`,
                } as CSSProperties;

                return <div key={index} className="nebula__blob" style={style} />;
            })}
            <div className="stars">
                {stars.map((star, index) => (
                    <span
                        key={index}
                        className="stars__star"
                        style={{
                            left: `${star.xPosition}%`,
                            top: `${star.yPosition}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            animationDelay: `${star.animationDelay}s`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};