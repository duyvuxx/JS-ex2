// 1. Viet ham tinh chu vi va ham tinh dien tich hinh tron bằng 1 trong 2 cách (prompt)
// + star function

// CHU VI HINH TRON
// function* tinhChuVi(r) {
//   var pi = Math.PI;
//   var perimeter = 2 * pi * r;
//   return perimeter;
// }
// var radius = +prompt("nhập bán kính");
// var circlePerimeter = tinhChuVi(radius);
// console.log("Chu vi của hình tròn là:", circlePerimeter.next());

// // DIEN TICH HINH TRON

// function* tinhDienTich(r) {
//   var pi = Math.PI;
//   var acreage = pi * r ** 2;
//   return acreage;
// }

// var radius = +prompt("nhập bán kính");
// var circleAcreage = tinhDienTich(radius);
// console.log("Diện tích của hình tròn là:", circleAcreage.next());

// 2. Viết hàm tính tổng các số nguyên tố từ 1 - n

// function isPrime(num) {
//   if (num < 2) {
//     return false;
//   }
//   for (var i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function sumPrimes(n) {
//   var sum = 0;
//   for (var i = 1; i <= n; i++) {
//     if (isPrime(i)) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// var integer = +prompt("nhập số nguyên tố")
// var result = sumPrimes(integer)

// console.log("Tổng các số nguyên tố là: " + result);

// 3. https://cdn.tgdd.vn//GameApp/1323643//Slide25-800x450.png

// 4. Nhap vao so cua ban in ra so lien truoc, lien sau cua so do, trung binh nhan cua 3 so

// var num = parseInt(prompt("Nhập số của bạn: "));

// var prevNum = num - 1;
// var nextNum = num + 1;

// var avgProduct = (num * prevNum * nextNum) / 3;

// console.log(`Số liền trước của ${num} là`, prevNum);
// console.log(`Số liền sau của ${num} là`, nextNum);
// console.log(`Trung bình nhân của ${num} ${prevNum} ${nextNum} là`, avgProduct);

// 5. Tinh n giai thua

// function tinhGiaiThua(n) {
//   if (n < 0) {
//     return NaN;
//   } else if (n == 0) {
//     return 1;
//   } else {
//     var giaiThua = 1;
//     for (var i = 1; i <= n; i++) {
//       giaiThua *= i;
//     }
//     return giaiThua;
//   }
// }

// var n = +prompt("nhập số n");
// var giaiThua = tinhGiaiThua(n);
// console.log(`Giai thừa của ${n} là`, giaiThua);
