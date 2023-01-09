'use strict';

/**
 * comment-review service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::comment-review.comment-review');
