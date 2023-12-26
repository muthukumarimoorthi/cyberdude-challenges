
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
  
  