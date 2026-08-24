import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const inputPath = 'C:\\Users\\vishn\\.gemini\\antigravity\\brain\\b8458276-e193-4881-9f24-a265fe200733\\.user_uploaded\\media_1787547960156.png';

async function processLogo() {
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  console.log('Original image metadata:', metadata.width, metadata.height, metadata.channels, metadata.format);

  // Read raw RGBA pixel data
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  console.log('Info:', info);

  // Check top-left corner color
  const r0 = data[0], g0 = data[1], b0 = data[2];
  console.log('Top-left corner color:', r0, g0, b0);

  // Loop through pixels and convert white background pixels to transparent
  const newData = Buffer.from(data);

  for (let i = 0; i < info.width * info.height; i++) {
    const r = newData[i * 4];
    const g = newData[i * 4 + 1];
    const b = newData[i * 4 + 2];

    // Check if pixel is white background (r > 240, g > 240, b > 240) or black background (r < 20, g < 20, b < 20)
    const isWhiteBg = r > 240 && g > 240 && b > 240;
    const isBlackBg = r < 18 && g < 18 && b < 18;

    if (isWhiteBg || isBlackBg) {
      newData[i * 4 + 3] = 0; // Fully transparent alpha
    }
  }

  // Create transparent logo image and trim extra space
  const transparentBuffer = await sharp(newData, {
    raw: { width: info.width, height: info.height, channels: 4 }
  })
  .trim()
  .png()
  .toBuffer();

  const trimmedMeta = await sharp(transparentBuffer).metadata();
  console.log('Trimmed logo metadata:', trimmedMeta.width, trimmedMeta.height);

  const targetDir = path.resolve('src/assets');
  const publicDir = path.resolve('public');

  // 1. Save logo-preschool-transparent.webp
  await sharp(transparentBuffer)
    .webp({ quality: 100 })
    .toFile(path.join(targetDir, 'logo-preschool-transparent.webp'));

  // 2. Save logo-preschool-transparent.png
  await sharp(transparentBuffer)
    .png()
    .toFile(path.join(targetDir, 'logo-preschool-transparent.png'));

  // 3. Save favicons
  const faviconBuffer = await sharp(transparentBuffer)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  await sharp(faviconBuffer).toFile(path.join(publicDir, 'favicon.png'));
  await sharp(faviconBuffer).resize(180, 180).toFile(path.join(publicDir, 'apple-touch-icon.png'));
  await sharp(faviconBuffer).resize(64, 64).toFile(path.join(publicDir, 'favicon.ico'));

  console.log('Successfully updated logo-preschool-transparent webp, png, and favicons!');
}

processLogo().catch(err => console.error(err));
