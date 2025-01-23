"use client";
import { CalendarOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import { Typography } from 'antd';
import GeoFill from "../ui/icons/GeoFill";
import { listDepartments } from "@/data/listDepartments";
import { listMunicipalities } from "@/data/listMunicipalities";
import { useState } from "react";
import { iDepartmentList, iMunicipalityList } from "@/types/types";

const { Title, Text } = Typography;
const departaments: iDepartmentList = listDepartments;
const municipalitys: iMunicipalityList = listMunicipalities;

export default function OrderForm() {
    const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null); // Estado para el departamento seleccionado
    const [selectedMunicipality, setSelectedMunicipality] = useState<string>(""); // Estado para el municipio seleccionado

    return (
        <div className="px-44 my-10">
            <div className="mb-5">
                <Title level={3}>
                    Crea una orden
                </Title>
                <Text className="alt-text-color">
                    Dale una ventaja competitiva a tu negocio con entregas el <b>mismo día</b>  (Área Metropolitana) y <b>el día siguiente</b> a nivel nacional.
                </Text>
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
                            label={<span className="alt-text-color font-semibold"> 📍Dirección de recolección </span>}
                            name="direccionRecoleccion"
                            rules={[{ required: true, message: "Por favor ingresa la dirección de recolección" }]}
                        >
                            <Input placeholder="Ingrese la dirección de recolección" size="large" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label={<span className="alt-text-color font-semibold"> 📅 Fecha programada </span>}
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
                            label={<span className="alt-text-color font-semibold">Nombres</span>}
                            name="nombres"
                            rules={[{ required: true, message: "Por favor ingresa los nombres" }]}
                        >
                            <Input placeholder="Ingrese los nombres" size="large" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label={<span className="alt-text-color font-semibold">Apellidos</span>}
                            name="apellidos"
                            rules={[{ required: true, message: "Por favor ingresa los apellidos" }]}
                        >
                            <Input placeholder="Ingrese los apellidos" size="large" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label={<span className="alt-text-color font-semibold">Correo Electrónico</span>}
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
                            label={<span className="alt-text-color font-semibold">Número de teléfono</span>}
                            name="telefono"
                            rules={[{ required: true, message: "Por favor ingresa un número de teléfono" }]}
                        >
                            <Input size="large" addonBefore={"🇸🇻"} placeholder="Número de teléfono" />
                        </Form.Item>
                    </Col>
                    <Col span={1} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <GeoFill clasName="h-6 w-6 alt-text-color" />
                    </Col>
                    <Col span={15}>

                        <Form.Item
                            label={<span className="alt-text-color font-semibold">Dirección del destinatario</span>}
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
                            label={<span className="alt-text-color font-semibold">Departamento</span>}
                            name="departamento"
                            rules={[{ required: true, message: "Por favor selecciona un departamento" }]}
                        >
                            <Select
                                placeholder="Selecciona un departamento"
                                size="large"
                                onChange={(value) => {
                                    setSelectedDepartment(value);
                                    setSelectedMunicipality(""); // Resetea el municipio seleccionado
                                }} >
                                <Select.Option value="">
                                    Selecciona un departamento
                                </Select.Option>
                                {Object.entries(departaments).map(([codigo, name]) => (
                                    <Select.Option key={codigo} value={codigo}>{name}</Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label={<span className="alt-text-color font-semibold">Municipio</span>}
                            name="municipio"
                            rules={[{ required: true, message: "Por favor ingresa el municipio" }]}
                        >
                            <Select
                                placeholder="Selecciona un municipio"
                                size="large"
                                value={selectedMunicipality}
                                onChange={(value) => {
                                    setSelectedMunicipality(value);
                                }}
                                disabled={!selectedDepartment}
                            >
                                <Select.Option value="">
                                    Selecciona un municipio
                                </Select.Option>
                                {selectedDepartment && municipalitys[selectedDepartment]?.map((municipality: string, index: number) => (
                                    <Select.Option key={index} value={municipality}>{municipality}</Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label={<span className="alt-text-color font-semibold">Punto de referencia</span>}
                            name="puntoReferencia"
                        >
                            <Input placeholder="Ingresa un punto de referencia" size="large" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            label={<span className="alt-text-color font-semibold">Punto de referencia</span>}
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