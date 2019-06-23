const config = {
  development: {
    url: 'mongodb://localhost:27017/demo',
    parameters: {
      useNewUrlParser: true,
    },
  },
  test: {
    url: 'mongodb://localhost:27017/test',
    parameters: {
      useNewUrlParser: true,
    },
  },
};

export default config[process.env.NODE_ENV.trim()] || config.development;
