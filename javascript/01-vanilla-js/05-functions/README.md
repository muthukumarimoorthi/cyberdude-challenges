# Function (Javascript Challenge)
This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> **Task #5** : Function
> 
>  

```js
// Creating Function

// Function Declaration

function myTime() {
    // const time = new Date();
    // const hours = time.getHours();
    const hours = 25;
    if (hours >= 0 && hours <= 6) {
        console.log(`Ella pirachanaikum oru theervu iruku! 
        Athu ennana,
        Saptu thoongurathutha 😴`);
    } else if (hours > 6 && hours <= 7) {
        console.log(`Naanum workout🤸🏼‍♀️ pannalanuthan ninaikiren, 
        apdi ninaikirathuley🤔 one hour aagaituthu`);
    } else if (hours > 7 && hours <= 8) {
        console.log(`Namma vaazhka etha nokki poguthuney therla🤔`);
    } else if (hours > 8 && hours <= 11) {
        console.log(`Aathadi inum function mudikalaiye!!!
        live vera vaipangaley moment😨`);
    } else if (hours > 11 && hours <= 13) {
        console.log(`Live start: Namaku edhuku vambu 
        'Irukra Edam Theriyama Irunthutu Poiranum'`);
    } else if (hours > 13 && hours <= 14) {
        console.log(`Ivunga live ah mudipangala ilaiya, namaku vera ithuku apro pona hostel ah food thara maattangaley`);
    } else if (hours > 14 && hours <= 15) {
        console.log(`One hour break : Naalu reels paathathum one hour ponathey therla, sari povom`);
    } else if (hours > 15 && hours <= 18) {
        console.log(`Task Explaination Moment : Maattikinaaru Orutharu 😆 Ivara Kaapathanum Kartharu 😆`);
    } else if (hours > 18 && hours <= 20) {
        console.log(`After live : Nammakitta sarasam panrathuke varangaya (only for swetha)`);
    } else if (hours > 20 && hours <= 23) {
        console.log(`Ayyo nalaiku task vera iruke`);
    } else {
        console.log(`24 hours ku mela hours ye illaiye`);
    }
}
// myTime();

// Function Expression

const myStudyHours = function (myHours, value) {
    return myHours.push(value);
}
const addHours = [];
myStudyHours(addHours, 1);
// myStudyHours(addHours, );
// myStudyHours(addHours, 9);
// console.log(addHours);

// Return It, Pass Arguments, Receive Parameters

const totalCodingHours = addHours.reduce(function (previousVal, currentVal) {
    return previousVal + currentVal;
});
console.log(`Inaiku neenga study panna hours ${totalCodingHours}`);

// IIFE

(function () {
    switch (totalCodingHours) {
        case 1:
            console.log('Neenga internship ku vantha reason ah maranthutu poringanu ninaikiren');
            break;
        case 2:
            console.log(`Coding hours ah improve panna paarunga athu mattumtha ungaluku help pannum`);
            break;
        case 3:
            console.log(`Ungalala mudiyum, don't loose your hope`);
            break;
        case 4:
            console.log('Its okey, Nalaiku innum konjam try pannunga');
            break;
        case 5:
        case 6:
            console.log(`Excellent abi, neenga inaiku konjam books padikalam`);
            break;
        case 7:
        case 8:
            console.log(`Wow awesome abi, You go in a good way!!!`);
            break;
        default:
            console.log(`Neenga robot illa abi konjam rest edunga sometimes`);
    }
})();

```

### Live link -> 
Deploy it and put the link here.


## Acknowledgement:
 - [@Anbuselvan Rockey](https://github.com/anburocky3) | GitHub Profile.
 - [@Shajid Shafee](https://github.com/mshajid) | GitHub Profile.

## References:

[![Function](http://img.youtube.com/vi/OuUqS8Po5ps/0.jpg)](http://www.youtube.com/watch?v=OuUqS8Po5ps "Function")

- I should give a big thanks to this [CyberDude JavaScript Playlist](https://www.youtube.com/playlist?list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa). Without this, I don't think I could write thise above whole code by myself. 