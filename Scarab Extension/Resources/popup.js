const amazonDomains = [
    "amazon.co.jp", "amazon.com", "amazon.co.uk", "amazon.de",
    "amazon.fr", "amazon.it", "amazon.es", "amazon.ca",
    "amazon.com.au", "amazon.com.br", "amazon.in", "amazon.sg",
    "amazon.com.mx", "amazon.nl", "amazon.se", "amazon.pl",
    "amazon.com.be", "amazon.sa", "amazon.ae", "amazon.eg"
];

async function updateStatus() {
    const statusEl = document.getElementById("status");
    try {
        const tabs = await browser.tabs.query({ active: true, currentWindow: true });
        const tab = tabs[0];
        if (tab && tab.url) {
            const url = new URL(tab.url);
            const isAmazon = amazonDomains.some(d => url.hostname === d || url.hostname.endsWith("." + d));
            if (isAmazon) {
                statusEl.textContent = "✓ このサイトで有効";
            } else {
                statusEl.textContent = "";
            }
        }
    } catch {
        statusEl.textContent = "";
    }
}

updateStatus();
