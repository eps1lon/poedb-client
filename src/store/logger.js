import { createLogger } from 'redux-logger';

const configureLogger = () =>
  createLogger({
    // collapse all
    collapsed: true,
  });

export default configureLogger;
