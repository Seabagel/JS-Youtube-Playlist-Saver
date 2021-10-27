console.clear();
let entry = "";
document.querySelectorAll('#video-title').forEach(i => entry += `\n${i.title}`);
console.log(entry);