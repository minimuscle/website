/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const TitleClouds = () => {
    /***** RENDER *****/
    return (
        <>
            <div className="TitlePage__cloud" id="cloud-back" />
            <div className="TitlePage__cloud" id="cloud-mid" />
            <div className="TitlePage__cloud" id="cloud-front" />

            <div className="TitlePage__cloud2" id="cloud2-back" />
            <div className="TitlePage__cloud2" id="cloud2-mid" />
            <div className="TitlePage__cloud2" id="cloud2-front" />




            <svg width="0" height="0">
                <filter id="filter-back">
                    <feTurbulence type="fractalNoise" baseFrequency=".012" numOctaves="4" seed="4" />
                    <feDisplacementMap in="SourceGraphic" scale="170" />
                </filter>
                <filter id="filter-mid">
                    <feTurbulence type="fractalNoise" baseFrequency=".012" numOctaves="4" seed="4" />
                    <feDisplacementMap in="SourceGraphic" scale="150" />
                </filter>
                <filter id="filter-front">
                    <feTurbulence type="fractalNoise" baseFrequency=".012" numOctaves="4" seed="4" />
                    <feDisplacementMap in="SourceGraphic" scale="100" />
                </filter>
            </svg>
            <svg width="0" height="0">
                <filter id="filter2-back">
                    <feTurbulence type="fractalNoise" baseFrequency=".012" numOctaves="4" seed="121" />
                    <feDisplacementMap in="SourceGraphic" scale="170" />
                </filter>
                <filter id="filter2-mid">
                    <feTurbulence type="fractalNoise" baseFrequency=".012" numOctaves="4" seed="121" />
                    <feDisplacementMap in="SourceGraphic" scale="150" />
                </filter>
                <filter id="filter2-front">
                    <feTurbulence type="fractalNoise" baseFrequency=".012" numOctaves="4" seed="121" />
                    <feDisplacementMap in="SourceGraphic" scale="100" />
                </filter>
            </svg>
        </>
    );
};
