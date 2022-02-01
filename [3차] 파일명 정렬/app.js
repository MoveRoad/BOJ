function solution(files) {
  let regex = /\d{1,5}/;

  files.sort((a, b) => {
    let aNumber = a.match(regex);
    let bNumber = b.match(regex);
    let aHead = a.split(aNumber)[0].toLowerCase();
    let bHead = b.split(bNumber)[0].toLowerCase();

    const compare = aHead.localeCompare(bHead);

    return compare === 0 ? aNumber - bNumber : compare;
  });

  return files;
}
