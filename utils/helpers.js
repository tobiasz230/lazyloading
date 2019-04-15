export function onEventEnd (event, delay, callback) {
    let isTimeout;

    window.addEventListener(event, () => {
        window.clearTimeout( isTimeout );
        isTimeout = setTimeout(() => {
            callback();
        }, delay);
    }, false);
};

export function fetchData(callback) {
    fetch('https://b2c-www.redefine.pl/rpc/navigation/', {
        method : 'post',
        mode:    'cors',
        headers: {
        'Content-Type': 'text/plain',
        'Referer': 'https://www.ipla.tv/wideo/serial/Pierwsza-milosc/828?seasonId=829',
        'Origin': 'https://www.ipla.tv',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        },
        body: JSON.stringify({
            id: 1,
            jsonrpc: "2.0",
            method: "getCategoryContentWithFlatNavigation",
            params: {
                ua: "www_iplatv/12345 (Mozilla/5.0 Macintosh; Intel Mac OS X 10_10_5 AppleWebKit/537.36 KHTML, like Gecko Chrome/69.0.3497.100 Safari/537.36)",
                catid: 829,
                limit: 300,
                offset: 0,
                clientId: "c921d668-1fdc-4e71-b15ee8338d2c9bb2"
            }
        })
    })
    .then((res) => res.json())
    .then(data => callback(data))
    .catch(err => {
        callback(err);
    });
}
