const tinhTrungBinh = (diemToan, diemVan, diemAnh) => {
  return (diemToan + diemVan + diemAnh) / 3;
};

const xepLoai = (diemTrungBinh) => {
  if (diemTrungBinh >= 9) {
    return "Xuất sắc";
  } else if (diemTrungBinh >= 8) {
    return "Giỏi";
  } else if (diemTrungBinh >= 6.5) {
    return "Khá";
  } else return "Trung bình";
};

const diemToan = 9;
const diemVan = 8;
const diemAnh = 7;

const diemTrungBinh = tinhTrungBinh(diemToan, diemVan, diemAnh);
console.log(`Điểm trung bình: ${diemTrungBinh}`);
console.log(`Xếp loại: ${xepLoai(diemTrungBinh)}`);
