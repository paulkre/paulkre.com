hexo.extend.filter.register("after_post_render", data => {
  data.content = data.content.replace(
    /<p><img (.+)><\/p>/g,
    (_match, imgProps) =>
      `<div class="img"><img ${imgProps} draggable="false"></div>`
  );
});
