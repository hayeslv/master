const fs = require("fs")

const fileDirName = "type-challenges"

function getDirName(dirPath) {
  const files = fs.readdirSync(dirPath);
  const filePreName = `${dirPath}/${files.length}-`
  return filePreName
}

const filePreName = getDirName(fileDirName)

function createFile(path) {
  fs.writeFile(path, '', (error) => {
    if(error) {
      console.log(error);
      return false
    }
  })
}

// 创建文件夹
fs.mkdirSync(filePreName)

// 创建文件
createFile(`${filePreName}/README.md`)
createFile(`${filePreName}/template.ts`)
createFile(`${filePreName}/test-cases.ts`)