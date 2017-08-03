export const HIDE_EXPLORER = 'EXPLORER/HIDE';
export const SHOW_EXPLORER = 'EXPLORER/SHOW';
export const NODE_HOVERED = 'EXPLORER/NODE/HOVERED';
export const NODE_SELECTED = 'EXPLORER/NODE/SELECTED';
export const NODE_OUT = 'EXPLORER/NODE/OUT';

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

export const nodeHovered = ({ collection, props }) => {
  return {
    type: NODE_HOVERED,
    payload: { collection, props },
  };
};

export const nodeOut = ({ collection, props }) => {
  return {
    type: NODE_OUT,
    payload: { collection, props },
  };
};
