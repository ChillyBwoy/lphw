<style>
.markdown-preview h1 {
  font-size: var(--font-size-xxl);
  margin-bottom: var(--spacing-2);
}

.markdown-preview h2 {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-1);
}

.markdown-preview h3 {
  font-size: var(--font-size-l);
  margin-bottom: var(--spacing-1);
}

.markdown-preview p {
  font-size: var(--font-size-m);
  line-height: 1.5rem;
  margin-bottom: var(--spacing-2);
}

.markdown-preview ol {
  list-style: decimal;
  margin: var(--spacing-1) var(--spacing-2);
}

.markdown-preview ul {
  list-style: outside;
  margin: var(--spacing-1) var(--spacing-2);
}

.markdown-preview a {
  text-decoration: underline;
  color: var(--color-link);
}
</style>

<template>
  <div class="markdown-preview">
    <slot></slot>
  </div>
</template>
