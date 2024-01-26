import React from "react";
import {
    BsTwitter,
    BsInstagram,
    BsLinkedin,
    BsFacebook,
    BsGithub,
} from "react-icons/bs";
const Fouter = () => {
    return (
        <footer>
            <div className="container-fluid">
                <div className="flex">
                    <h2 className="mb-1 logo">Bech</h2>
                    <p className="my-1">
                        <span className="color">{`</>`}</span> Done by techbech
                    </p>
                    <p className="my-1">Use Popular FrameWork</p>
                    <p>
                        <span className="color">##</span> React 18{" "}
                    </p>
                </div>

                <div className="">
                    <h4>FoLLows us </h4>
                    <ul>
                        <li>
                            <a href="">
                                <BsTwitter /> twitter
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <BsFacebook /> Facebook
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <BsLinkedin /> Linkedin
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <BsInstagram /> Instagram
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="contact-us">
                    <h4 className="mb-1">Source Code</h4>

                    <a href="https://github.com/Bechirmahamat/bech-contentful" className="github">
                        Available on <BsGithub /> github
                    </a>
                    <h4 className="my-1">Contact Us</h4>
                    <p>Email: bechirmahamat11@gmail.com</p>
                    <p className="my-1">
                        feel free to write us at any time . we will answere all
                        you emails in 7/24
                    </p>
                </div>
            </div>
            <hr />
            <p className="copyright">
                © 2024 <span className="name">Bechir</span> All rights reserved.
            </p>
        </footer>
    );
};

export default Fouter;
