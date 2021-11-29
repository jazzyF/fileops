import jsonfile from 'jsonfile'

export function write(json: any, path: jsonfile.Path) {
    jsonfile.writeFile(path, json)
  .then(res => {
    console.log('Write complete')
    return res;
  })
  .catch(error => {
      console.error(error);
      throw error;
 })
}
