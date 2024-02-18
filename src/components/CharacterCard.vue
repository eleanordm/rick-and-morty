<template>
<div class="character-card">
    <img :src="image">
    <div class="overlay">
        <h2>{{ name }}</h2>
    </div>
</div>
</template>

<script>
export default {
    name: 'CharacterCard',
    props: {
        image: String,
        name: String
    },
}
</script>

<style lang="scss" scoped>

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.character-card,
.overlay {
    text-align: center;
}

img,
.overlay {
    transition: .3s all;
    border-radius: 3px;
}

.character-card {
    float: left;
    max-width: 31%;
    position: relative;
    margin: .5%;

    :hover {
        cursor: pointer;
    }

    img {
        width: 100%;
        width: 200px;
        height: 260px;
        border-radius: 30px;
        margin: 20px;
        object-fit: cover;
    }

    .overlay {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        background: rgba(0, 0, 0, 0.2);
        color: #fff;
        opacity: 0;

        h2 {
            font-family: "Zen Dots";
        }
    }

    &:hover {
        .overlay {
            opacity: 1;
        }

        img {
            -webkit-filter: blur(2px);
            filter: blur(2px);
        }
    }
}
</style>
