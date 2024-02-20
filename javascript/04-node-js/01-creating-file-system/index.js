const fs =require('fs');

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

myFvtCities.map((location)=>{
    // console.log(places)
    fs.mkdir(`places/${location.id} ) ${location.location}`,(error)=>{error ? console.log(error) : console.log("folder created successfully")})
    location.placesName.map((places)=>{
        fs.writeFile(`places/${location.id} ) ${location.location}/${places.placeName}.txt`,`${places.about}`,()=>{})
    })


})