<template>
  <div>
    <slot name="header"></slot>
    <v-content>
      <v-container fluid>
        <v-layout align-center justify-space-around wrap>
          <v-flex>
            <slot name="displayItem"></slot>
          </v-flex>
        </v-layout>
      </v-container>
      <slot></slot>
    </v-content>
    <slot name="footer"></slot>
  </div>
</template>
