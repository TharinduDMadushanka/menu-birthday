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

Put gallery photos in `public/images/`. Update the image paths, captions, and titles in `src/data/memories.js`. For example, a file at `public/images/memory-1.jpeg` must use the URL `/images/memory-1.jpeg` in the data file (include the leading slash and `images/` folder). Public files are served from the site root; do not use `public/` in the URL.

For best results, use optimized `.jpg`, `.webp`, or `.png` images, approximately 1200 pixels wide. Keep personal photos private and avoid uploading them to a public repository unless you are comfortable sharing them.

## Add background music

The app currently imports the birthday track from:

```text
src/assets/music/the_mountain-happy-birthday-576570.mp3
```

To use a different track, replace that file or update its import in `src/App.jsx`. Keep the audio format browser-compatible (MP3 is recommended). The track must be licensed for this use or royalty-free. Browsers do not allow music to autoplay with sound; the visitor can start it using the music control.

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
