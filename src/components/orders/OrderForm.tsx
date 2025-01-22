"use client";
import { CalendarOutlined, SettingOutlined } from "@ant-design/icons";
import { Button, Cascader, Col, DatePicker, Form, Input, Row, Select, Space } from "antd";

export default function OrderForm() {

    return (
        <div className="px-44 my-10">
            <div className="mb-5">
                <h3 className="text-xl font-bold">
                    Crea una orden
                </h3>
                <p>
                    Dale una ventaja competitiva a tu negocio con entregas el <b>mismo día</b>  (Área Metropolitana) y <b>el día siguiente</b> a nivel nacional.
                </p>
            </div>

            <Form
                className="boxful-bg-primary"
                layout="vertical"
                name="order"
                style={{ border: "1px solid #e5e7eb", borderRadius: "10px", padding: "30px" }}
            >
                <Row gutter={16}>
                    <Col span={16}>
                        <Form.Item
                            label="Dirección de recolección"
                            name="direccionRecoleccion"
                            rules={[{ required: true, message: "Por favor ingresa la dirección de recolección" }]}
                        >
                            <Input placeholder="Ingrese la dirección de recolección" size="large" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label="Fecha Programada"
                            name="fechaProgramada"
                            rules={[{ required: true, message: "Por favor selecciona una fecha" }]}
                        >
                            <DatePicker size="large" suffixIcon={<CalendarOutlined />} style={{ width: "100%" }} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item
                            label="Nombres"
                            name="nombres"
                            rules={[{ required: true, message: "Por favor ingresa los nombres" }]}
                        >
                            <Input placeholder="Ingrese los nombres" size="large" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label="Apellidos"
                            name="apellidos"
                            rules={[{ required: true, message: "Por favor ingresa los apellidos" }]}
                        >
                            <Input placeholder="Ingrese los apellidos" size="large" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label="Correo Electrónico"
                            name="correoElectronico"
                            rules={[{ required: true, type: "email", message: "Por favor ingresa un correo válido" }]}
                        >
                            <Input placeholder="Correo Electrónico" size="large" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item
                            label="Teléfono"
                            name="telefono"
                            rules={[{ required: true, message: "Por favor ingresa un número de teléfono" }]}
                        >
                            <Input size="large" addonBefore={"+503"} placeholder="Número de teléfono" />
                        </Form.Item>
                    </Col>
                    <Col span={16}>
                        <Form.Item
                            label="Dirección del destinatario"
                            name="direccionDestinatario"
                            rules={[{ required: true, message: "Por favor ingresa la dirección del destinatario" }]}
                        >
                            <Input placeholder="Ingrese la dirección del destinatario" size="large" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item
                            label="Departamento"
                            name="departamento"
                            rules={[{ required: true, message: "Por favor selecciona un departamento" }]}
                        >
                            <Select placeholder="Selecciona un departamento" size="large">
                                <Select.Option value="San Salvador">San Salvador</Select.Option>
                                <Select.Option value="San Miguel">San Miguel</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label="Municipio"
                            name="municipio"
                            rules={[{ required: true, message: "Por favor ingresa el municipio" }]}
                        >
                            <Select placeholder="Selecciona un municipio" size="large">
                                <Select.Option value="San Salvador">San Salvador</Select.Option>
                                <Select.Option value="San Miguel">San Miguel</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label="Punto de Referencia"
                            name="puntoReferencia"
                        >
                            <Input placeholder="Cerca de redondel Árbol de la Paz" size="large" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            label="Indicaciones"
                            name="indicaciones"
                        >
                            <Input placeholder="Indicaciones adicionales" size="large" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row style={{ flexDirection: "row-reverse" }}>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block size="large">
                            Siguiente
                        </Button>
                    </Form.Item>
                </Row>
            </Form>
        </div>
    )
}