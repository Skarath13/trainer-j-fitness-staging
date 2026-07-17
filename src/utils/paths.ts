const rawBase = import.meta.env.BASE_URL || '/';
const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

export const withBase = (path = '') => `${base}${path.replace(/^\/+/, '')}`;

export const isStaging = import.meta.env.PUBLIC_DEPLOY_ENV === 'staging';
