/**
 * Define paths for gulpfile.
 */

const fileGlobs = {
  images: "**/*.+(jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG|gif|GIF|webp|WEBP|tif|TIF)",
  sass: "**/*.scss",
  css: "**/*.css",
  files: "**/*.*"
};

const src = {};
src.baseDir = "src/";
src.imagesDir = src.baseDir + "img/";
src.stylesDir = src.baseDir + "styles/";
src.filesDir = src.baseDir + "files/";
src.sassFilesGlob = [ src.stylesDir + fileGlobs.sass ];
src.imageFilesGlob = src.imagesDir + fileGlobs.images;
src.filesFilesGlob = src.filesDir + fileGlobs.files;

const docs = {};
docs.baseDir = "docs/";
docs.dataDir = docs.baseDir + "_data/";
docs.stylesDir = docs.baseDir + "assets/css/";
docs.imagesDir = docs.baseDir + "assets/img/";
docs.filesDir = docs.baseDir + "assets/files/"

const public = {};
public.baseDir = "public/";
public.stylesDir = public.baseDir + "assets/css/";
public.imagesDir = public.baseDir + "assets/img/";
public.filesDir = public.baseDir + "assets/files/";

// All
const paths = {
  src,
  public,
  docs
};

module.exports = paths;
