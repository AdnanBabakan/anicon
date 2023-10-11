<template>
  <div class='ani-icon-container' :style='icon.wantedStyles(["width", "height"])'>
    <div class='ani-scroll-button' :style='icon.wantedStyles([{attr: "color", as: "border-color"}])'>
      <div class='dot' :style='icon.wantedStyles([{attr: "color", as: "background"}])'></div>
    </div>
  </div>
</template>

<script setup>
import { iconDefaultProps } from '@/utils/iconDefaultProps'
import { useIcon } from '@/utils/icon'

const props = defineProps(iconDefaultProps)

const icon = useIcon(props)
</script>

<style lang='scss' scoped>
@keyframes ani-scroll-button-dot-animation {
  0% {
    top: 10px;
    opacity: 1;
  }

  60% {
    top: 60%;
    opacity: 0;
  }

  100% {
    top: 60%;
    opacity: 0;
  }
}

.ani-scroll-button {
  width: 60%;
  height: 100%;
  border: 2px solid #000000;
  border-radius: 1000em;

  .dot {
    width: 12%;
    padding: 12%;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: #000000;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    animation-name: ani-scroll-button-dot-animation;
    animation-timing-function: ease-in-out;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-fill-mode: initial;
  }
}
</style>