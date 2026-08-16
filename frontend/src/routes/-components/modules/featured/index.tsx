import "./_featured.scss";

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const FeaturedProject = () => {
    /***** RENDER *****/
    return (
        <div className="FeaturedProject">
            <h2>Featured Project</h2>
            <h1>Fluxbound</h1>
            <p>A multiplayer card game build around the elements, manipulating creatures, spells and other affects to defeat your opponent</p>
            <p>A game I'm building from the ground up. From the cards and effects system to the multiplayer lobby, matchmaking, WebSockets, UI, and everything in between</p>
            <p>Typescript, Multiplayer, WebSockets, Game Dev</p>
            <button>Explore Fluxbound</button>
        </div>
    );
};
