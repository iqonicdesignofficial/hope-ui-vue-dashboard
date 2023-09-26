<template>
  <SubHeaderWidget subTitle="Blog" subBreadcrumb="Blog" />
  <div class="inner-box">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <BlogOne :blogImage="require('@/assets/modules/landing-pages/images/blog/01.png')" blogDate="December 26, 2022" blogTitle="The Cheapest Destinations Of All Time, A List Of Beauty And Budget." blogAuther="Travel" blogDescription="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book." />
        </div>
        <div class="col-lg-4">
          <BlogOne :blogImage="require('@/assets/modules/landing-pages/images/blog/02.png')" blogDate="December 20, 2022" blogTitle="“A Year From Now You May Wish You Had Started Today.”" blogAuther="Video" blogDescription="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book." />
        </div>
        <div class="col-lg-4">
          <BlogOne :blogImage="require('@/assets/modules/landing-pages/images/blog/03.png')" blogDate="December 20, 2022" blogTitle="Travelers Like To Know Which Public Transportation Options Are Best." blogAuther="Video" blogDescription="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book." />
        </div>
        <div class="col-lg-4">
          <BlogOne :blogImage="require('@/assets/modules/landing-pages/images/blog/04.png')" blogDate="December 20, 2022" blogTitle="Travelers Like To Know Which Public Transportation Options Are Best." blogAuther="Video" blogDescription="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book." />
        </div>
        <div class="col-lg-4">
          <BlogOne :blogImage="require('@/assets/modules/landing-pages/images/blog/05.png')" blogDate="December 20, 2022" blogTitle="WIT AND DELIGHT: The Advice From A Twenty Something" blogAuther="Video" blogDescription="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book." />
        </div>
        <div class="col-lg-4">
          <BlogOne :blogImage="require('@/assets/modules/landing-pages/images/blog/06.png')" blogDate="December 20, 2022" blogTitle="Paranomal And Ghost Experience: The Man Behind The Musical" blogAuther="Travel" blogDescription="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book." />
        </div>
        <div class="col-lg-4">
          <BlogOne :blogImage="require('@/assets/modules/landing-pages/images/blog/07.png')" blogDate="December 20, 2022" blogTitle="I Do Indeed Write On The Road. My Laptop Goes With Me Everywhere." blogAuther="Travel" blogDescription="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book." />
        </div>
        <div class="col-lg-4">
          <BlogOne :blogImage="require('@/assets/modules/landing-pages/images/blog/08.png')" blogDate="December 20, 2022" blogTitle="The Cheapest Destinations Of All Time, A List Of Beauty And Budget." blogAuther="Travel" blogDescription="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book." />
        </div>
        <div class="col-lg-4">
          <BlogOne :blogImage="require('@/assets/modules/landing-pages/images/blog/09.png')" blogDate="December 20, 2022" blogTitle="The Ultimate Travel Guide: What To Do, See & Eat." blogAuther="Travel" blogDescription="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book." />
        </div>
        <div class="col-lg-4">
          <BlogOne :blogImage="require('@/assets/modules/landing-pages/images/blog/09.png')" blogDate="December 20, 2022" blogTitle="We Take Photos As A Return Ticket To The Moment Otherwise Gone." blogAuther="Travel" blogDescription="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book." />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//components
import BlogOne from '@/components/widgets/BlogOne.vue'
import SubHeaderWidget from '@/components/widgets/SubHeaderWidget.vue'
export default {
  components: {
    BlogOne,
    SubHeaderWidget
  }
}
</script>
