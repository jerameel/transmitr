import { getStorybookUI, configure } from '@storybook/react-native';

// import stories
configure(() => {
  /* PLOP_INJECT_IMPORT */
  require('./stories/base/Text');
  // Imported components
}, module);

const StorybookUIRoot = getStorybookUI({});

export default StorybookUIRoot;