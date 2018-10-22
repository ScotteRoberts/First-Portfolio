<template>
  <div>
    <slot name="header"></slot>
    <v-content>
      <v-container fluid>
        <slot name="pageTitle"></slot>
        <slot name="pageDescription"></slot>
        <v-layout align-center justify-space-around wrap>
          <slot name="displayItem"></slot>
        </v-layout>
      </v-container>
      <slot></slot>
    </v-content>
    <slot name="footer"></slot>
  </div>
</template>
