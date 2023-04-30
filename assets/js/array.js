// var languages = ["Javascript", "PHP", "Java", "C#"];

// 1. Thay the "PHP" bang "Python"

// var ex1 = languages.splice(1,1,"Python")
// console.log(`🚀 | languages:`, languages)

// 2. Tim tu ngan nhat va dai nhat trong mang

// var shortest = languages[0];
// var longest = languages[0];

// for (var i = 1; i < languages.length; i++) {
//   if (languages[i].length < shortest.length) {
//     shortest = languages[i];
//   }
//   if (languages[i].length > longest.length) {
//     longest = languages[i];
//   }
// }

// console.log("Từ ngắn nhất: " + shortest);
// console.log("Từ dài nhất: " + longest);

// 3. Tim cac tu chua chuoi "Java"

// for (var val of languages) {
//     if (val.includes("Java")) console.log(val);
// }

// 4. Them phan tu "Dart" vao dau mang va "Kolin" vao cuoi mang

// var first = languages.unshift("Dart")
// var last = languages.push("Kolin")
// console.log(`🚀 | languages:`, languages)

// 5. Hop nhat mang ban dau voi mang sau: ["Flutter","Laravel","ExpressJS",".Net"]

// var merge = ["Flutter","Laravel","ExpressJS",".Net"]
// languages = languages.concat(merge)

// console.log(`🚀 | languages:`, languages)

