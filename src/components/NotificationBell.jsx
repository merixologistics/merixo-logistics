import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Package, Truck, CheckCircle } from 'lucide-react';

const mockNotifications = [
    { id: 1, type: 'shipped', title: 'Order Shipped', message: 'Your order MRX123456 has been shipped', time: '2 hours ago', read: false, icon: Truck },
    { id: 2, type: 'delivered', title: 'Order Delivered', message: 'Order MRX123455 was delivered successfully', time: '1 day ago', read: false, icon: CheckCircle },
    { id: 3, type: 'order', title: 'New Quote Ready', message: 'Your quote request has been processed', time: '2 days ago', read: true, icon: Package },
];

const NotificationBell = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [notifications, setNotifications] = useState(mockNotifications);

    const unreadCount = notifications.filter(n => !n.read).length;

    const markAsRead = (id) => {
        setNotifications(notifications.map(n => 
            n.id === id ? { ...n, read: true } : n
        ));
    };

    const markAllAsRead = () => {
        setNotifications(notifications.map(n => ({ ...n, read: true })));
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 text-white hover:text-spice-gold transition-colors"
            >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
                    >
                        {unreadCount}
                    </motion.span>
                )}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <div 
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute right-0 top-full mt-2 w-72 sm:w-80 bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden z-50"
                        >
                            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                                <h3 className="font-bold text-stone-900">Notifications</h3>
                                {unreadCount > 0 && (
                                    <button
                                        onClick={markAllAsRead}
                                        className="text-xs text-spice hover:text-spice-red"
                                    >
                                        Mark all as read
                                    </button>
                                )}
                            </div>

                            <div className="max-h-80 overflow-y-auto">
                                {notifications.length === 0 ? (
                                    <div className="p-6 text-center text-gray-500">
                                        No notifications
                                    </div>
                                ) : (
                                    notifications.map((notification) => (
                                        <motion.div
                                            key={notification.id}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className={`p-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors ${
                                                !notification.read ? 'bg-blue-50/50' : ''
                                            }`}
                                            onClick={() => markAsRead(notification.id)}
                                        >
                                            <div className="flex gap-3">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                                    notification.type === 'shipped' ? 'bg-blue-100 text-blue-500' :
                                                    notification.type === 'delivered' ? 'bg-green-100 text-green-500' :
                                                    'bg-orange-100 text-orange-500'
                                                }`}>
                                                    <notification.icon className="w-5 h-5" />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="font-semibold text-stone-900 text-sm">
                                                        {notification.title}
                                                    </p>
                                                    <p className="text-stone-600 text-xs mt-1">
                                                        {notification.message}
                                                    </p>
                                                    <p className="text-gray-400 text-xs mt-1">
                                                        {notification.time}
                                                    </p>
                                                </div>
                                                {!notification.read && (
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                                )}
                                            </div>
                                        </motion.div>
                                    ))
                                )}
                            </div>

                            <div className="p-3 border-t border-gray-100">
                                <button className="w-full text-center text-sm text-spice hover:text-spice-red font-medium">
                                    View All Notifications
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NotificationBell;
