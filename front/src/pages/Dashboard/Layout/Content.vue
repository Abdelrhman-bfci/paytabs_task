<template>
  <div class="content px-0">
    <div class="container-fluid">
      <div class="row">
        <transition name="fade" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
  .fade-leave-to
    /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
