// Import the fs module to perform file operations
import fs from "fs"
// writing files
// --- Example 1: Using fs.writeFile (Asynchronous) ---
// This writes to 'file1.txt' asynchronously.
// The callback function handles errors or confirms success.
fs.writeFile('file1.txt', "I love coding", "utf-8", (err) => {
    if (err) {
        // Logs an error if something went wrong
        console.error('Error writing file1.txt:', err);
    } else {
        // Logs success message once writing is complete
        console.log('file1.txt written successfully!');
    }
});

// Asynchronous operations are non-blocking,
// so this line runs immediately, even if the file writing is not yet complete.
console.log("This message prints before fs.writeFile finishes!");


// --- Example 2: Using fs.writeFileSync (Synchronous) ---
// This writes to 'file2.txt' synchronously.
// No callback is used. Errors are handled with try...catch.
try {
    fs.writeFileSync("file2.txt", "This is a synchronous message", "utf-8");
    // Logs success message once writing is complete
    console.log('file2.txt written successfully!');
} catch (err) {
    // Logs an error if something went wrong
    console.error('Error writing file2.txt:', err);
}

// Synchronous operations block execution,
// so this line runs only after the file writing is complete.
console.log("This message prints after fs.writeFileSync finishes!");


//  reading files

try{
    const data = fs.readFileSync("file3.txt", "utf-8")
    if(data){
        console.log("file3 content is: ", data)
    }
}catch(err){
    console.log(err.message)
}