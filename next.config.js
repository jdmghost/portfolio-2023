/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        loader: 'custom',
        loaderFile: './config/cloudinary-image-loader.ts',
    },
}

module.exports = nextConfig