<template>
  <div>
    <slot name="header"></slot>
    <main>
      <v-container fluid>
        <v-layout align-center justify-space-around wrap>
          <v-flex>
            <slot name="displayItem"></slot>
          </v-flex>
        </v-layout>
      </v-container>
      <slot></slot>
    </main>
    <slot name="footer"></slot>
  </div>
</template>
