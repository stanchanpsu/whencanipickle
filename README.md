# [When Can I Pickle](https://whencanipickle.com)

## Development

```sh
npm run start
```

This will launch a server at `localhost:4321`.

The project uses [Astro](https://astro.build) as a framework and is hosted by [Netlify](https://netlify.com). The build configuration for Netlify is handled by the `netlify.toml` which runs the `npm run build` command to create a static site in CI/CD.

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
When a user selects a city, the `location-select.js` script will cause a cascade of requests to eventually provide a collection of forecasts that are appropriate to play in an outdoor event. The result is dispatched on the `window` as `forecasts`.

The `<Map/>` component will also render when a city is select.

Other components listen for the `forecasts` event on the `window` in order to render results, specifically the `<Results/>` and `<Calendar/>` components.