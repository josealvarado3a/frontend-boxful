"use client";
import React, { useEffect, useState } from "react";
import { DeleteFilled, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Space, Typography } from "antd";
import BoxFilled from "../ui/icons/BoxFilled";
import { IOrderForm, iPackage } from "@/types/types";

const { Text } = Typography;

interface iOrderDetailFormProps {
    orderForm: IOrderForm;
    setOrderForm: React.Dispatch<React.SetStateAction<IOrderForm>>;
}

const OrderDetailForm: React.FC<iOrderDetailFormProps> = ({ orderForm, setOrderForm }) => {
    const [btnDisabled, setBtnDisabled] = useState<boolean>(false);
    const [currentPackage, setCurrentPackage] = useState<iPackage>({
        length: "",
        height: "",
        width: "",
        weight: "",
        content: "",
    });

    // Maneja los cambios en los campos del formulario
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCurrentPackage({
            ...currentPackage,
            [name]: value,
        });
    };

    // Agrega un bulto a la lista de bultos
    const handleAddPackage = () => {
        if (currentPackage.length && currentPackage.height && currentPackage.width && currentPackage.weight && currentPackage.content) {
            const newPackages = [...orderForm.packages, currentPackage];
            setOrderForm({
                ...orderForm,
                packages: newPackages,
            });
            setCurrentPackage({
                length: "",
                height: "",
                width: "",
                weight: "",
                content: "",
            });
        }
    };

    // Verifica que los campos del bulto actual no estén vacíos para habilitar el botón de agregar
    useEffect(() => {
        if (currentPackage.length && currentPackage.height && currentPackage.width && currentPackage.weight && currentPackage.content) {
            setBtnDisabled(false);
        } else {
            setBtnDisabled(true);
        }
    }, [currentPackage]);

    // Elimina un bulto de la lista de bultos
    const handleDeletePackage = (index: number) => {
        const newPackages = orderForm.packages.filter((_, i) => i !== index);
        setOrderForm({
            ...orderForm,
            packages: newPackages,
        });
    };

    return (
        <div>
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
                                            >
                                                <Input size="large" suffix={<span className="alt-text-color">cm</span>} value={currentPackage.length} onChange={handleChange} name="length" />
                                            </Form.Item>
                                        </Col>
                                        <Col span={8}>
                                            <Form.Item
                                                className="form-item"
                                                label={<span className="alt-text-color font-semibold">Alto</span>}
                                            >
                                                <Input size="large" suffix={<span className="alt-text-color">cm</span>} value={currentPackage.height} onChange={handleChange} name="height" />
                                            </Form.Item>
                                        </Col>
                                        <Col span={8}>
                                            <Form.Item
                                                className="form-item"
                                                label={<span className="alt-text-color font-semibold">Ancho</span>}
                                            >
                                                <Input size="large" suffix={<span className="alt-text-color">cm</span>} value={currentPackage.width} onChange={handleChange} name="width" />
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
                            >
                                <Input size="large" suffix={<span className="alt-text-color">lb</span>} value={currentPackage.weight} onChange={handleChange} name="weight" />
                            </Form.Item>
                        </Col>
                        <Col span={11}>
                            <Form.Item
                                label={<span className="alt-text-color font-semibold">Contenido</span>}
                            >
                                <Input size="large" placeholder="Descripción del bulto" value={currentPackage.content} onChange={handleChange} name="content" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row style={{ flexDirection: "row-reverse", margin: "10px" }}>
                        <Col span={4}>
                            <Button type="primary" htmlType="button" block size="large" icon={<PlusOutlined />} onClick={handleAddPackage} disabled={btnDisabled}>
                                Agregar
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Space.Compact className="my-3">
                    <Text className="alt-text-color font-semibold">
                        Bultos agregados
                    </Text>
                </Space.Compact>
                {orderForm.packages.map((pkg, index) => (
                    <Col span={24} className="boder-color-green rounded-md p-3" key={index}>
                        <Row gutter={16}>
                            <Col span={3}>
                                <Form.Item
                                    className="form-item-disabled"
                                    label={<span className="alt-text-color font-semibold">Peso en libras</span>}
                                >
                                    <Input size="large" suffix={<span className="alt-text-color">lb</span>} disabled value={pkg.weight} />
                                </Form.Item>
                            </Col>
                            <Col span={11}>
                                <Form.Item
                                    label={<span className="alt-text-color font-semibold">Contenido</span>}
                                >
                                    <Input size="large" placeholder="Descripción del bulto" disabled className="input-disabled" value={pkg.content} />
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
                                                    <Input size="large" suffix={<span className="alt-text-color">cm</span>} disabled value={pkg.length} />
                                                </Form.Item>
                                            </Col>
                                            <Col span={8}>
                                                <Form.Item
                                                    className="form-item-disabled"
                                                    label={<span className="alt-text-color font-semibold">Alto</span>}
                                                >
                                                    <Input size="large" suffix={<span className="alt-text-color">cm</span>} disabled value={pkg.height} />
                                                </Form.Item>
                                            </Col>
                                            <Col span={8}>
                                                <Form.Item
                                                    className="form-item-disabled"
                                                    label={<span className="alt-text-color font-semibold">Ancho</span>}
                                                >
                                                    <Input size="large" suffix={<span className="alt-text-color">cm</span>} disabled value={pkg.width} />
                                                </Form.Item>
                                            </Col>
                                        </Space.Compact>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row style={{ flexDirection: "row-reverse" }}>
                            <Button type="text" htmlType="button" size="large" danger icon={<DeleteFilled />} shape="circle" onClick={() => handleDeletePackage(index)} />
                        </Row>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default OrderDetailForm;