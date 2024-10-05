// Create Object insert 5 keys to check validation if it is validated then add the New elements.
let obj = {
  name1: "syam",
  city: "Hyd",
  age: 20,
  Programming_languages: ["CPP", "Python", "C", "JAVA"],
  institute: "10k Coders",
};

let isvalid = true;
for (i in obj) {
  console.log(obj[i]);
  if (obj["name2"] !== undefined) {
    isvalid = true;
    break;
  } else {
    isvalid = false;
  }
}

if (isvalid === true) {
  obj["pincode"] = "123456";
  console.log("Key Present...");
} else {
  console.log("key not present");
}
console.log(obj);
