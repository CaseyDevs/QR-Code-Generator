import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

// Use the inquirer library to get user input in the terminal
inquirer
    .prompt([
        {
        message: "Please enter a valid URL to generate a QR Code: ",
        name: "URL"
        }
    ])
    .then((answers) => {
        const url = answers.URL;  // Set the URL to the user input, identified by the prompts name "URL"
        let qr_svg = qr.image(url);  // Generates a QR code image stream from the specified URL
        qr_svg.pipe(fs.createWriteStream("qr_img.png"))  // Takes the QR code image data produced by qr.image and writes it directly to the file qr_img.png. 

        // Create a URL text file that contains the url given by the user
        fs.writeFile("URL.txt", url, (err) => {
            if (err) throw err;
            console.log("QR Code Saved");
        })
    })
    // Catch errors
    .catch((err) => {
        if (err.isTtyError) {
            console.log("Something went wrong.");
        } else {
            console.log("Something went wrong.");
    }
});
    