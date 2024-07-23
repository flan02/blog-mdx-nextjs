import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// TODO get all mdx files from the dir
function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

// TODO read data from those files
function readMDXFile(filePath: fs.PathOrFileDescriptor) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return matter(rawContent);
}

// TODO present the mdx data anda metadata 
function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir); // * calling fc 1
  return mdxFiles.map((file) => {
    let { data: metadata, content } = readMDXFile(path.join(dir, file)); // * calling fc 2
    let slug = path.basename(file, path.extname(file));
    return { metadata, slug, content };
  })
}

// TODO get all blog posts
export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "src", "app", "blog", "contents")); // ? CWD: current working directory
}

// TODO formatting the date
export function formatDate(date: string, includeRelative = true) { // ? 2nd param: add how many days ago the post has been published
  let currentDate = new Date();
  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = ''
  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo} year${yearsAgo > 1 ? 's' : ''} ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo} month${monthsAgo > 1 ? 's' : ''} ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`;
  } else {
    formattedDate = 'Today';
  }

  let fullDate = targetDate.toLocaleString("en-us", { month: "long", day: "numeric", year: "numeric" });

  //  if (!includeRelative) {return fullDate;}
  // return includeRelative ? `${formattedDate} (${targetDate.toDateString()})` : fullDate;
  return includeRelative ? `${fullDate} (${formattedDate})` : fullDate;
}

export function getTermsOfServices() {
  return getMDXData(
    path.join(process.cwd(), "src", "app", "terms-of-services")
  );
}

export function getPrivacyPolicy() {
  return getMDXData(path.join(process.cwd(), "src", "app", "privacy-policy"));
}