# [When Can I Pickle](https://whencanipickle.com)

Check when the weather is good for outdoor pickleball at your favorite courts.

## Prerequisites

- [Node.js](https://nodejs.org) >= 18 (tested with v20+)
- [npm](https://npmjs.com) (included with Node.js)
- A [Google Maps API key](https://developers.google.com/maps/documentation/embed/get-api-key) with the Maps Embed API enabled

## Installation

```sh
npm install
```

## Development

```sh
npm run start
```

This will launch a server at `localhost:4321`.

## Environment Variables

The following environment variable is required:

| Variable | Description | Required |
|----------|-------------|----------|
| `GOOGLE_API_KEY` | Google Maps API key with Maps Embed API enabled | Yes |

For local development, create a `.env` file in the project root:

```sh
GOOGLE_API_KEY=your_api_key_here
```

## Testing

```sh
npm test
```

Runs unit tests using [Vitest](https://vitest.dev).

## Build

```sh
npm run build
```

Generates a static site in the `dist/` directory.

## Deployment

The site is hosted on [Netlify](https://netlify.com). Deployment is configured via `netlify.toml`:

```toml
[build]
  publish = "dist"
  command = "npm run build"
```

To deploy your own instance:

1. Push the repository to GitHub
2. Connect the repository on [Netlify](https://app.netlify.com)
3. Set the build command to `npm run build` and publish directory to `dist`
4. Add `GOOGLE_API_KEY` as an environment variable in Netlify's site settings
5. Deploy

The Astro build creates a fully static site — no server-side rendering is required.

## Anatomy

The project has several folders in `/src`:

### `/assets`

This holds static assets that are typical used for the `astro:image` service. For bitmap images, the service will optimize the image before serving. However, moving to SVGs might make this folder obsolete in favor of SVG components.

### `/components`

This holds components written as `.astro` files. These are mostly HTML and scoped CSS. In some cases, there is additional JS that makes the component interactive. For more complex components, the `script` is imported from `/scripts`.

### `/layouts`

This holds special page layout templates that _could_ be used for more than the HTML provided by `/pages`. This also holds global styles meant to be unscoped and affect all pages.

### `/pages`

This holds content that will eventually be rendered as static pages. This includes not only HTML but also `.json` data, as in the case for providing the large amount of static city data.

### `/scripts`

This holds the complex scripts that are used by components or shared between the scripts.

## Ecosystem

When a user selects a city, the `location-select.ts` script will cause a cascade of requests to eventually provide a collection of forecasts that are appropriate to play in an outdoor event. The result is dispatched on the `window` as `forecasts`.

The `<Map/>` component will also render when a city is select.

Other components listen for the `forecasts` event on the `window` in order to render results, specifically the `<Results/>` and `<Calendar/>` components.

## License

ISC
