const fs = require("fs");

//1) Create a json file with the places you wanna to visit ✅
//2) creating a folder named places ✅
//3) Creating folders for the location available in the json file ✅

// fs.writeFile('output.txt', `First file using Node JS`, (err)=>{
//     if (err){
//         console.log(err);
//         return
//     }
//     console.log("File written successfully!..");
// })

const myFvtCities = require("./data/myFvtCities.json");

// console.log(myFvtCities);

myFvtCities.map((location) => {
  console.log(location);

  fs.mkdir(`places/0${location.id}-${location.location.toLocaleLowerCase()}`, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("File written successfully!..");
  });

  location.myFavouritePlaces.map((place)=>{
    fs.writeFile(`places/0${location.id}-${location.location.toLocaleLowerCase()}/${place.placeName.toLocaleLowerCase()}.txt`, `${place.about}`, ()=>{} )
  })


});
