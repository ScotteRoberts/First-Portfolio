<template>
  <div>
    <slot name="header"></slot>
    <v-content>
      <v-container fluid>
        <slot name="pageTitle"></slot>
        <slot name="pageDescription"></slot>
        <slot name="tutorial"></slot>
        <slot name="pageReferences"></slot>
        <slot></slot>
      </v-container>
    </v-content>
    <slot name="footer"></slot>
  </div>
</template>
