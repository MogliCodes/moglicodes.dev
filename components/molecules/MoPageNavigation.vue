<template>
  <div class="page-navigation">
    <nav>
      <li :class="{'active': index === 0}" v-for="(navItem, index) in navItems" :key="navItem.text">
        <a  :href="navItem.anchor" :to="{ path: '/', hash: navItem.anchor }"><span>{{ navItem.text }}</span><span></span></a>
      </li>
    </nav>
  </div>
</template>

<script setup lang="ts">
  const navItems = [
    {
      text: 'Start',
      anchor: '#start'
    },
    {
      text: 'GitHub Activity',
      anchor: '#github-activity'
    },
    {
      text: 'Blog',
      anchor: '#blog'
    }
  ]
</script>

<style lang="scss">
.page-navigation {
  @apply fixed top-0 bottom-0 right-0 pr-4 pb-8 flex items-center;
  li {
    @apply text-right list-none;

    &.active {
      span:last-child:after {
        @apply border-mc-lightblue bg-mc-lightblue;
      }
    }

    a {
      @apply block;
      &:hover {
        span:first-child {
          @apply scale-100;
        }
      }
    }

    span:first-child {
      @apply font-display text-lg inline-block bg-white px-4 py-1 rounded-full relative top-0.5 scale-0 transition-transform origin-right;
    }

    span:last-child {
      @apply relative pr-8 transform;
      &:after {
        content: '';
        @apply block h-5 w-5 rounded-full border-white border-2 absolute right-0 top-1 bg-white;
      }
    }
  }
}
</style>