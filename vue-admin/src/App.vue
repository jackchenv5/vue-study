<template>
      <ConfigProvider :theme="themeConfig">
            <RouterView />
      </ConfigProvider>
</template>
<script setup lang="ts">
import { ConfigProvider,theme } from 'ant-design-vue';


const themeConfig =  {
        token: {
          colorPrimary: '#0960bd',
        },
        algorithm: theme.defaultAlgorithm,
      }

</script>
