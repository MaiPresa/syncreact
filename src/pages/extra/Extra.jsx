import "./Extra.scss";
import { Button } from "../../components/button/Button";
import extraimg from "../../assets/images/download-iphone.png";

import primester from "../../assets/images/customer-logo-1.png";
import greenApp from "../../assets/images/customer-logo-2.png";
import voltmeter from "../../assets/images/customer-logo-3.png";
import keyrunner from "../../assets/images/customer-logo-4.png";
import amplifier from "../../assets/images/customer-logo-5.png";

export const Extra = () => {
    return(
        <>
            <article className="testimonialsContainer">
                <h2>User Testimonials</h2>
                <ul>
                    <li className="testimonial">
                        <div className="stars"></div>
                        <hr/>
                        <p>Texto</p>
                        <p>Nombre</p>
                    </li>
                    <li className="testimonial">
                        <div className="stars"></div>
                        <hr/>
                        <p>Texto</p>
                        <p>Nombre</p>
                    </li>                    
                    <li className="testimonial">
                        <div className="stars"></div>
                        <hr/>
                        <p>Texto</p>
                        <p>Nombre</p>
                    </li>
                </ul>
                <ul className="whiteBg">
                    <li><img src={primester} alt="Primester logo"/></li>
                    <li><img src={greenApp} alt="GreenApp logo"/></li>
                    <li><img src={voltmeter} alt="Voltmeter logo"/></li>
                    <li><img src={keyrunner} alt="Keyrunner logo"/></li>
                    <li><img src={amplifier} alt="Amplifier logo"/></li>
                </ul>
                <ul>
                    <li className="testimonial">
                        <div className="stars"></div>
                        <hr/>
                        <p>Texto</p>
                        <p>Nombre</p>
                    </li>
                    <li className="testimonial">
                        <div className="stars"></div>
                        <hr/>
                        <p>Texto</p>
                        <p>Nombre</p>
                    </li>                    
                    <li className="testimonial">
                        <div className="stars"></div>
                        <hr/>
                        <p>Texto</p>
                        <p>Nombre</p>
                    </li>
                </ul>
            </article>
            <article>
                <ul className="blueBg numbersContainer">
                    <li>
                        <div className="icons iconUser iconsTransparent">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                {/* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - 
                                https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                                <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/></svg>
                        </div>
                        <p className="numbersBold">231</p>
                        <p className="smallThin">Happy Users</p>
                    </li>
                    <li>
                        <div className="icons iconProgramming iconsTransparent">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                {/* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - 
                                https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                                <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
                        </div>
                        <p className="numbersBold">385</p>
                        <p className="smallThin">Issues Solved</p>
                    </li>
                    <li>
                        <div className="icons iconSettings iconsTransparent">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                {/* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - 
                                https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                                <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
                        </div>
                        <p className="numbersBold">159</p>
                        <p className="smallThin">Good Reviews</p>
                    </li>
                    <li>
                        <div className="icons iconChat iconsTransparent">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                {/* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - 
                                https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                                <path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"/></svg>
                        </div>
                        <p className="numbersBold">127</p>
                        <p className="smallThin">Case Studies</p>
                    </li>
                    <li>
                        <div className="icons iconRocket iconsTransparent">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - 
                            https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
                        </div>
                        <p className="numbersBold">211</p>
                        <p className="smallThin">Orders Received</p>
                    </li>
                </ul>
            </article>

            <article className="imgContainer">
                <img className="centerImg" src={extraimg} alt="Download App"/>
                <p>Do you feel like you're wasting time with small stuff instead of working 
                    towards your goals? Start using Sync to organize your time and get a grip 
                    on your personal development
                </p>
                <div>
                    <Button buttonType="bttnPrimary"><div className="appleIcon"></div>DOWNLOAD</Button>
                    <Button buttonType="bttnPrimary"><div className="playIcon"></div>DOWNLOAD</Button>
                </div>
            </article>
        </>
    )
}
