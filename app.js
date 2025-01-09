// app.js

// Function to create a snowfall effect
function createSnowflakes() {
    const snowflakeContainer = document.createElement('div');
    snowflakeContainer.classList.add('snowflake-container');
    document.body.appendChild(snowflakeContainer);

    for (let i = 0; i < 100; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
        snowflake.style.opacity = Math.random();
        snowflakeContainer.appendChild(snowflake);
    }
}

// Function to handle animations when scrolling
function handleScroll() {
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        const position = feature.getBoundingClientRect().top;
        if (position < window.innerHeight - 50) {
            feature.classList.add('active');
        }
    });
}

// Event Listeners
window.addEventListener('load', createSnowflakes);
window.addEventListener('scroll', handleScroll);

// Snowflake CSS Injection
const style = document.createElement('style');
style.innerHTML = `
    .snowflake-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        overflow: hidden;
    }

    .snowflake {
        position: absolute;
        top: -10px;
        width: 10px;
        height: 10px;
        background-color: white;
        border-radius: 50%;
        animation-name: fall;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    @keyframes fall {
        to {
            transform: translateY(100vh);
        }
    }
`;
document.head.appendChild(style);
