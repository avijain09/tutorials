function login(token) {
    setInterval(() => {
    document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`
    }, 50);
    setTimeout(() => {
    location.reload();
    }, 250);
    }
    
    login('OTQzMTA0MzU1NjU2MTYzMzM4.YhvOSQ.KsIfaDNtfqmhzT7fG8NCgmc9hII')