import {Col, DatePicker, Form, Input, Row, Select } from "antd";
import GeoFilled from "../ui/icons/GeoFilled";
import { listDepartments } from "@/data/listDepartments";
import { listMunicipalities } from "@/data/listMunicipalities";
import { iDepartmentList, iMunicipalityList, IOrderForm } from "@/types/types";
import { CalendarOutlined } from "@ant-design/icons";
import { useState } from "react";

const departaments: iDepartmentList = listDepartments;
const municipalitys: iMunicipalityList = listMunicipalities;

export interface IStep1Props {
    orderForm: IOrderForm;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleDateChange: (date: string, dateString: string | string[] | null | undefined) => void;
    setOrderForm: React.Dispatch<React.SetStateAction<IOrderForm>>;
}

export default function InfoOrderForm({ orderForm, handleChange, handleDateChange, setOrderForm }: IStep1Props) {
        const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
        const [selectedMunicipality, setSelectedMunicipality] = useState<string>("");
    return (
        <div>
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
        </div>
    );
}