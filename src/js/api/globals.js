export const live = true;

//server ['uat','dev','live']
export const active_server = 'dev';

export const ROOT_URL = {
    dev: 'https://tbs-dev.iksulalive.com/',
    live: 'https://tbs-dev.iksulalive.com/'
};

export const WEB_URL_ALL = {
    dev: `https://tbs-dev.iksulalive.com/`,
    live: `https://tbs-dev.iksulalive.com/`,
}

export const WEB_URL = WEB_URL_ALL[active_server];

export const API_URL = ROOT_URL[active_server];
export const CLONE_BASE_URL = `${ROOT_URL[active_server]}rest/V1/app/`;

export const BASE_URL = `${ROOT_URL[active_server]}rest/V1/app/`;
export const TOKEN_URL = `${ROOT_URL[active_server]}rest/V1/integration/admin`;
export const COUNTRY_URL = `${ROOT_URL[active_server]}rest/V1/directory/`;
export const CART_URL = `${ROOT_URL[active_server]}rest/V1/carts/mine/`;
export const GUEST_CART_URL = `${ROOT_URL[active_server]}rest/V1/`;
export const STATIC_PAGES_URL = `${ROOT_URL[active_server]}rest/V1/cmsPageIdentifier/`;

export const API_TOKEN = "vbv8ehbgxp0lw9ocn0sleivythovkqvu"
export const IP_INFO_TOKEN = "69e46a82457d45"






