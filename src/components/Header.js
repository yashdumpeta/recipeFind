import React, { useState } from "react";
import "./header.css";
import TypewriterComponent from "typewriter-effect";

const Header = () => {
    const [textVisible, setTextVisible] = useState(false);

    return (
        <header className="header">
            <h1>
                {!textVisible && (
                    <TypewriterComponent
                        options={{
                            autoStart: true,
                            loop: false,
                            delay: 77,
                            cursor: "",
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("RecipeFind")
                                .callFunction(() => {
                                    setTextVisible(true);
                                })
                                .start();
                        }}
                    />
                )}
                {textVisible && "RecipeFind"}
            </h1>
        </header>
    );
};

export default Header;
