import _ from 'lodash';

export const exploredRecord = state => state.explorer.data;

// omit timestamps and private fields
export const visibleTooltipAttributes = hover => {
  if (hover === undefined) {
    return undefined;
  } else {
    const { collection, props } = hover;
    return {
      collection,
      props: _.omitBy(
        props,
        (value, key) =>
          key.startsWith('_') || ['created_at', 'updated_at'].includes(key),
      ),
    };
  }
};
