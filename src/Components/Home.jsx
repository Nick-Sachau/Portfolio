import React, { useState } from 'react'

const SideNavigation = () => {
    const [displayTyped, setDisplayTyped] = useState("Developer");
    let blink = false;
    const typedWords = ['Developer', 'Designer', 'Freelancer', 'Photographer'];
    let currentWord = 0;

    setInterval(() => {

        setDisplayTyped(typedWords[currentWord])

        // checks to see if currentWord is at the end of the array or not
        if(currentWord < 3) {
            currentWord++;
        }else { // if current word is at the end of the array then it resets
            currentWord = 0;
        };
        
        // calls the function to be able to find the similar letters form the two words sent through

        // findSimilar(typedWords[currentWord], displayTyped);
        
        
    }, 5000);


    const findSimilar = (nextDisplay, currentDisplay) => {
        console.log(`Next word is: "${nextDisplay}"\ncurrently showing "${currentDisplay}"`);

        // // Split the two words to be able to loop through all of them to see what letters are going to be similar
        // nextDisplay = nextDisplay.split("");
        // currentDisplay = currentDisplay.split("");

        // let keepLetters = [];

        // // finds which one is the longer array to loop through the shortest array
        // let longer;
        // if(nextDisplay.length > currentDisplay.length) {
        //     // sets longer to what ever array is longer
        //     longer = 'nextDisplay';
        // }else  {
        //     // sets longer to what ever array is longer
        //     longer = 'currentDisplay';
        // };

        // // makes the for loop for the smallest array
        // if(longer === 'nextDisplay') {
        //     for(const i in currentDisplay) {
        //         // checks to see if the first two letters are similar to continue or not
        //         if(currentDisplay[1] === nextDisplay[1]) {
        //             // if the first two letters are similar then finds the rest of the similar letters in the two words
        //             if(currentDisplay[i] === nextDisplay[i]) {
        //                 // makes an array with all of the similar letters in both of the two words
        //                 keepLetters.push(currentDisplay[i]);
        //             };
        //         };
        //     };
        // }else {
        //     for(const i in nextDisplay) {
        //         // checks to see if the first two letters are similar to continue or not
        //         if(currentDisplay[1] === nextDisplay[1]) {
        //             // if the first two letters are similar then finds the rest of the similar letters in the two words
        //             if(currentDisplay[i] === nextDisplay[i]) {
        //                 // makes an array with all of the similar letters in both of the two words
        //                 keepLetters.push(currentDisplay[i]);
        //             };
        //         };
        //     };
        // };

        // return keepLetters
    };

    const animateTyping = (similarLetters) => {
    };

    return (
        <>
            <div id='home'>
                <h1>Nick Sachau</h1>
                <p>
                    I'm a <span className="typed">{displayTyped}</span> <span className={blink ? "typed-cursor blink" : "typed-cursor"}>|</span>
                </p>
            </div>
        </>
    )
}

export default SideNavigation
