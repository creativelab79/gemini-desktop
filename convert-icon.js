const fs = require("fs");
const png2icons = require("png2icons");

// Read your PNG file
const input = fs.readFileSync("icon.png");

// Convert to ICNS
const output = png2icons.createICNS(input, png2icons.BILINEAR, 0);

// Save the ICNS file
fs.writeFileSync("icon.icns", output);

console.log("✅ icon.icns generated successfully!");
