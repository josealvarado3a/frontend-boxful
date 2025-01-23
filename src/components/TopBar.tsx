"use client";
import logotipo from "@/assets/logotipo_boxful.svg";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Space, Switch } from "antd";

export default function TopBar() {
    return (
        <nav className="flex justify-between items-center">
            <img src={logotipo.src} alt="Logotipo Boxful" className="h-8" />
            
        </nav>
    );
}