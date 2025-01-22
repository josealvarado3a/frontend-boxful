
import OrderForm from "@/components/orders/OrderForm";
import TopBar from "@/components/TopBar";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Header className="bottom-border-color" style={{ background: "#ffff", padding: "20px" }}>
          <TopBar />
        </Header>
        <Content>
          <OrderForm />
        </Content>
      </Layout>
    </>
  )
}
