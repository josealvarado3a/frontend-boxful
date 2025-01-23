
"use client";
import OrderForm from "@/components/orders/OrderForm";
import TopBar from "@/components/TopBar";
import { MoonFilled, SunFilled } from "@ant-design/icons";
import { Layout, Space, Switch } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Leemos el valor del tema desde localStorage
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    // Aplicamos el tema al cargar el componente
    document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleThemeChange = (checked: boolean) => {
    setIsDarkMode(checked);
    // Guardamos el valor del tema en localStorage
    localStorage.setItem("theme", checked ? "dark" : "light");
    // Aplicamos el tema
    document.documentElement.setAttribute("data-theme", checked ? "dark" : "light");
  };
  
  return (
    <>
      <Layout>
        <Header className="bottom-border-color bg-primary" style={{ padding: "20px 35px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <TopBar />
          <div>
            <Space direction="vertical">
              <Switch
                checkedChildren={<MoonFilled />}
                unCheckedChildren={<SunFilled />}
                onChange={handleThemeChange}
                checked={isDarkMode}
              />
            </Space>
          </div>
        </Header>
        <Content className="bg-secondary">
          <OrderForm />
        </Content>
      </Layout>
    </>
  )
}
