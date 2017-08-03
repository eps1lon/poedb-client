const default_actions = {
  over: 'HOVER/OVER',
  out: 'HOVER/OUT',
};

const withHover = (reducer, actions = default_actions, key = 'hover') => (
  state,
  action,
) => {
  let new_state = reducer(state, action);

  switch (action.type) {
    case actions.over:
      return {
        ...new_state,
        [key]: action.payload,
      };
    case actions.out:
      return {
        ...new_state,
        [key]: undefined,
      };
    default:
      return new_state;
  }
};

export default withHover;
