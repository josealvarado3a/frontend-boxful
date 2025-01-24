"use client";
import { Button, Col, Form, Row, Typography } from "antd";
import { useState } from "react";
import InfoOrderForm from "./InfoOrderForm";
import OrderDetailForm from "./OrderDetailForm";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { IOrderForm } from "@/types/types";

const { Title, Text } = Typography;

export default function OrderForm() {
    const [currentStep, setCurrentStep] = useState(1); // Estado para controlar el paso actual del formulario
    const [orderForm, setOrderForm] = useState<IOrderForm>({
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
        packages: [],
    });

    // Manejador de cambios en los campos del formulario
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setOrderForm({
            ...orderForm,
            [name]: value,
        });
    }

    // Manejador de cambios en la fecha programada
    const handleDateChange = (date: string, dateString: string | string[] | null | undefined) => {
        setOrderForm({
            ...orderForm,
            scheduledDate: typeof dateString === 'string' ? dateString : '',
        });
    }

    // Manejador de envío del formulario
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(orderForm);
    }

    // Función para avanzar al siguiente paso
    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    }

    // Función para retroceder al paso anterior
    const prevStep = () => {
        setCurrentStep(currentStep - 1);
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
                {currentStep === 1 && (
                    <InfoOrderForm
                        orderForm={orderForm}
                        handleChange={handleChange}
                        handleDateChange={handleDateChange}
                        setOrderForm={setOrderForm}
                    />
                )}
                {currentStep === 2 && (
                    <OrderDetailForm 
                    orderForm={orderForm}
                    setOrderForm={setOrderForm}
                    />
                )}

                <Row style={{ marginTop: "20px" }}>
                    <Col span={12}>
                        {currentStep > 1 && (
                            <Button type="default" onClick={prevStep} size="large" icon={<ArrowLeftOutlined />}>
                                Atrás
                            </Button>
                        )}
                    </Col>
                    <Col span={12} style={{ textAlign: "right" }}>
                        {currentStep < 2 && (
                            <Button type="primary" onClick={nextStep} size="large">
                                Siguiente
                            </Button>
                        )}
                        {currentStep === 2 && (
                            <Button type="primary" htmlType="submit" size="large" icon={<ArrowRightOutlined />} iconPosition="end">
                                Enviar
                            </Button>
                        )}
                    </Col>
                </Row>
            </Form>
        </div>
    );
}