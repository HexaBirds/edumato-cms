module.exports = ({ env }) => ({
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 5, // Default is 5
    }
  },
  upload: {
    config: {
      provider: 'aws-s3',
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:", "http:"],
          "img-src": [
            "'self",
            "data:",
            "blob:",
            "*.amazonaws.com",
          ],
          "media-src": ["'self'", "data:", "blob:"],
          upgradeInsecureRequests: null,
        },
      },
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID_data'),
        secretAccessKey: env('AWS_ACCESS_SECRET_data'),
        region: env('AWS_REGION_name'),
        params: {
          Bucket: env('AWS_BUCKET_name'),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  }
});
