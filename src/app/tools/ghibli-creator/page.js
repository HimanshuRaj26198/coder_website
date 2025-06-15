import GhibliConverter from "@/app/_components/GhibiConverter/page";

export const metadata = {
  title: 'Image to Ghibli Style Converter | CoderCrafter',
  description: 'Transform your photos into beautiful Studio Ghibli-style artwork with our free online tool.',
  openGraph: {
    title: 'Image to Ghibli Style Converter',
    description: 'Transform your photos into beautiful Studio Ghibli-style artwork',
    images: [
      {
        url: 'https://codercrafter.in/assets/images/ghibli-converter-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Ghibli Style Converter',
      },
    ],
  },
};

export default function GhibliConverterPage() {
  return <GhibliConverter />;
}