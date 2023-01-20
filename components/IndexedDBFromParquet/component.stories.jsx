import Component from './component';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Data/IndexedDBFromParquet',
  component: Component,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Component {...args} />;

export const IndexedDBFromParquetStory = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
