<template>
<nav class="p-7 flex justify-between w-[100%] max-w-[1500px]">
    <router-link class="text-1xl font-zen text-green hidden sm:block" to="/">
        Rick and Morty Project
    </router-link>
    <div class="sm:hidden flex justify-between w-full">
        <router-link to="/">
            <img src="../assets/nav-bar-image.png" alt="Logo" aria-label="Home" class="max-w-[96px] max-h-[46px] pb-[5px]">
        </router-link>
        <input id="menu-toggle" type="checkbox">
        <label class="menu-button-container pt-[5px]" for="menu-toggle">
            <div class="menu-button"></div>
        </label>
        <ul class="menu z-[1]">
            <li>
                <router-link class="router py-[20px] px-[100%] font-zen text-blue text-sm" to="/">Home</router-link>
            </li>
            <li>
                <router-link class="router py-[20px] px-[100%] font-zen text-blue text-sm" to="/about">About</router-link>
            </li>
            <li>
                <router-link class="router py-[20px] px-[100%] font-zen text-blue text-sm" to="/search">Search</router-link>
            </li>
            <li>
                <router-link class="router py-[20px] px-[100%] font-zen text-blue text-sm" to="/index">Index</router-link>
            </li>
        </ul>
    </div>
    <div class="router-links hidden sm:flex">
        <div>
            <router-link class="router font-zen text-blue text-xs" to="/about">About</router-link>
        </div>
        <div class="ml-3">
            <router-link class="router font-zen text-blue text-xs" to="/search">Search</router-link>
        </div>
        <div class="ml-3">
            <router-link class="router font-zen text-blue text-xs" to="/index">Index</router-link>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style lang="scss" scoped>
.router {

    // Colour for active nav bar links
    &.router-link-exact-active {
        color: #2755c7;
    }
}

// Hamburger menu styling
.menu {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.menu>li {
    margin: 0 1rem;
    overflow: hidden;
}

.menu-button-container {
    display: none;
    height: 100%;
    width: 30px;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#menu-toggle {
    display: none;
}

.menu-button,
.menu-button::before,
.menu-button::after {
    display: block;
    background-color: #00D7F5;
    position: absolute;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
}

.menu-button::before {
    content: '';
    margin-top: -8px;
}

.menu-button::after {
    content: '';
    margin-top: 8px;
}

#menu-toggle:checked+.menu-button-container .menu-button::before {
    margin-top: 0px;
    transform: rotate(405deg);
}

#menu-toggle:checked+.menu-button-container .menu-button {
    background: rgba(255, 255, 255, 0);
}

#menu-toggle:checked+.menu-button-container .menu-button::after {
    margin-top: 0px;
    transform: rotate(-405deg);
}

@media (max-width: 700px) {
    .menu-button-container {
        display: flex;
    }

    .menu {
        position: absolute;
        top: 0;
        margin-top: 75px;
        left: 0;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    #menu-toggle~.menu li {
        height: 0;
        margin: 0;
        padding: 0;
        border: 0;
        transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    #menu-toggle:checked~.menu li {
        border-top: 1px solid #00D7F5;
        border-bottom: 1px solid #00D7F5;
        align-items: center;
        height: 3.5em;
        transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    .menu>li {
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 0.5em 0;
        width: 100%;
        color: white;
        background-color: rgb(0, 0, 0);
    }

    .menu>li:not(:last-child) {
        border-bottom: 1px solid #444;
    }
}
</style>
