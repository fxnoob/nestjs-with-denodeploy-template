export const prodConfig = {
  KV: {
    connection: {
      uri: 'http://localhost:5432', // Replace with local database URI
    },
  },
  QUEUES: {
    sendMessagetoDiscord: {
      queueName: 'localSendMessagetoDiscord',
    },
  },
  FEATURE_FLAGS: {
    queues: {
      isEnabled: true,
    },
    rateLimit: {
      ipBased: {
        isEnabled: true,
        blockedIPs: ['127.0.0.1'],
      },
      countryBased: {
        isEnabled: false,
        blockedCountries: [],
      },
      textFilters: {
        isEnabled: false,
        minLengthRequired: 3,
      },
    },
  },
  DISCORD: {
    WEBHOOKS: {
      NEW_STRIPE_PAYMENTS: 'http://localhost/webhook',
    },
  },
  WEBHOOKS_TYPE: {
    NEW_STRIPE_PAYMENTS: 1,
  },
  FIREBASE: {},
};
