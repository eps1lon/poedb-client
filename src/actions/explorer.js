export const HIDE_EXPLORER = 'EXPLORER/HIDE';
export const SHOW_EXPLORER = 'EXPLORER/SHOW';
export const NODE_SELECTED = 'EXPLORER/NODE/SELECTED';

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

export const nodeSelected = ({ id, model, schema }) => {
  return {
    type: NODE_SELECTED,
    payload: { id, model, schema },
  };
};
