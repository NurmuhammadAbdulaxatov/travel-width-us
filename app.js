alert("Travel with us bilan ishlashga rozimisiz?");
alert("Unutmang biz faqat USD valyutasida ishlaymiz.");
let shaxar = prompt("Xo'sh qayerga ketamiz? :)");

console.log("Manzil: " + shaxar + ";");

let kerak = 1260;

let pul = prompt("Mablag'ni kiriting");

console.log("Mablag': " + pul + ";");

if (pul === Number) {
  console.log("Hisobga olindi");
} else if (kerak <= pul) {
  console.log("Oq yo'l. (Shuncha pulni qayerdan oldiz)");
} else if (kerak >= pul) {
  console.log(
    "Mablag' yetarli emas, " +
      Math.round(Math.random(3) * 10) +
      " kundan so'ng qayta xabar oling"
  );
} else {
  console.log("ERROR 404 NOT FOUND");
}
