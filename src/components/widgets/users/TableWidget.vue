<template>
  <tr v-for="(item, index) in list" :key="index">
    <td class="text-center"><img class="bg-soft-primary rounded img-fluid avatar-40 me-3" :src="item.image" alt="profile" loading="lazy" /></td>
    <td>{{ item.name }}</td>
    <td>{{ item.contact }}</td>
    <td>{{ item.email }}</td>
    <td>{{ item.country }}</td>
    <td>
      <span class="badge bg-primary">{{ item.status }}</span>
    </td>
    <td>{{ item.company }}</td>
    <td>{{ item.date }}</td>
    <td>
      <div class="flex align-items-center list-user-action">
        <a class="btn btn-sm btn-icon btn-success" data-bs-toggle="tooltip" data-placement="top" title="" data-original-title="Add" href="#">
          <span class="btn-inner">
            <icon-component type="outlined" icon-name="user-add" />
          </span>
        </a>
        <a class="btn btn-sm btn-icon btn-warning" data-bs-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#">
          <span class="btn-inner">
            <icon-component type="outlined" icon-name="pencil-alt" />
          </span>
        </a>
        <a class="btn btn-sm btn-icon btn-danger" data-bs-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#">
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
    name: { type: String, required: true },
    image: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    country: { type: String, required: true },
    status: { type: String, required: true },
    company: { type: String, required: true },
    date: { type: String, required: true }
  }
}
</script>
