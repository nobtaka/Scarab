(() => {
    "use strict";

    // Extract a clean Amazon product URL from the current URL.
    // Amazon product pages always contain /dp/<ASIN> (10-character alphanumeric ID).
    // We strip tracking parameters, referral tags, and everything else.

    const url = new URL(window.location.href);
    const pathname = url.pathname;

    // Match /dp/<ASIN> anywhere in the path
    const dpMatch = pathname.match(/\/dp\/([A-Z0-9]{10})(\/|$)/i);
    if (!dpMatch) {
        // Not a product page — nothing to clean
        return;
    }

    const asin = dpMatch[1];
    const cleanPath = `/dp/${asin}`;
    const cleanURL = `${url.origin}${cleanPath}`;

    // Only redirect if the current URL is different from the clean one
    if (url.pathname !== cleanPath || url.search !== "" || url.hash !== "") {
        window.location.replace(cleanURL);
    }
})();
