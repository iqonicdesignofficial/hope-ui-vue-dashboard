<template>
  <b-row>
    <b-col md="12">
      <b-card>
        <div class="d-flex align-items-center justify-content-between flex-wrap">
          <p class="mb-md-0 mb-2 d-flex align-items-center gap-2">
            <icon-component type="dual-tone" icon-name="filter" :size="20"></icon-component>
            Filter by task name...
          </p>
          <div class="d-flex align-items-center flex-wrap">
            <b-dropdown id="dropdown-1" text="Sort By:" class="dropdown me-3" variant="link text-body p-0">
              <b-dropdown-item> <icon-component type="dual-tone" icon-name="square-tick" :size="20"></icon-component> Status </b-dropdown-item>
              <b-dropdown-item> <icon-component type="dual-tone" icon-name="file-invoice" :size="20"></icon-component> Task Name </b-dropdown-item>
              <b-dropdown-item> <icon-component type="dual-tone" icon-name="analytics" :size="20"></icon-component> Priority </b-dropdown-item>
              <b-dropdown-item> <icon-component type="dual-tone" icon-name="users" :size="20"></icon-component> Assignee </b-dropdown-item>
              <b-dropdown-item> <icon-component type="dual-tone" icon-name="calendar" :size="20"></icon-component> Due date </b-dropdown-item>
              <b-dropdown-item> <icon-component type="dual-tone" icon-name="location-arrow" :size="20"></icon-component> Start date </b-dropdown-item>
              <b-dropdown-item> <icon-component type="dual-tone" icon-name="clock-circle" :size="20"></icon-component> Time tracked</b-dropdown-item>
            </b-dropdown>
            <b-dropdown id="dropdown-2" text="Group By: Status" class="dropdown me-3" variant="link text-body p-0">
              <b-dropdown-item> <icon-component type="dual-tone" icon-name="square-tick" :size="20"></icon-component> Status </b-dropdown-item>
              <b-dropdown-item> <icon-component type="dual-tone" icon-name="users" :size="20"></icon-component> Assignee </b-dropdown-item>
              <b-dropdown-item> <icon-component type="dual-tone" icon-name="analytics" :size="20"></icon-component> Priority </b-dropdown-item>
              <b-dropdown-item> <icon-component type="dual-tone" icon-name="ticket" :size="20"></icon-component> Tags</b-dropdown-item>
              <b-dropdown-item> <icon-component type="dual-tone" icon-name="calendar" :size="20"></icon-component> Due date </b-dropdown-item>
              <b-dropdown-item> <icon-component type="dual-tone" icon-name="square-x" :size="20"></icon-component> None </b-dropdown-item>
            </b-dropdown>
            <icon-component type="dual-tone" icon-name="location-arrow" :size="20"></icon-component>
            <b-dropdown id="dropdown-3" text="Share" class="dropdown" variant="link text-body p-0">
              <icon-component type="dual-tone" icon-name="share" :size="20">Share</icon-component>
              <b-dropdown-item> <icon-component type="dual-tone" icon-name="document-plus" :size="20"></icon-component> Duplicate </b-dropdown-item>
              <b-dropdown-item> <icon-component type="dual-tone" icon-name="pencil" :size="20"></icon-component> Rename </b-dropdown-item>
              <b-dropdown-item> <icon-component type="dual-tone" icon-name="trash" :size="20"></icon-component> Delete </b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
      </b-card>
    </b-col>
    <b-col lg="3">
      <div class="card-transparent mb-0 desk-info">
        <b-row>
          <b-col cols="12">
            <b-card>
              <title-card title="Open Projects 05" variant="primary"></title-card>
            </b-card>
          </b-col>
          <b-col cols="12">
            <new-task-card></new-task-card>
          </b-col>
          <draggable class="group1-wrap" :list="openList" group="hui" itemKey="id">
            <template #item="{ element }">
              <div class="col-12 group">
                <div class="group__item">
                  <task-widget :title="element.title"></task-widget>
                </div>
              </div>
            </template>
          </draggable>
        </b-row>
      </div>
    </b-col>
    <b-col lg="3">
      <div class="card-transparent mb-0 desk-info">
        <b-row>
          <b-col cols="12">
            <b-card>
              <title-card title="In Progress  02" variant="warning"></title-card>
            </b-card>
          </b-col>
          <b-col cols="12">
            <new-task-card></new-task-card>
          </b-col>
          <draggable class="group1-wrap" :list="inProgressList" group="hui" itemKey="id">
            <template #item="{ element }">
              <div class="col-12 group">
                <div class="group__item">
                  <task-widget :title="element.title"></task-widget>
                </div>
              </div>
            </template>
          </draggable>
        </b-row>
      </div>
    </b-col>
    <b-col lg="3">
      <div class="card-transparent mb-0 desk-info">
        <b-row>
          <b-col cols="12">
            <b-card>
              <title-card title="Reviews 01" variant="success"></title-card>
            </b-card>
          </b-col>
          <b-col cols="12">
            <new-task-card></new-task-card>
          </b-col>
          <draggable class="group1-wrap" :list="reviewList" group="hui" itemKey="id">
            <template #item="{ element }">
              <div class="col-12 group">
                <div class="group__item">
                  <task-widget :title="element.title"></task-widget>
                </div>
              </div>
            </template>
          </draggable>
        </b-row>
      </div>
    </b-col>
    <b-col lg="3">
      <div class="card-transparent mb-0 desk-info">
        <b-row>
          <b-col cols="12">
            <b-card>
              <title-card title="Closed 02" variant="info"></title-card>
            </b-card>
          </b-col>
          <b-col cols="12">
            <new-task-card></new-task-card>
          </b-col>
          <draggable class="group1-wrap" :list="closedList" group="hui" itemKey="id">
            <template #item="{ element }">
              <div class="col-12 group">
                <div class="group__item">
                  <task-widget :title="element.title"></task-widget>
                </div>
              </div>
            </template>
          </draggable>
        </b-row>
      </div>
    </b-col>
  </b-row>
</template>

<script setup>
import { reactive } from 'vue'
import TitleCard from '@/components/widgets/spacial-page/TitleCard.vue'
import NewTaskCard from '@/components/widgets/spacial-page/NewTaskCard.vue'
import TaskWidget from '@/components/widgets/spacial-page/TaskWidget.vue'
import draggable from 'vuedraggable'
const openList = reactive([
  { title: 'Create Sidebar in Dashboard', id: 1 },
  { title: 'General Improvement in Landing pages', id: 2 },
  { title: 'Product List view Changes', id: 3 },
  { title: 'Add Multiple theme options', id: 4 }
])
const inProgressList = reactive([
  { title: 'Notification Module Setting', id: 6 },
  { title: 'Admin Panel Customization', id: 7 }
])
const reviewList = reactive([{ title: 'Sidebar in Dashboard Themes', id: 8 }])
const closedList = reactive([
  { title: 'Login screen update in mobile app', id: 9 },
  { title: 'Helpdesk in Dashboard Themes', id: 10 }
])
</script>

<style lang="scss">
.dropdown-toggle-no-caret::after {
  content: unset;
  border: 0;
}

.ghost {
  opacity: 0.5;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>
