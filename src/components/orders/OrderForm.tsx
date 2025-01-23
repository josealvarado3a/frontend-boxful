"use client";
import { ArrowLeftOutlined, ArrowRightOutlined, CalendarOutlined, DeleteFilled, PlusOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Form, Input, Row, Select, Space } from "antd";
import { Typography } from 'antd';
import GeoFilled from "../ui/icons/GeoFilled";
import { listDepartments } from "@/data/listDepartments";
import { listMunicipalities } from "@/data/listMunicipalities";
import { useState } from "react";
import { iDepartmentList, iMunicipalityList } from "@/types/types";
import BoxFilled from "../ui/icons/BoxFilled";

const { Title, Text } = Typography;
const departaments: iDepartmentList = listDepartments;
const municipalitys: iMunicipalityList = listMunicipalities;

export default function OrderForm() {
    const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null); // Estado para el departamento seleccionado
    const [selectedMunicipality, setSelectedMunicipality] = useState<string>(""); // Estado para el municipio seleccionado

    const [orderForm, setOrderForm] = useState({
        collectionAddress: "",
        scheduledDate: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        recipientAddress: "",
        department: "",
        municipality: "",
        referencePoint: "",
        instructions: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setOrderForm({
            ...orderForm,
            [name]: value,
        });
    }

    const handleDateChange = (date: string, dateString: string | string[] | null | undefined) => {
        setOrderForm({
            ...orderForm,
            scheduledDate: typeof dateString === 'string' ? dateString : '', // Aseguramos que dateString sea siempre un string, o asignamos un valor por defecto (como una cadena vacía)
        });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(orderForm);
    }

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
                onSubmitCapture={handleSubmit}
                className="bg-primary"
                layout="vertical"
                name="order"
                style={{ border: "1px solid #e5e7eb", borderRadius: "10px", padding: "30px" }}
            >
                <div id="step1" className="hidden">
                    <Row gutter={16}>
                        <Col span={16}>
                            <Form.Item
                                label={<span className="alt-text-color font-semibold"> 📍Dirección de recolección </span>}
                                name="direccionRecoleccion"
                                rules={[{ required: true, message: "Por favor ingresa la dirección de recolección" }]}
                            >
                                <Input placeholder="Ingrese la dirección de recolección" size="large" value={orderForm.collectionAddress} onChange={handleChange} name="collectionAddress" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label={<span className="alt-text-color font-semibold"> 📅 Fecha programada </span>}
                                name="fechaProgramada"
                                rules={[{ required: true, message: "Por favor selecciona una fecha" }]}
                            >
                                <DatePicker className="datepicker" size="large" suffixIcon={<CalendarOutlined />} style={{ width: "100%" }} value={orderForm.scheduledDate} onChange={handleDateChange} />
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
                                <Input placeholder="Ingrese los nombres" size="large" value={orderForm.firstName} onChange={handleChange} name="firstName" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label={<span className="alt-text-color font-semibold">Apellidos</span>}
                                name="apellidos"
                                rules={[{ required: true, message: "Por favor ingresa los apellidos" }]}
                            >
                                <Input placeholder="Ingrese los apellidos" size="large" value={orderForm.lastName} onChange={handleChange} name="lastName" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label={<span className="alt-text-color font-semibold">Correo Electrónico</span>}
                                name="correoElectronico"
                                rules={[{ required: true, type: "email", message: "Por favor ingresa un correo válido" }]}
                            >
                                <Input placeholder="Correo Electrónico" size="large" value={orderForm.email} onChange={handleChange} name="email" />
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
                                <Input size="large" addonBefore={"🇸🇻"} placeholder="Número de teléfono" value={orderForm.phone} name="phone" onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={1} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <GeoFilled clasName="h-6 w-6 alt-text-color" />
                        </Col>
                        <Col span={15}>

                            <Form.Item
                                label={<span className="alt-text-color font-semibold">Dirección del destinatario</span>}
                                name="direccionDestinatario"
                                rules={[{ required: true, message: "Por favor ingresa la dirección del destinatario" }]}
                            >
                                <Input placeholder="Ingrese la dirección del destinatario" size="large" value={orderForm.recipientAddress} onChange={handleChange} name="recipientAddress" />
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
                                    className="selectOption"
                                    placeholder="Selecciona un departamento"
                                    size="large"
                                    onChange={(value) => {
                                        const departmentName = departaments[value]; // Obtiene el nombre del departamento seleccionado
                                        setSelectedDepartment(value);
                                        setSelectedMunicipality(""); // Resetea el municipio seleccionado
                                        setOrderForm({
                                            ...orderForm,
                                            department: departmentName,
                                        });
                                    }}
                                    value={orderForm.department}
                                >
                                    <Select.Option value="">
                                        Selecciona un departamento
                                    </Select.Option>
                                    {Object.entries(departaments).map(([codigo, name]) => (
                                        <Select.Option key={codigo} value={codigo}>
                                            {name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label={<span className="alt-text-color font-semibold">Municipio</span>}
                                name="municipio"
                                rules={[{ required: true, message: "Por favor selecciona un municipio" }]}
                            >
                                <Select
                                    className="selectOption"
                                    placeholder="Selecciona un municipio"
                                    size="large"
                                    value={selectedMunicipality}
                                    onChange={(value) => {
                                        setSelectedMunicipality(value);
                                        setOrderForm({
                                            ...orderForm,
                                            municipality: value,
                                        });
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
                                <Input placeholder="Ingresa un punto de referencia" size="large" value={orderForm.referencePoint} onChange={handleChange} name="referencePoint" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                label={<span className="alt-text-color font-semibold">Punto de referencia</span>}
                                name="indicaciones"
                            >
                                <Input placeholder="Indicaciones adicionales" size="large" value={orderForm.instructions} onChange={handleChange} name="instructions" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row style={{ flexDirection: "row-reverse" }}>
                        <Form.Item>
                            <Button type="primary" htmlType="button" block size="large">
                                Siguiente
                            </Button>
                        </Form.Item>
                    </Row>
                </div>
                <div id="step2" className="block">
                    <Row>
                        <Text className="alt-text-color font-semibold">
                            Agrega tus bultos
                        </Text>
                        <Col span={24} className="bg-secondary my-3 rounded-md p-2 border-color">
                            <Row style={{ margin: "10px 0" }} gutter={16}>
                                <Col span={10}>
                                    <Row>
                                        <Col span={3} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <BoxFilled clasName="h-6 w-6 alt-text-color" />
                                        </Col>
                                        <Col span={21}>
                                            <Space.Compact>
                                                <Col span={8}>
                                                    <Form.Item
                                                        className="form-item"
                                                        label={<span className="alt-text-color font-semibold">Largo</span>}
                                                        name="largo"
                                                    >
                                                        <Input size="large" suffix={<span className="alt-text-color">cm</span>} />
                                                    </Form.Item>
                                                </Col>
                                                <Col span={8}>
                                                    <Form.Item
                                                        className="form-item"
                                                        label={<span className="alt-text-color font-semibold">Alto</span>}
                                                        name="alto"
                                                    >
                                                        <Input size="large" suffix={<span className="alt-text-color">cm</span>} />
                                                    </Form.Item>
                                                </Col>
                                                <Col span={8}>
                                                    <Form.Item
                                                        className="form-item"
                                                        label={<span className="alt-text-color font-semibold">Ancho</span>}
                                                        name="ancho"
                                                    >
                                                        <Input size="large" suffix={<span className="alt-text-color">cm</span>} />
                                                    </Form.Item>
                                                </Col>
                                            </Space.Compact>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={3}>
                                    <Form.Item
                                        className="form-item"
                                        label={<span className="alt-text-color font-semibold">Peso en libras</span>}
                                        name="pesoLb"
                                    >
                                        <Input size="large" suffix={<span className="alt-text-color">lb</span>} />
                                    </Form.Item>
                                </Col>
                                <Col span={11}>
                                    <Form.Item
                                        label={<span className="alt-text-color font-semibold">Contenido</span>}
                                        name="contenido"
                                    >
                                        <Input size="large" placeholder="Descripción del bulto" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row style={{ flexDirection: "row-reverse", margin: "10px" }}>
                                <Col span={4}>
                                    <Button type="primary" htmlType="button" block size="large" icon={<PlusOutlined />} iconPosition="end" disabled>
                                        Agregar
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Space.Compact className="my-3">
                            <Text className="alt-text-color font-semibold">
                                Agrega tus bultos
                            </Text>
                        </Space.Compact>
                        <Col span={24} className="boder-color-green rounded-md p-3">
                            <Row gutter={16}>
                                <Col span={3}>
                                    <Form.Item
                                        className="form-item-disabled"
                                        label={<span className="alt-text-color font-semibold">Peso en libras</span>}
                                    >
                                        <Input size="large" suffix={<span className="alt-text-color">lb</span>} disabled/>
                                    </Form.Item>
                                </Col>
                                <Col span={11}>
                                    <Form.Item
                                        label={<span className="alt-text-color font-semibold">Contenido</span>}
                                    >
                                        <Input size="large" placeholder="Descripción del bulto" disabled className="input-disabled"/>
                                    </Form.Item>
                                </Col>
                                <Col span={10}>
                                    <Row>
                                        <Col span={3} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <BoxFilled clasName="h-6 w-6 alt-text-color" />
                                        </Col>
                                        <Col span={21}>
                                            <Space.Compact>
                                                <Col span={8}>
                                                    <Form.Item
                                                        className="form-item-disabled"
                                                        label={<span className="alt-text-color font-semibold">Largo</span>}
                                                    >
                                                        <Input size="large" suffix={<span className="alt-text-color">cm</span>} disabled/>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={8}>
                                                    <Form.Item
                                                        className="form-item-disabled"
                                                        label={<span className="alt-text-color font-semibold">Alto</span>}
                                                    >
                                                        <Input size="large" suffix={<span className="alt-text-color">cm</span>} disabled/>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={8}>
                                                    <Form.Item
                                                        className="form-item-disabled"
                                                        label={<span className="alt-text-color font-semibold">Ancho</span>}
                                                    >
                                                        <Input size="large" suffix={<span className="alt-text-color">cm</span>} disabled/>
                                                    </Form.Item>
                                                </Col>
                                            </Space.Compact>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row style={{ flexDirection: "row-reverse" }}>
                                <Button type="text" htmlType="button" size="large" danger icon={<DeleteFilled />} shape="circle" />
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{ display: "flex", justifyContent: "space-between", margin: "20px 0" }}>
                        <Col span={4}>
                            <Button type="default" htmlType="submit" block size="large" icon={<ArrowLeftOutlined />}>
                                Regresar
                            </Button>
                        </Col>
                        <Col span={4}>
                            <Button type="primary" htmlType="submit" block size="large" icon={<ArrowRightOutlined />} iconPosition="end">
                                Enviar
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Form>
        </div>
    )
}