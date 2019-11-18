hexo.extend.filter.register("after_post_render", data => {
  data.content = data.content.replace(
    /<p>(<img .+>)<\/p>/g,
    (_match, imgTag) => `<div class="img">${imgTag}</div>`
  );
});
