interface dataMain {
  name: string;
  child?: any;
}
const DataMain: dataMain[] = [
  {
    name: "QUẢN LÝ TÀI KHOẢN",
    child: [
      { nameChild: "Tài khoản người dùng" },
      { nameChild: "Nhóm người dùng" },
    ],
  },
  { name: "QUẢN LÝ DỮ LIỆU NGUỒN" },
  { name: "QUẢN LÝ MÁY MÓC THIẾT BỊ" },
  { name: "QUẢN LÝ NGHIỆP VỤ" },
];

export default DataMain;
