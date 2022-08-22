const fs = require('fs');
const path = require('path')
let dirPath = path.resolve(__dirname, '../docs')
let sidebarPath = path.resolve(__dirname, '../utils/sidebar.js')
// fs.readdir(dirPath, (err, files) => {
//     if (err) {
//         console.log(err);
//     } else {
//         const sidebar = files.filter(item => item.indexOf('.md') > -1 && item !== 'index.md');
//         sidebar.sort((a, b) => { return a - b });
//         const sidebarFull = sidebar.map(item => ({
//             text: item.substr(0, item.length - 3),
//             link: item
//         }))
//         sidebarFull.unshift({
//             text: '简介',
//             link: 'index.md'
//         });
//         const content = `module.exports =${JSON.stringify(sidebarFull)}`;
//         fs.writeFile(sidebarPath, content, { encoding: 'utf8' }, err => { console.log(err); });
//     }
// })
/*
 * 自定义扩展js函数库 
 * @time:181203
 * @add : string.replaceAll()---字符替换所有指定字符
 */

/*
 * string.replaceAll()---字符替换所有指定字符
 * @parameter： FindText--原文本要替换值
 * @parameter： RepText--将要替换值
 */
String.prototype.replaceAll = function (FindText, RepText) {
  var regExp = new RegExp(FindText, "g");
  return this.replace(regExp, RepText);
}

/*
 * @name:
 * @author: wuxd
 * @Date: 2021-03-24 10:20:33
 * @LastEditTime: 2021-04-22 19:08:55
 */
const dirTree = require("directory-tree");
const SRC_PATH = path.resolve(__dirname, "../src");
function compareFiles(a, b) {

  return a.name.localeCompare(b.name, 'zh-CN', { numeric: true })
  // return a.name > b.name ? 1 : -1
}
// 按照 vuepress '分组侧边栏'的规范生成单个配置
// https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F%E5%88%86%E7%BB%84
function toSidebarOption(tree = []) {
  if (!Array.isArray(tree)) return [];
  // console.log("tree", tree);
  // tree.forEach()
  return tree.map((v) => {
    if (v.type === "directory") {
      let arr = v.children.sort(compareFiles);
      console.log("arr", arr);
      return {
        text: v.name,//.split("-")[1],
        collapsible: true, // 可选的, 默认值是 true,
        // link: v.path.split("docs")[1].replace(/\.md$/, ""),
        // sidebarDepth: 10,
        children: toSidebarOption(v.children),
      };
    } else {
      // console.log("vvv111", v);
      // 因为所有的md文件必须放到'docs'文件夹下
      // 所以相对路径就是'docs'后面的部分
      // 最后把扩展名去掉, 就是路由的路径
      // return v.path.split("docs")[1].replace(/\.md$/, "");
      let namePrev = v.name.indexOf("-") > -1 ? v.name.split("-")[1] : v.name;
      if (namePrev.indexOf("README.md") > -1)
        return ""
      else
        return {
          text: v.name,
          link: v.path.split("docs")[1],//.replace(/\.md$/, ""),
        };

    }
  });
}

/**
 * @desc 根据 自定义文件夹'docs/src'自动生成vuepress的sidebar选项
 * @param {string} srcPath 自定义文件夹路径,必须在docs文件夹下
 * @returns {object[]}
 */
function autoGetSidebarOptionBySrcDir(srcPath = SRC_PATH) {
  const srcDir = dirTree(srcPath, {
    attributes: ['type'],
    extensions: /\.md$/,
    normalizePath: true,
  });

  return toSidebarOption(srcDir.children);
}


function getContent() {
  let arr = autoGetSidebarOptionBySrcDir(path.resolve(__dirname, "../../notes"));
  let content = JSON.stringify(arr).split(',""').join('')
  let content2 = JSON.parse(content);
  // const content = `module.exports =${JSON.stringify(arr)}`.split(',""').join('');
  // console.log(content)
  return content2;
}
let arr = autoGetSidebarOptionBySrcDir(path.resolve(__dirname, "../docs/notes"));
const content = `module.exports =${JSON.stringify(arr)}`.split(',""').join('');
// content.localeCompare
console.log(sidebarPath)
fs.writeFile(sidebarPath, content, { encoding: 'utf8' }, err => { console.log(err); });

