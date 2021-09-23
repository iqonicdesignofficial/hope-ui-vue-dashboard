<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <div class="card mb-4">
                    <div class="card-header">
                        <h4 class="card-title mb-0">Solid</h4>
                    </div>
                    <div class="card-body">
                        <div class="icon-grid">
                            <div class="icon-box" v-for="(item,index) in Solidicons" :key="index">
                                <div class="overlay">
                                    <button class="btn btn-sm btn-soft-primary" data-toggle="copy" data-bs-toggle="tooltip" data-bs-placement="top" :data-copy-target="`#${item.id}`" title="Copy">Copy</button>
                                </div>
                                <div :id="item.id" v-html="item.svgicons">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Solidicons } from '@/icondata/iconsolid.js'
export default {
  name: 'Solid',
  data () {
    return {
      Solidicons: Solidicons
    }
  }
}
</script>
