// Imports
import Typography from 'typography';
import Wordpress2016 from 'typography-theme-wordpress-2016';

// Initializations
Wordpress2016.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: `none`,
  },
});

delete Wordpress2016.googleFonts;

const typography = new Typography(Wordpress2016);

// Hot reload typography in development
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

// Exports
export const rhythm = typography.rhythm;
export const scale = typography.scale;
export default typography;
