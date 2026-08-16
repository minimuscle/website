import { TitleClouds } from "#/routes/-components/title/cloud";
import "./_title.scss";
/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const TitlePage = () => {
    /***** RENDER *****/
    return (
        <div className='TitlePage'>
            <h1>Hello, I'm Josh</h1>
            <p>I build things for the web... and a few things beyond it.</p>
            <TitleClouds />
        </div>
    );
};
