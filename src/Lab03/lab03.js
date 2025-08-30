const item1 = {
  name: "Iphone 14 Pro Max",
  price: 300,
  inStock: true,
};

const item2 = {
  name: "Samsung Galaxy S23 Ultra",
  price: 500,
  inStock: false,
};

const item3 = {
  name: "Xiaomi 13 Pro",
  price: 200,
  inStock: true,
};

const item4 = {
  name: "Google Pixel 7 Pro",
  price: 300,
  inStock: true,
};

const item5 = {
  name: "OnePlus 11",
  price: 250,
  inStock: false,
};

const products = [item1, item2, item3, item4, item5];

console.log("Danh sách sản phẩm:", products);
// In ra tên của sản phẩm đầu tiên.
console.log("Tên sản phẩm đầu tiên:", products[0].name);

// Thay đổi giá sản phẩm thứ 2
products[1].price = 150;
console.log("Giá sản phẩm thứ 2 sau thay đổi:", products[1].price);
// Cách 2
products2 = [
  item1,
  {
    name: item2.name,
    price: 150,
    inStock: item2.inStock,
  },
  item3,
  item4,
  item5,
];

// Xoá sản phẩm cuối cùng ra khỏi danh sách va in danh sách tất cả sp
products.pop();

console.log("Danh sách sản phẩm sau khi xoá sản phẩm cuối cùng:");
products.forEach((item, index) => {
  console.log(`Sản phẩm thứ ${index + 1}:`, item);
});

// In ra tên tất cả sản phẩm
products.forEach((item, index) => {
  console.log("Tên sản phẩm:", item.name);
});

// Tạo một mảng mới chỉ gồm giá của tất cả sản phẩm
const priceProducts = products.map((item, index) => {
  return item.price;
});
console.log("Bảng giá sản phẩm:", priceProducts);

// Tạo một mảng mới chỉ gồm các sản phẩm còn hàng
const inStockProducts = products.filter((item, index) => {
  return item.inStock;
});
console.log("Danh sách sản phẩm còn hàng:", inStockProducts);

// In ra tất cả các thuộc tính của sản phẩm đầu tiên
for (let key in item1) {
  console.log(`${key}: ${item1[key]}`);
}
