<template>
  <tr v-for="(item, index) in list" :key="index">
    <td class="text-center"><img class="bg-soft-primary rounded img-fluid avatar-40 me-3" :src="item.image" alt="profile" loading="lazy" /></td>
    <td>{{ item.name }}</td>
    <td>{{ item.contact }}</td>
    <td>{{ item.email }}</td>
    <td>{{ item.country }}</td>
    <td>
      <span class="badge" :class="item.color">{{ item.status }}</span>
    </td>
    <td>{{ item.company }}</td>
    <td>{{ item.date }}</td>
    <td>
      <div class="flex align-items-center list-user-action">
        <a class="btn btn-sm btn-icon btn-success mx-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Add" href="#">
          <span class="btn-inner">
            <icon-component type="outlined" icon-name="user-add" />
          </span>
        </a>
        <a class="btn btn-sm btn-icon btn-warning mx-1" data-bs-toggle="tooltip" data-bs-placement="top"  data-bs-original-title ="Edit" href="#">
          <span class="btn-inner">
            <icon-component type="outlined" icon-name="pencil-alt" />
          </span>
        </a>
        <a class="btn btn-sm btn-icon btn-danger mx-1" data-bs-toggle="tooltip" data-bs-placement="top"  data-bs-original-title ="Delete" href="#">
          <span class="btn-inner">
            <icon-component type="outlined" icon-name="trash" />
          </span>
        </a>
      </div>
    </td>
  </tr>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    name: { type: String, default: '' },
    image: { type: String, default: '' },
    contact: { type: String, default: '' },
    email: { type: String, default: '' },
    country: { type: String, default: '' },
    status: { type: String, default: '' },
    company: { type: String, default: '' },
    date: { type: String, default: '' },
    color: { type: String, default: '' }
  }
}
</script>
