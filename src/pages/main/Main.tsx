import React from "react";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import DataMain from "../../data/data-main/DataMain";
const Main = () => {
  return (
    <div>
      <div className="flex items-center h-[50px] bg-[rgb(53,74,95)] text-white font-semibold p-2">
        <MenuUnfoldOutlined />

        <p className="ml-3">NỀN TẢNG BẢO HÀNH BẢO TRÌ MÁY MÓC THIẾT BỊ</p>
      </div>
      <div className="flex mt-2">
        <div className="w-[30%] mr-1 bg-white">
          <div className="p-2">
            {DataMain.map((item, i) => (
              <div
                key={i}
                className="p-1 border-b-[#333] border-[1px] border-solid"
              >
                <h2 className="font-bold text-[#333]">{item.name}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[70%] ml-1 bg-white">
          <div className=" h-full flex items-center justify-center">
            <p className="font-bold">
              CHÀO MỪNG ĐẾN VỚI NỀN TẢNG BẢO HÀNH BẢO TRÌ MÁY MÓC THIẾT BỊ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
