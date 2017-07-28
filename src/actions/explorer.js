export const HIDE_EXPLORER = 'EXPLORER/HIDE';
export const SHOW_EXPLORER = 'EXPLORER/SHOW';

export const showExplorer = record => {
  return {
    type: SHOW_EXPLORER,
    payload: { record },
  };
};

export const hideExplorer = () => {
  return {
    type: HIDE_EXPLORER,
  };
};
