import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
    en: {
        home: 'Home', services: 'Services', products: 'Products', contact: 'Contact',
        tracking: 'Track Order', about: 'About Us', getQuote: 'Get Quote',
        heroTitle: 'Global Export Solutions',
        heroSubtitle: 'Premium Quality Indian Products Delivered Worldwide',
        heroDescription: 'From the heart of India to your doorstep - we export the finest spices, rice, fruits, and vegetables to over 16 countries.',
        exploreProducts: 'Explore Products', trackShipment: 'Track Shipment',
        servicesTitle: 'Our Services', productsTitle: 'Our Products',
        globalReachTitle: 'Global Reach', contactTitle: 'Contact Us',
        trackingTitle: 'Track Your Shipment', aboutTitle: 'About Merixo',
        faqTitle: 'Frequently Asked Questions',
        testimonialsTitle: 'What Our Clients Say',
        countriesServed: 'Countries Served', productsExported: 'Products Exported',
        happyClients: 'Happy Clients', yearsExperience: 'Years Experience',
        orderPlaced: 'Order Placed', processing: 'Processing', shipped: 'Shipped',
        inTransit: 'In Transit', customs: 'Customs', delivered: 'Delivered',
        enterTrackingId: 'Enter Tracking ID', track: 'Track',
        estimatedDelivery: 'Estimated Delivery', currentLocation: 'Current Location',
        notifications: 'Notifications', noNotifications: 'No new notifications',
        viewDetails: 'View Details', learnMore: 'Learn More', sendMessage: 'Send Message',
        yourName: 'Your Name', yourEmail: 'Your Email', message: 'Message',
        allRightsReserved: 'All Rights Reserved', quickLinks: 'Quick Links',
    },
    hi: {
        home: 'होम', services: 'सेवाएं', products: 'उत्पाद', contact: 'संपर्क',
        tracking: 'ऑर्डर ट्रैक करें', about: 'हमारे बारे में', getQuote: 'कोटेशन प्राप्त करें',
        heroTitle: 'वैश्विक निर्यात समाधान',
        heroSubtitle: 'विश्वभर में प्रीमियम गुणवत्ता वाले भारतीय उत्पाद',
        heroDescription: 'भारत के दिल से आपके दरवाजे तक - हम 16 से अधिक देशों में बेहतरीन मसाले, चावल, फल और सब्जियां निर्यात करते हैं।',
        exploreProducts: 'उत्पाद देखें', trackShipment: 'शिपमेंट ट्रैक करें',
        servicesTitle: 'हमारी सेवाएं', productsTitle: 'हमारे उत्पाद',
        globalReachTitle: 'वैश्विक पहुंच', contactTitle: 'संपर्क करें',
        trackingTitle: 'अपना शिपमेंट ट्रैक करें', aboutTitle: 'मेरिक्सो के बारे में',
        faqTitle: 'अक्सर पूछे जाने वाले प्रश्न',
        testimonialsTitle: 'हमारे ग्राहक क्या कहते हैं',
        countriesServed: 'देश सेवित', productsExported: 'उत्पाद निर्यात',
        happyClients: 'खुश ग्राहक', yearsExperience: 'वर्षों का अनुभव',
        orderPlaced: 'ऑर्डर दिया गया', processing: 'प्रोसेसिंग', shipped: 'शिप किया गया',
        inTransit: 'रास्ते में', customs: 'सीमा शुल्क', delivered: 'डिलीवर किया गया',
        enterTrackingId: 'ट्रैकिंग आईडी दर्ज करें', track: 'ट्रैक करें',
        estimatedDelivery: 'अनुमानित डिलीवरी', currentLocation: 'वर्तमान स्थान',
        notifications: 'सूचनाएं', noNotifications: 'कोई नई सूचना नहीं',
        viewDetails: 'विवरण देखें', learnMore: 'और जानें', sendMessage: 'संदेश भेजें',
        yourName: 'आपका नाम', yourEmail: 'आपका ईमेल', message: 'संदेश',
        allRightsReserved: 'सर्वाधिकार सुरक्षित', quickLinks: 'त्वरित लिंक',
    },
    ar: {
        home: 'الرئيسية', services: 'الخدمات', products: 'المنتجات', contact: 'اتصل بنا',
        tracking: 'تتبع الطلب', about: 'من نحن', getQuote: 'احصل على عرض سعر',
        heroTitle: 'حلول التصدير العالمية',
        heroSubtitle: 'منتجات هندية عالية الجودة تُسلَّم في جميع أنحاء العالم',
        heroDescription: 'من قلب الهند إلى باب منزلك - نصدر أجود التوابل والأرز والفواكه والخضروات إلى أكثر من 16 دولة.',
        exploreProducts: 'استكشف المنتجات', trackShipment: 'تتبع الشحنة',
        servicesTitle: 'خدماتنا', productsTitle: 'منتجاتنا',
        globalReachTitle: 'الانتشار العالمي', contactTitle: 'اتصل بنا',
        trackingTitle: 'تتبع شحنتك', aboutTitle: 'عن ميريكسو',
        faqTitle: 'الأسئلة الشائعة', testimonialsTitle: 'ماذا يقول عملاؤنا',
        countriesServed: 'دولة نخدمها', productsExported: 'منتج مُصدَّر',
        happyClients: 'عميل سعيد', yearsExperience: 'سنوات الخبرة',
        orderPlaced: 'تم الطلب', processing: 'قيد المعالجة', shipped: 'تم الشحن',
        inTransit: 'في الطريق', customs: 'التخليص الجمركي', delivered: 'تم التسليم',
        enterTrackingId: 'أدخل رقم التتبع', track: 'تتبع',
        estimatedDelivery: 'التسليم المتوقع', currentLocation: 'الموقع الحالي',
        notifications: 'الإشعارات', noNotifications: 'لا توجد إشعارات جديدة',
        viewDetails: 'عرض التفاصيل', learnMore: 'اعرف المزيد', sendMessage: 'إرسال الرسالة',
        yourName: 'اسمك', yourEmail: 'بريدك الإلكتروني', message: 'الرسالة',
        allRightsReserved: 'جميع الحقوق محفوظة', quickLinks: 'روابط سريعة',
    },
    zh: {
        home: '首页', services: '服务', products: '产品', contact: '联系我们',
        tracking: '追踪订单', about: '关于我们', getQuote: '获取报价',
        heroTitle: '全球出口解决方案', heroSubtitle: '优质印度产品送达全球',
        heroDescription: '从印度心脏到您的家门口 - 我们向16多个国家出口最优质的香料、大米、水果和蔬菜。',
        exploreProducts: '浏览产品', trackShipment: '追踪货物',
        servicesTitle: '我们的服务', productsTitle: '我们的产品',
        globalReachTitle: '全球覆盖', contactTitle: '联系我们',
        trackingTitle: '追踪您的货物', aboutTitle: '关于Merixo',
        faqTitle: '常见问题', testimonialsTitle: '客户评价',
        countriesServed: '服务国家', productsExported: '出口产品',
        happyClients: '满意客户', yearsExperience: '年经验',
        orderPlaced: '已下单', processing: '处理中', shipped: '已发货',
        inTransit: '运输中', customs: '清关中', delivered: '已送达',
        enterTrackingId: '输入追踪号码', track: '追踪',
        estimatedDelivery: '预计送达', currentLocation: '当前位置',
        notifications: '通知', noNotifications: '没有新通知',
        viewDetails: '查看详情', learnMore: '了解更多', sendMessage: '发送消息',
        yourName: '您的姓名', yourEmail: '您的邮箱', message: '留言',
        allRightsReserved: '版权所有', quickLinks: '快速链接',
    },
    ja: {
        home: 'ホーム', services: 'サービス', products: '製品', contact: 'お問い合わせ',
        tracking: '注文追跡', about: '会社概要', getQuote: '見積もり',
        heroTitle: 'グローバル輸出ソリューション', heroSubtitle: '高品質なインド製品を世界中にお届け',
        heroDescription: 'インドの中心からお客様のもとへ - 16カ国以上に最高級のスパイス、米、果物、野菜を輸出しています。',
        exploreProducts: '製品を見る', trackShipment: '配送追跡',
        servicesTitle: 'サービス', productsTitle: '製品',
        globalReachTitle: 'グローバル展開', contactTitle: 'お問い合わせ',
        trackingTitle: '配送追跡', aboutTitle: 'Merixoについて',
        faqTitle: 'よくある質問', testimonialsTitle: 'お客様の声',
        countriesServed: '対応国数', productsExported: '輸出製品数',
        happyClients: '満足のお客様', yearsExperience: '年の経験',
        orderPlaced: '注文受付', processing: '処理中', shipped: '発送済み',
        inTransit: '配送中', customs: '通関中', delivered: '配達完了',
        enterTrackingId: '追跡番号を入力', track: '追跡',
        estimatedDelivery: '配達予定日', currentLocation: '現在地',
        notifications: '通知', noNotifications: '新しい通知はありません',
        viewDetails: '詳細を見る', learnMore: '詳しく見る', sendMessage: '送信',
        yourName: 'お名前', yourEmail: 'メールアドレス', message: 'メッセージ',
        allRightsReserved: '全著作権所有', quickLinks: 'クイックリンク',
    },
};

const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'ar', name: 'العربية', flag: '🇦🇪' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
];

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => localStorage.getItem('merixo-language') || 'en');
    
    useEffect(() => {
        localStorage.setItem('merixo-language', language);
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    }, [language]);

    const t = (key) => translations[language]?.[key] || translations['en'][key] || key;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, languages }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
export default LanguageContext;
