import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Shadcn UI Components
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

// Icons
import { CheckCircle2, Home, UtensilsCrossed } from 'lucide-react';

const OrderConfirmationPage = () => {
    console.log('OrderConfirmationPage loaded');

    // Placeholder order data to simulate a real order
    const orderDetails = {
        id: 'DDA-12345',
        items: [
            { name: 'Dorayaki Delight', quantity: 2, price: 5.00 },
            { name: 'Memory Bread Toast', quantity: 1, price: 7.50 },
            { name: 'Giggle-Ade', quantity: 1, price: 3.00 },
        ],
        total: 20.50,
        estimatedTime: '15-20 minutes',
    };

    return (
        <div className="flex flex-col min-h-screen bg-blue-50">
            <Header />

            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className="text-center mb-8"
                    >
                        <img 
                            src="https://i.pinimg.com/originals/f1/a0/b0/f1a0b0931268481334f54c414925e511.gif" 
                            alt="Doraemon celebrating the order"
                            className="mx-auto h-48 w-48"
                        />
                    </motion.div>

                    <Card className="shadow-lg w-full">
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl font-bold text-blue-600">Thank You for Your Order!</CardTitle>
                            <CardDescription className="text-slate-600">Your adventure in flavor is about to begin!</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <Alert variant="default" className="bg-green-100 border-green-300 text-green-800">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <AlertTitle>Order Placed Successfully!</AlertTitle>
                                <AlertDescription>
                                    We've received your order and are preparing it with extra fun.
                                </AlertDescription>
                            </Alert>

                            <div className="space-y-4">
                               <div className="flex justify-between items-center text-sm text-slate-500">
                                    <span>Order Number:</span>
                                    <span className="font-mono font-semibold text-slate-700">{orderDetails.id}</span>
                               </div>
                                <div className="flex justify-between items-center text-sm text-slate-500">
                                    <span>Estimated Fulfillment:</span>
                                    <span className="font-semibold text-slate-700">{orderDetails.estimatedTime}</span>
                                </div>
                            </div>
                            
                            <Separator />

                            <div>
                                <h4 className="font-semibold text-lg mb-3 text-slate-800">Order Summary</h4>
                                <ul className="space-y-2">
                                    {orderDetails.items.map((item) => (
                                        <li key={item.name} className="flex justify-between text-slate-600 text-sm">
                                            <span>{item.name} x {item.quantity}</span>
                                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Separator className="my-3" />
                                <div className="flex justify-between font-bold text-slate-800 text-lg">
                                    <span>Total</span>
                                    <span>${orderDetails.total.toFixed(2)}</span>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                            <Button asChild size="lg" className="w-full sm:w-auto">
                                <Link to="/">
                                    <Home className="mr-2 h-4 w-4" />
                                    Back to Home
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                                <Link to="/menu">
                                    <UtensilsCrossed className="mr-2 h-4 w-4" />
                                    Keep Browsing Menu
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default OrderConfirmationPage;