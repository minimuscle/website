import { TitleClouds } from "#/routes/-components/modules/title/cloud";
import { EnvelopeIcon, GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import ProfilePic from "../../../../assets/Profile Picture Square No Backgroudn.png";
import "./_title.scss";

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const TitlePage = () => {
    /***** RENDER *****/
    return (
        <div className='TitlePage'>
            <div className="TitlePage__text">

                <h1>Hello, I'm Josh</h1>
                <p className="TitlePage__textSubheading">Professional nerd. Serial hobby collector. <br />Occasional finisher of things.</p>
                <p className="TitlePage__textMain">
                    As a professional software engineer, I love turning ideas into reality. Whether that's code, cosplay, or writing stories. I have way too many hobbies, and I'll share them all with you.
                </p>
                <div className="TitlePage__buttons">

                    <button className="TitlePage__buttonsMain">
                        See Projects
                    </button>
                    <button className="TitlePage__buttonsSecondary">
                        About Me
                    </button>
                </div>
                <div className="TitlePage__links">
                    <a href="https://github.com/minimuscle" target="_blank">
                        <GithubLogoIcon weight="fill" size={48} color="rgb(165, 171, 202)" />
                    </a>
                    <a href="https://www.linkedin.com/in/josh-thiele/" target="_blank">
                        <LinkedinLogoIcon weight="fill" size={48} color="rgb(165, 171, 202)" />
                    </a>
                    <Link to="/">
                        <EnvelopeIcon weight="fill" size={48} color="rgb(165, 171, 202)" />
                    </Link>
                </div>
            </div>
            <div className="TitlePage__profile">
                <img src={ProfilePic} alt="" />
                <TitleClouds />
            </div>
        </div>
    );
};
