const sizeOf = require("image-size");
const path = require("path");

const srcPath = path.resolve(__dirname, "..", "source");

hexo.extend.filter.register("template_locals", locals => {
  const { image } = locals.page;
  if (!image) return;

  locals.page.imageSize = sizeOf(path.join(srcPath, image));
});
