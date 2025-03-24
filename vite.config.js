import { defineConfig } from 'vite';
import pluginPurgeCss from '@mojojoejo/vite-plugin-purgecss';

export default defineConfig({
  css: {
    devSourcemap: true,
    postcss: './postcss.config.js',
  },
  plugins: [
    pluginPurgeCss({
      variables: true,
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        logo: 'public/logo.html',
        little_world: 'public/little_world.html',
        pixel_world: 'public/pixel_world.html',
        educational_design: 'public/educational_design.html',
        ar_xr: 'public/ar_xr.html',
        works: 'public/works.html',
        about: 'public/about.html',
        '3d': 'public/3d.html',
        exhibitions: 'public/exhibitions.html',
        web3: 'public/web3.html',
        contact: 'public/contact.html',
      },
    },
  },
});
