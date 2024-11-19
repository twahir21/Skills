import fs from "fs"
// writing data to a file as json
fs.writeFileSync('file.json', JSON.stringify(
    {
        name: "Twahir",
        age: 21,
        lastName: "Abdi",
        address: "Dar es Salaam",
        country: "Tanzania",
        university: "Dar-es-Salaam Institute of Technology (DIT)"
    }
), "utf-8", err => console.log(err));


// reading data and return object
try{
    const readData = async () => {
        const data = await fs.readFileSync("file.json", "utf-8");
        if (data){
            console.log(JSON.parse(data))
        }else{
            throw new Error("Failed to read the file content")
        }
    }
    readData();

}catch(err){
    console.log(err)
}  