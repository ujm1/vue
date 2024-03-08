<template>
  <div class="card">
    <div v-if="$slots.header" class="card-header">
    <!-- 값이 있다면 뿌려주겠다 -->
    <slot name="header"></slot>
    </div>

    <div v-if="$slots.default" class="card-body">
    <slot></slot>

    </div>

    <div class="card-footer">
        <slot name="footer"></slot>

    </div>
    
  </div>
</template>
