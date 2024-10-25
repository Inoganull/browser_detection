//Fetch IP address
fetch('https://api64.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        const ipInfo = document.createElement('div');
        ipInfo.className = 'info';
        ipInfo.textContent = `IP Address: ${data.ip}`;
        document.body.appendChild(ipInfo);
})
    .catch(err => console.error('Failed to fetch IP', err));

function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    let browser = "Unknown Browser";

    if (userAgent.includes("Chrome")) {
        browser = "Google Chrome";
    } else if (userAgent.includes("Firefox")) {
        browser = "Mozilla Firefox";
    } else if (userAgent.includes("Safari")) {
        browser = "Apple Safari";
    } else if (userAgent.includes("Edge")) {
        browser = "Microsoft Edge";
    }

    return `${browser} (${userAgent})`;
}

function getOSInfo() {
    const platform = navigator.platform;
    let os = "Unknown OS";

    if(platform.includes("Win")) {
        os = "Windows";
    } else if (platform.includes("Mac")) {
        os = "MacOS";
    } else if (platform.includes("Linux")) {
        os = "Linux";
    } else if (platform.includes("Android")) {
        os = "Android";
    }

    return os;
}

function getScreenInfo() {
    return `Screen Resolution: ${screen.width}x${screen.height}, Pixel Ratio: ${window.devicePixelRatio}`;
}


document.getElementById("browserInfo").textContent = `Browser: ${getBrowserInfo()}`;
document.getElementById("osInfo").textContent = `Operating System: ${getOSInfo()}`;
document.getElementById("screenInfo").textContent = getScreenInfo();