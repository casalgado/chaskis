<template>
  <div id="the-binder">
    <TheBinderTab
      :content="content.tab1"
      :active="active == 'tab1'"
      :border="Boolean(active)"
      @click.native="activate('tab1')"
      class="tab"
    />
    <TheBinderPage
      :page="content.page0"
      :tab="activeTab"
      :active="Boolean(active)"
      @click.native="activate(false)"
      class="page"
    />
    <TheBinderTab
      :content="content.tab2"
      :active="active == 'tab2'"
      :border="Boolean(active)"
      @click.native="activate('tab2')"
      class="tab"
    />
    <TheBinderTab
      :content="content.tab3"
      :active="active == 'tab3'"
      :border="Boolean(active)"
      @click.native="activate('tab3')"
      class="tab"
    />
  </div>
</template>

<script>
import TheBinderTab from "./TheBinderTab";
import TheBinderPage from "./TheBinderPage";
import { BinderContent } from "../lib/BinderContent";
export default {
  name: "TheBinder",
  components: { TheBinderTab, TheBinderPage },
  data() {
    return {
      content: BinderContent,
      active: false,
    };
  },
  methods: {
    activate: function(tab) {
      this.active = tab;
    },
  },
  computed: {
    activeTab: function() {
      let activeTab;
      switch (this.active) {
        case "tab1":
          activeTab = BinderContent.tab1;
          break;
        case "tab2":
          activeTab = BinderContent.tab2;
          break;
        case "tab3":
          activeTab = BinderContent.tab3;
          break;

        default:
          activeTab = BinderContent.page0;
          break;
      }
      return activeTab;
    },
  },
};
</script>

<style scoped>
#the-binder {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: auto auto auto;
  margin-left: 15%;
  margin-right: 15%;
}

.page {
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column-start: 2;
}

.tab {
  cursor: pointer;
  position: relative;
  left: 2px;
  z-index: 2;
}
</style>
