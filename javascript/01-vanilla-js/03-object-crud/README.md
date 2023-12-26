# Object (Javascript Challenge)
This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> **Task #3** : Create an Object About Your Self, and You Should Manipulate the Object as well (Create, Read, Update, Delete).
> 
>  

```js

// Inspiration Facebook

// All Datetypes

const mySelf = {
    firstName: "Abi",
    lastName: "Thetchana",
    name: function () {
      myFullName = `${this.firstName} ${this.lastName}`
      return myFullName;
    },
    nickName: ["Happy Queena", "Shilpa"],
    birthDay: 'January 28',
    native: "Karaikudi",
    lives: 600116,
    role: "Full Stack Developer",
    maritalStatus: function () {
      myStatus = "Single";
      if (myStatus === "Single") {
        return (`I'm ${myStatus}, like Kraft American Cheese!`);
      }
      else {
        return (`I'm a ${myStatus} with the world most beautiful boy`);
      }
    },
    mailID: "happyabi28197@gmail.com",
    favouriteQuotes: "அன்பிற்கும் உண்டோ அடைக்கும் தாழ்.",
    hobbies: ["Organize My Room", " Experiencing Musical Bliss", " Reading Books Recent Times"],
  }
  
  // ADD
  
  mySelf.age = function () {
    birthYear = new Date(1997, 0, 28);
    currentYear = new Date();
    myAge = currentYear.getFullYear() - birthYear.getFullYear();
    return myAge;
  };
  console.log(mySelf.age());
  
  // READ
  
  const name1 = "ABIRAMI";
  const personName = prompt("Please Enter Your Famous Name");
  const myName  = personName.toUpperCase();
  if(name1 == myName){
      const myInfo = `
      Name            : ${mySelf.name()}
  
      Nick Name       : ${mySelf.nickName}
  
      Birthday        : ${mySelf.birthDay}
  
      Native          : ${mySelf.native}
  
      Lives           : ${mySelf.lives}
  
      Role            : ${mySelf.role}
  
      My Status       : ${mySelf.maritalStatus()}
  
      Mail ID         : ${mySelf.mailID}
  
      Favourite Quote : ${mySelf.favouriteQuotes}
  
      Hobbies         : ${mySelf.hobbies}`
      console.log(myInfo);
  }
  else{
  console.log("I can't find your valuable name");
  }
  
  // DELETE

  delete mySelf.mailID
  console.log(mySelf);
  
  // // UPDATE
  
  function post(writeHere, location) {
    post: writeHere;
    location: location;
    todayStory = `
      ${mySelf.name()}
      ${Date()}
  
      "${writeHere}" 
  
  
  
  
  
  
  
  
  
      📍@"${location}"
  
      👍❤️😂😮🥲😡                 2 Comments
  
      👍Like         💬Comment         📤Share`
    return todayStory;
  }
  
  let isPost = post("Shopping with my friends", "Saravana Stores")
  console.log(isPost);

```

### Live link -> 
Deploy it and put the link here.


## Acknowledgement:
 - [@Anbuselvan](https://github.com/anburocky3) | GitHub Profile.
 - [@Shajid Shafee](https://github.com/mshajid) | GitHub Profile.
 - [@Bearcin Sweety A](https://github.com/Bearcin46) | GitHub Profile.

## References:

[![Object](http://img.youtube.com/vi/OuUqS8Po5ps/0.jpg)](http://www.youtube.com/watch?v=OuUqS8Po5ps "Object")

- I should give a big thanks to this [CyberDude JavaScript Playlist](https://www.youtube.com/playlist?list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa). Without this, I don't think I could write thise above whole code by myself. 