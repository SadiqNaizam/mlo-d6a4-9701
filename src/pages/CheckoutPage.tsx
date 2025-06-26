import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { User, Mail, Phone, Home as HomeIcon, CreditCard } from 'lucide-react';

const CheckoutPage = () => {
  console.log('CheckoutPage loaded');
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    // In a real app, this would involve form validation and API calls.
    // For this prototype, we'll navigate directly to the confirmation page.
    navigate('/order-confirmation');
  };

  const orderItems = [
    { id: 1, name: 'Dorayaki Delight', price: 4.50, quantity: 2, image: 'https://img.freepik.com/free-photo/japanese-dessert-dorayaki-with-sweet-red-bean-paste-white-background_1339-160897.jpg' },
    { id: 2, name: 'Memory Bread Toast', price: 6.00, quantity: 1, image: 'https://i.pinimg.com/736x/e9/8b/16/e98b1626f233f28327a31b9d10a316c0.jpg' }
  ];

  const subtotal = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingFee = 5.00;
  const total = subtotal + shippingFee;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-slate-800 mb-8 text-center">Checkout</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Left Column: Form Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Information */}
              <Card className="rounded-xl shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-slate-700">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input id="name" placeholder="Nobita Nobi" className="pl-9 rounded-lg" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input id="phone" type="tel" placeholder="+81 12-3456-7890" className="pl-9 rounded-lg" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input id="email" type="email" placeholder="nobita@doraemon.com" className="pl-9 rounded-lg" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Information */}
              <Card className="rounded-xl shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-slate-700">Delivery Address</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <div className="relative">
                        <HomeIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input id="address" placeholder="1-2-3 Gadget Lane" className="pl-9 rounded-lg" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="Tokyo" className="rounded-lg" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input id="zip" placeholder="123-4567" className="rounded-lg" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card className="rounded-xl shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-slate-700">Payment Method</CardTitle>
                  <CardDescription>All transactions are secure and encrypted.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
                    <AccordionItem value="item-1" className="border-blue-200 rounded-lg border">
                      <AccordionTrigger className="px-4 py-3 hover:no-underline font-medium text-slate-600">
                        <div className="flex items-center gap-3">
                            <CreditCard className="h-5 w-5 text-blue-500" />
                            <span>Credit Card</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="p-4 space-y-4 border-t">
                        <div className="space-y-2">
                            <Label htmlFor="card-number">Card Number</Label>
                            <Input id="card-number" placeholder="**** **** **** 1234" className="rounded-lg" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="expiry">Expiry Date</Label>
                                <Input id="expiry" placeholder="MM/YY" className="rounded-lg" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="cvc">CVC</Label>
                                <Input id="cvc" placeholder="123" className="rounded-lg" />
                            </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            {/* Right Column: Order Summary */}
            <div className="lg:col-span-1">
              <Card className="rounded-xl shadow-md sticky top-24">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-slate-700">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {orderItems.map(item => (
                      <div key={item.id} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-3">
                          <img src={item.image} alt={item.name} className="h-12 w-12 rounded-md object-cover" />
                          <div>
                            <p className="font-medium text-slate-800">{item.name}</p>
                            <p className="text-slate-500">Qty: {item.quantity}</p>
                          </div>
                        </div>
                        <p className="font-medium text-slate-800">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                  <Separator />
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Subtotal</span>
                      <span className="font-medium text-slate-800">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Shipping</span>
                      <span className="font-medium text-slate-800">${shippingFee.toFixed(2)}</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-slate-800">Total</span>
                    <span className="text-blue-600">${total.toFixed(2)}</span>
                  </div>
                  <Button size="lg" className="w-full h-12 text-base font-bold bg-blue-500 hover:bg-blue-600 rounded-lg" onClick={handlePlaceOrder}>
                    Place Order
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;