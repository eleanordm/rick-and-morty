<template>
<div>
    <div class="flex justify-center mt-36">
        <div class="bg-[#333337] rounded-lg border-[4px] border-[#333337]">
            <div class="flex flex-col items-center">
                <div class="darkui2-shimmer bg-[#f0f0f0] h-[30px] w-[300px] rounded-sm mt-[20px] mb-[15px]">
                </div>
                <div class="flex">
                    <div>
                        <img src="../assets/rick-skeleton.png" class="w-[190px] h-[220px] bg-[#00000063] rounded-md m-2 object-cover border-[3px] border-[#27272735]">
                    </div>
                    <div class="w-[250px]">
                        <div class="flex justify-end flex-col">
                            <div class="darkui2-shimmer bg-[#00000063] h-[20px] w-[200px] rounded-sm mt-[40px] mb-[15px] ml-3"></div>
                            <div class="darkui2-shimmer bg-[#00000063] h-[20px] w-[200px] rounded-sm mt-[10px] mb-[15px] ml-3"></div>
                            <div class="darkui2-shimmer bg-[#00000063] h-[20px] w-[200px] rounded-sm mt-[10px] mb-[15px] ml-3"></div>
                            <div class="darkui2-shimmer bg-[#00000063] h-[20px] w-[200px] rounded-sm mt-[10px] mb-[15px] ml-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'IdCardSkeleton',
}
</script>

<style lang="scss" scoped>

// skeleton shimmer animation
.darkui2-shimmer {
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: placeHolderShimmer;
  -webkit-animation-timing-function: linear;
  background: #50535a;
  background-image: linear-gradient(to right, #2b2c31ae 0%, #25262ca7 20%, #16181b 40%, #15171a96 100%);
  background-repeat: no-repeat;
  background-size: 800px 104px;
  position: relative
}

.darkui2-shimmer div {
  background: #313236;
  height: 6px;
  left: 0;
  position: absolute;
  right: 0;
}

@keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0
  }
  100% {
    background-position: 468px 0
  }
}

@keyframes prideShimmer {
  from {
    background-position: top left
  }
  to {
    background-position: top right
  }
}
._4-u5 {
  background-color: #ffffff
}

._4-u7 {
  background-color: #ffffff
}

._57d8 {
  background-color: #ffffff
}

._4-u8 {
  background-color: #ffffff
}
</style>
