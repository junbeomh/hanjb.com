import React from 'react';
import { useEffect, useState } from "react";
import "../App.css";


export default function Main() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setOffset(window.pageYOffset);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [offset]);


    return (
        <div className="main-section" id="main">
            <section className="hero">
                <img
                    src="https://picsum.photos/200/300"
                    alt="test"
                    className="parallax"
                    style={{
                        height: '300px',
                        width: '400px',
                        // transform: `translateY(${offset * 100}px)`,
                        position: 'absolute', left: '35%', top: '30%',
                        transform: `translate(${offset * 1}px, ${offset * 1.5}px)`,
                    }}
                />

                <img
                    src="https://picsum.photos/200/300"
                    alt="test"
                    className="parallax"
                    style={{
                        height: '300px',
                        width: '400px',
                        position: 'absolute', left: '45%', top: '40%',
                        transform: `translatey(${offset * 1}px)`,
                    }}
                />
                <img
                    src="https://picsum.photos/200/300"
                    alt="test"
                    className="parallax"
                    style={{
                        height: '300px',
                        width: '400px',
                        position: 'absolute', left: '52%', top: '35%',
                        transform: `translate(${offset * -1}px, ${offset * 1}px)`,
                    }}
                />
                <img
                    src="https://picsum.photos/200/300"
                    alt="test"
                    className="parallax"
                    style={{
                        height: '300px',
                        width: '400px',
                        position: 'absolute', left: '30%', top: '45%',
                        transform: `translate(${offset * 2}px, ${offset * -1}px)`,
                    }}
                />

                <img
                    src="https://picsum.photos/200/300"
                    alt="test"
                    className="parallax"
                    style={{
                        height: '300px',
                        width: '400px',
                        position: 'absolute', left: '40%', top: '55%',
                        transform: `translateY(${offset * -1}px)`,
                    }}
                />

                <img
                    src="https://picsum.photos/200/300"
                    alt="test"
                    className="parallax"
                    style={{
                        height: '300px',
                        width: '400px',
                        position: 'absolute', left: '50%', top: '50%',
                        transform: `translate(${offset * -2}px, ${offset * -1}px)`,
                    }}
                />
                <div className="text-wrapper">
                    <h1
                        className="headline"
                        style={{
                            position: 'center',
                            transform: `translateY(${offset * 1}px)`,
                            fontSize: `${0.0165 * (offset + 450)}rem`,
                            fontWeight: `${1.5 * (offset + 100)}`
                        }}>
                        JunBeom Han
                    </h1>
                    <h2 className="sub-headline"
                        style={{
                            fontSize: "3rem",
                            transform: `translateY(${offset * -1}px)`,
                        }}
                    >
                        Seoul · Vancouver
                        </h2>
                </div>
            </section>
        </div>
    );
}