<template>
  <div>
    <slot name="header"></slot>
    <main>
      <v-container fluid>
        <!-- Desktop Layout -->
        <v-layout class="hidden-sm-and-down">
          <!-- Left Sidebar -->
          <v-flex xs3 mr-2>
            <slot name="contentLeft"></slot>
          </v-flex>
          <!-- Right Content -->
          <v-flex xs9>
            <slot name="contentRight"></slot>
          </v-flex>
        </v-layout>

        <!-- TODO: Figure out cleaner way to used named slot variables -->

        <!-- Mobile Layout -->
        <v-layout justify-space-around class="hidden-md-and-up">
          <v-flex>
            <slot name="contentLeft"></slot>
            <slot name="contentRight"></slot>
          </v-flex>
        </v-layout>
      </v-container>
    </main>
    <slot name="footer"></slot>
  </div>
</template>
