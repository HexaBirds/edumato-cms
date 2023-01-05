'use strict';

/**
 * like-fav service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::like-fav.like-fav');
