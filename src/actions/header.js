export const DISPLAY_HEADER = 'DISPLAY_HEADER';

export const displayHeader = model => {
  return {
    type: DISPLAY_HEADER,
    payload: { model },
  };
};
