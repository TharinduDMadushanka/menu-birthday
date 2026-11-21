# A Little World Made for Menuli

A responsive romantic birthday experience built with React and Vite.

## Run locally

Requires Node.js 20 or newer.

```powershell
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

## Production build

```powershell
npm run build
npm run preview
```

The deployable static site is generated in `dist/`.

## Replace photos

The gallery is in `src/components/MemoriesGallery.jsx`. Replace each placeholder source, caption, and optional date in the `memories` array near the top of that file. You can use local images from `public/assets/images/` or external image URLs.

For best results, use optimized `.jpg`, `.webp`, or `.png` images, approximately 1200 pixels wide. Keep personal photos private and avoid uploading them to a public repository unless you are comfortable sharing them.

## Add background music

Add an audio file with this exact name:

```text
public/assets/romantic-music.mp3
```

You may replace the existing file, but it must remain licensed for this use or be royalty-free. Browsers do not allow music to autoplay with sound; the visitor can enable it using the music control.

## Deploy to Vercel

1. Push the project to GitHub.
2. Import the repository at https://vercel.com/new.
3. Vercel will detect Vite. The production settings are:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy and share the generated public URL.

The included `vercel.json` provides SPA routing support.

## Deploy to Netlify

1. Push the project to GitHub.
2. Create a new site at https://app.netlify.com/start.
3. Choose the repository.
4. Deploy. The included `netlify.toml` sets the build command and `dist` publish directory.

Alternatively, run `npm run build` locally and drag the `dist` folder into Netlify Drop.
