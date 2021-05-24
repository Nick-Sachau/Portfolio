import React, { useState, useEffect } from 'react'
import { IoLogoInstagram } from 'react-icons/io'
import { GrLinkedinOption } from 'react-icons/gr'

const Home = () => {
    const [displayTyped, setDisplayTyped] = useState("Developer");
    const [blink, setBlink] = useState(false)
    const typedWords = ['Developer', 'Designer', 'Freelancer', 'Photographer'];

    useEffect(() => {
        let currentWord = 0;
        const interval = setInterval(() => {
            setDisplayTyped(typedWords[currentWord]);
            let currentDisplay = typedWords[currentWord];
            currentWord = ++currentWord % 4;
            let nextDisplay = typedWords[currentWord];
            setTimeout(() => {
                removeWord(currentDisplay, findSimilar(nextDisplay, currentDisplay), nextDisplay);
            }, 1200);
        }, 3000);
        return () => {
            clearInterval(interval);
        }
    }, []);


    const findSimilar = (nextDisplay, currentDisplay) => {

        // Split the two words to be able to loop through all of them to see what letters are going to be similar
        nextDisplay = nextDisplay.split("");
        currentDisplay = currentDisplay.split("");

        let keepLetters = [];

        // finds which one is the longer array to loop through the shortest array
        let longer;
        if(nextDisplay.length > currentDisplay.length) {
            // sets longer to what ever array is longer
            longer = 'nextDisplay';
        }else  {
            // sets longer to what ever array is longer
            longer = 'currentDisplay';
        };

        // makes the for loop for the smallest array
        if(longer === 'nextDisplay') {
            for(const i in currentDisplay) {
                // checks to see if the first two letters are similar to continue or not
                if(currentDisplay[1] === nextDisplay[1]) {
                    // if the first two letters are similar then finds the rest of the similar letters in the two words
                    if(currentDisplay[i] === nextDisplay[i]) {
                        // makes an array with all of the similar letters in both of the two words
                        keepLetters.push(currentDisplay[i]);
                    };
                };
            };
        }else {
            for(const i in nextDisplay) {
                // checks to see if the first two letters are similar to continue or not
                if(currentDisplay[1] === nextDisplay[1]) {
                    // if the first two letters are similar then finds the rest of the similar letters in the two words
                    if(currentDisplay[i] === nextDisplay[i]) {
                        // makes an array with all of the similar letters in both of the two words
                        keepLetters.push(currentDisplay[i]);
                    };
                };
            };
        };

        return keepLetters;
    };

    const removeWord = (currentDisplay, similarLetters, nextDisplay) => {
        setBlink(false);
        currentDisplay = currentDisplay.split("");
        let amountOfLetters = currentDisplay.length - similarLetters.length;
        let intervalTime = Math.round(1.5 / 2 / amountOfLetters * 1000);
        let iterations = currentDisplay.length;
        const interval = setInterval(() => {
            iterations--;
            if(iterations === similarLetters.length) {
                clearInterval(interval);
                insertWord(nextDisplay);
            }
            currentDisplay.splice(iterations, 1);
            setDisplayTyped(currentDisplay.join(""));
        }, intervalTime);
    };

    const insertWord = (nextDisplay) => {
        nextDisplay = nextDisplay.split("");
        let amountOfLetters = nextDisplay.length;
        let intervalTime = Math.round(1.5 / 2 / amountOfLetters * 1000);
        let iteration = -1;
        let newDisplay = [];
        const interval = setInterval(() => {
            iteration++;
            if(iteration + 1 === amountOfLetters) {
                clearInterval(interval);
                setBlink(true);
            }
            newDisplay.splice(iteration, 0, nextDisplay[iteration]);
            setDisplayTyped(newDisplay.join(""));
        }, intervalTime);
    }


    return (
        <>
            <section id='home'>
                <h1>Nick Sachau</h1>
                <p>
                    I'm a <span className="typed">{displayTyped}</span> <span className={blink ? "typed-cursor blink" : "typed-cursor"}>|</span>
                </p>
                <div className="logos">
                    <a href="https://www.instagram.com/xclusiv3_photography/"><IoLogoInstagram className="insta"></IoLogoInstagram></a>
                    <a href="https://www.linkedin.com/in/nick-sachau-6a5210212/"><GrLinkedinOption className="linkedIn"></GrLinkedinOption></a>
                </div>
                
            </section>
        </>
    )
}

export default Home
