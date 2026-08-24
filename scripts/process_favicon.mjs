import sharp from 'sharp';
import path from 'path';

const inputPath = 'C:\\Users\\vishn\\.gemini\\antigravity\\brain\\b8458276-e193-4881-9f24-a265fe200733\\.user_uploaded\\media_1787548785277.png';

async function processFavicon() {
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  console.log('Original image metadata:', metadata.width, metadata.height, metadata.channels, metadata.format);

  // Read raw RGBA pixel data
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  console.log('Info:', info);

  // Check top-left corner color
  const r0 = data[0], g0 = data[1], b0 = data[2];
  console.log('Top-left corner color:', r0, g0, b0);

  const newData = Buffer.from(data);

  for (let i = 0; i < info.width * info.height; i++) {
    const r = newData[i * 4];
    const g = newData[i * 4 + 1];
    const b = newData[i * 4 + 2];

    // Check if pixel is dark/black background (r < 50 && g < 50 && b < 50)
    const isDarkBg = r < 50 && g < 50 && b < 50;

    if (isDarkBg) {
      newData[i * 4 + 3] = 0; // Set Alpha to 0 (fully transparent)
    }
  }

  // Create transparent emblem and trim extra background
  const transparentBuffer = await sharp(newData, {
    raw: { width: info.width, height: info.height, channels: 4 }
  })
  .trim()
  .png()
  .toBuffer();

  const trimmedMeta = await sharp(transparentBuffer).metadata();
  console.log('Trimmed emblem metadata:', trimmedMeta.width, trimmedMeta.height);

  const publicDir = path.resolve('public');

  // Save 512x512 padded favicon.png
  const favicon512 = await sharp(transparentBuffer)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  await sharp(favicon512).toFile(path.join(publicDir, 'favicon.png'));

  // Save 180x180 apple-touch-icon.png
  await sharp(transparentBuffer)
    .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  // Save 64x64 favicon.ico
  await sharp(transparentBuffer)
    .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'favicon.ico'));

  console.log('Successfully generated transparent emblem favicons in public/!');
}

processFavicon().catch(err => console.error(err));
