<template>
    <div>
        <div class="gradient">
    <div class="container">
        <img src="@/assets/images/error/500.png" class="img-fluid mb-4 w-50" alt="">
        <h2 class="mb-0 mt-4 text-white">Oops! This Page is Not Found.</h2>
        <p class="mt-2 text-white">The requested page dose not exist.</p>
        <router-link  :to="{name: 'default.dashboard'}" class="btn bg-white text-primary d-inline-flex align-items-center">Back to Home</router-link>
    </div>
    <div class="box">
        <div class="c xl-circle">
            <div class="c lg-circle">
                <div class="c md-circle">
                    <div class="c sm-circle">
                        <div class="c xs-circle">
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
export default {
  name: 'Error505'
}
</script>
