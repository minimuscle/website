import "./_navbar.scss";

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const Navbar = () => {
    /***** RENDER *****/
    return (
        <div className="Navbar">
            <h1>Dumblydorr.online</h1>
            <div>
                <a>Home</a>
                <a>Projects</a>
                <a>Blog</a>
                <a>About</a>
                <a>Content</a>
            </div>
        </div>
    );
};
