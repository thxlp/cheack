"use client";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React from "react";


export function Home() {
  return (
    <main className="flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-2">
        ตรวจสอบที่พักก่อนโอนเงิน เพื่อความปลอดภัยของคุณ
      </h1>
      <p className="text-gray-700 text-center max-w-xl mb-8">
        ป้องกันการถูกหลอกลวงโดยมิจฉาชีพแอบอ้างเป็นเจ้าของที่พัก ตรวจสอบความน่าเชื่อถือได้ง่ายๆ ก่อนจ่ายเงินจองบ้านพักหรือโรงแรมผ่านช่องทางออนไลน์
      </p>

      <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-2xl">
        <h2 className="text-xl font-semibold text-center mb-4 text-blue-800">
          ค้นหาและตรวจสอบผู้ให้บริการที่พัก
        </h2>

        <div className="flex justify-center gap-4 mb-4">
          <label className="flex items-center space-x-2">
            <Checkbox defaultChecked />
            <span>ตรวจสอบด้วยข้อความ</span>
          </label>
          <label className="flex items-center space-x-2">
            <Checkbox />
            <span>ตรวจสอบด้วยรูปภาพ</span>
          </label>
        </div>

        <div className="flex items-center gap-2">
          <Input
            placeholder="ใส่ชื่อเพจ / เบอร์โทรศัพท์ / เลขบัญชีธนาคาร"
            className="flex-grow"
          />
          <Button variant="default">
            <Search className="mr-2 h-4 w-4" />
            ตรวจสอบ
          </Button>
        </div>
      </div>
    </main>
  );
}
