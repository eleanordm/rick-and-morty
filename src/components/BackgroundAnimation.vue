<template>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 545.39 294.79" class='bg'>
    <defs>
    </defs>
    <g id="06bfc7e1-b704-4078-98ce-2308fc1c2fe9" data-name="Layer 2">
        <g id="c0153062-95a7-412f-be95-4bccb94029e9" data-name="Layer 1">
            <path class="stars-bg__star stars-bg__blink-1" d="M4.84,3.53A1.18,1.18,0,1,0,3.66,2.35,1.17,1.17,0,0,0,4.84,3.53" />
            <path class="stars-bg__star stars-bg__blink-2" d="M512.9,145.88a1.18,1.18,0,1,0-1.18-1.18,1.18,1.18,0,0,0,1.18,1.18" />
            <path class="stars-bg__star stars-bg__blink-3" d="M411,55.7a1.18,1.18,0,1,0,1.18,1.18A1.17,1.17,0,0,0,411,55.7" />
            <path class="stars-bg__star stars-bg__blink-2" d="M135.79,27.52A1.18,1.18,0,1,0,137,28.7a1.18,1.18,0,0,0-1.18-1.18" />
            <path class="stars-bg__star stars-bg__blink-1" d="M100.53,94.49a1.18,1.18,0,1,0,1.18,1.18,1.18,1.18,0,0,0-1.18-1.18" />
            <path class="stars-bg__star stars-bg__blink-1" d="M16.85,131.35A1.18,1.18,0,1,0,18,132.53a1.18,1.18,0,0,0-1.18-1.18" />
            <path class="stars-bg__star stars-bg__blink-3" d="M533.24,0a1.18,1.18,0,1,0,1.18,1.18A1.18,1.18,0,0,0,533.24,0" />
            <path class="stars-bg__star stars-bg__blink-1" d="M340.44,48.52a1.18,1.18,0,1,0-1.18,1.18,1.18,1.18,0,0,0,1.18-1.18" />
            <path class="stars-bg__star stars-bg__blink-2" d="M200.35,64.06a1.18,1.18,0,1,0,1.18,1.18,1.17,1.17,0,0,0-1.18-1.18" />
            <path class="stars-bg__star stars-bg__blink-2" d="M159.9,151.18a1.18,1.18,0,1,0-1.18-1.18,1.18,1.18,0,0,0,1.18,1.18" />
            <path class="stars-bg__star stars-bg__blink-1" d="M544.22,203.63a1.18,1.18,0,1,0-1.18-1.18,1.18,1.18,0,0,0,1.18,1.18" />
            <path class="stars-bg__star stars-bg__blink-3" d="M135.79,188.61a1.18,1.18,0,1,0,1.18,1.18,1.18,1.18,0,0,0-1.18-1.18" />
            <path class="stars-bg__star stars-bg__blink-1" d="M1.18,292.44a1.18,1.18,0,1,0,1.18,1.18,1.18,1.18,0,0,0-1.18-1.18" />
            <path class="stars-bg__star stars-bg__blink-2" d="M478.61,171a1.18,1.18,0,1,0-1.18-1.18,1.18,1.18,0,0,0,1.18,1.18" />
            <path class="stars-bg__star stars-bg__blink-1" d="M340.44,209.6a1.18,1.18,0,1,0-1.18,1.18,1.18,1.18,0,0,0,1.18-1.18" />
            <path class="stars-bg__star stars-bg__blink-3" d="M200.35,225.15a1.18,1.18,0,1,0,1.18,1.18,1.17,1.17,0,0,0-1.18-1.18" />
            <path class="stars-bg__star stars-bg__blink-1" d="M413.82,115.21a1.18,1.18,0,1,0-1.18-1.18,1.18,1.18,0,0,0,1.18,1.18" />
            <path class="stars-bg__star stars-bg__blink-2" d="M100.53,255.58a1.18,1.18,0,1,0,1.18,1.18,1.18,1.18,0,0,0-1.18-1.18" />
            <path class="stars-bg__star stars-bg__blink-3" d="M34.65,223.73a1.18,1.18,0,1,0-1.18-1.18,1.18,1.18,0,0,0,1.18,1.18" />
        </g>
    </g>
</svg>
</template>

<script>
export default {
    name: 'BackgroundAnimation',
}
</script>

<style lang="scss" scoped>

.stars-bg__star {
    fill: #ffffff9f;
    fill-rule: evenodd;
}

.bg {
    position: fixed;
    top: 0;
    left: 10px;
    width: 100%;
    height: 100%
}

@keyframes blink {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 0.6;
    }

    100% {
        opacity: 0;
    }
}

.stars-bg__star {
    opacity: 0;
    animation: blink 3s infinite;
}

.stars-bg__blink-2 {
    animation-delay: 1s;
}

.stars-bg__blink-3 {
    animation-delay: 2s;
}

.hello {
    margin: 50px auto;
    display: block;
    width: 200px;
    color: #FFF;
    opacity: 0.3;
    font-family: sans-serif;
}
</style>
