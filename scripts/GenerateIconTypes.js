const fs = require('fs');

const folderPath = './src/assets/icons';
const typeFilePath = './src/icons/types.ts';

// Read files in the folder
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Filter out files with .tsx extension and extract filenames
  const fileNames = files
    .filter((file) => file.endsWith('.svg'))
    .map((file) => file.replace('.svg', ''));

  // Generate TypeScript type content
  const typeContent = `export type TexmoIconTypes = '${fileNames.join(
    "' | '"
  )}';`;

  // Write to the TypeScript type file
  fs.writeFileSync(typeFilePath, typeContent);

  console.log('Type file generated successfully.');
});
