type FontFaceSource = {
  family: string;
  source: string;
  descripter: FontFaceDescriptors;
};

const FONT_FACE_SOURCES: FontFaceSource[] = [
  {
    descripter: {
      display: 'block',
      style: 'normal',
      weight: '700',
    },
    family: 'Noto Serif JP',
    source: "url('/fonts/NotoSerifJP-Bold.otf')",
  },
  {
    descripter: {
      display: 'block',
      style: 'normal',
      weight: '400',
    },
    family: 'Noto Serif JP',
    source: "url('/fonts/NotoSerifJP-Regular.otf')",
  },
];

const fontFaces = FONT_FACE_SOURCES.map(({ descripter, family, source }) => new FontFace(family, source, descripter));
const fontPromises = Promise.all(fontFaces.map(fontFace => fontFace.load()))

export async function loadFonts() {
  const fonts = await fontPromises
  fonts.forEach(font => document.fonts.add(font));
}
