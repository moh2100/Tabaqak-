import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    ar: {
        translation: {
            "nav": {
                "home": "الرئيسية",
                "features": "المميزات",
                "app": "التطبيق",
                "partners": "للمطاعم",
                "captain": "للكابتن",
                "download": "حمل التطبيق",
                "download_now": "حمل التطبيق الآن"
            },
            "hero": {
                "available_now": "متاح الآن في النجف الأشرف",
                "title_1": "أطيب أكل،",
                "title_2": "يوصل لباب بيتك.",
                "subtitle": "تطبيق \"طبقك\" يجمع لك أفضل مطاعم النجف بمكان واحد. اطلب القيمة، البيتزا، والوجبات السريعة وتوصلك حارة وبسرعة.",
                "coming_soon": "قريباً على",
                "direct_download": "تحميل مباشر",
                "downloads": "+50 ألف تحميل",
                "rating": "4.9 تقييم",
                "mockup_welcome": "يا هلا، علي 👋",
                "mockup_question": "شنو مشتهي تاكل اليوم؟",
                "cat_grill": "مشويات",
                "cat_qeema": "قيمة نجفية",
                "cat_fastfood": "وجبات سريعة",
                "cat_sweets": "حلويات",
                "item_kebab": "كباب عراقي",
                "item_daheen": "دهينة النجف",
                "item_pizza": "بيتزا خضار",
                "notif_order_arrived": "وصل الطلب",
                "notif_enjoy": "بالعافية عليك!",
                "promo_discount": "خصم خاص"
            },
            "features": {
                "title": "ليش تختار طبقك؟",
                "subtitle": "مميزات صممت خصيصاً لراحتك",
                "speed_title": "توصيل طيارة",
                "speed_desc": "كباتننا منتشرين بكل مكان بالنجف، طلبك يوصلك بأسرع وقت.",
                "variety_title": "كل المطاعم عندك",
                "variety_desc": "من القيمة النجفية للبرغر، كل شي تشتهيه موجود.",
                "tracking_title": "تتبع طلبك لحظة بلحظة",
                "tracking_desc": "شوف الكابتن وين وصل على الخريطة لحد ما يدك بابك.",
                "offers_title": "عروض وخصومات حصرياً",
                "offers_desc": "وجبات بأسعار مميزة وتوصيل مجاني بأوقات محددة."
            },
            "footer": {
                "desc": "تطبيق طبقك هو رفيقك المثالي للحصول على أشهى المأكولات من أفضل المطاعم في مدينتك، بسرعة وسهولة.",
                "quick_links": "روابط سريعة",
                "about": "عن التطبيق",
                "features_link": "المميزات",
                "join_partner": "انضم كشريك",
                "join_captain": "انضم ككابتن",
                "support": "الدعم والمساعدة",
                "help_center": "مركز المساعدة",
                "terms": "الشروط والأحكام",
                "privacy": "سياسة الخصوصية",
                "contact": "تواصل معنا",
                "follow_us": "تابعنا",
                "copyright": "جميع الحقوق محفوظة لتطبيق طبقك.",
                "dev_love": "تم التطوير بحب ❤️"
            },
            "stats": {
                "downloads": "عملية تحميل",
                "partners": "مطعم وشريك",
                "users": "مستخدم نشط",
                "rating": "تقييم المتجر"
            },
            "contact": {
                "welcome": "مرحباً بك 👋",
                "help_msg": "نحن هنا لمساعدتك",
                "whatsapp": "تحدث عبر واتساب",
                "instant_reply": "رد فوري",
                "telegram": "قناة التيليجرام",
                "follow_offers": "تابع آخر العروض"
            },
            "download": {
                "title": "جوعان؟ لا تنتظر أكثر!",
                "subtitle": "حمل تطبيق طبقك الآن واستمتع بأشهى المأكولات التي تصلك أينما كنت. أول توصيل مجاني عند التسجيل."
            },
            "partners": {
                "badge": "للشركاء والمطاعم",
                "title_1": "انضم لشركاء النجاح",
                "title_2": "وضاعف مبيعاتك في النجف",
                "desc": "نوفر لمطعمك تقنيات متطورة لإدارة الطلبات، وتحليلات دقيقة للأداء، وقاعدة عملاء ضخمة.",
                "growth_title": "نمو سريع",
                "growth_desc": "زيادة متوسطة بنسبة 40% في المبيعات الشهرية لشركائنا الجدد.",
                "reach_title": "وصول لأكبر شريحة",
                "reach_desc": "اعرض قائمة طعامك أمام آلاف المستخدمين النشطين يومياً.",
                "easy_title": "إدارة سهلة",
                "easy_desc": "لوحة تحكم شاملة لإدارة الطلبات والتقارير بضغطة زر.",
                "discover_btn": "اكتشف مزايا الشراكة",
                "stats_title": "أرقام النجاح في طبقك",
                "stats_subtitle": "كن جزءاً من أكبر شبكة توصيل طعام في النجف الأشرف",
                "total_orders": "إجمالي الطلبات",
                "avg_rating": "متوسط تقييم المطاعم",
                "delivery_speed": "سرعة التوصيل",
                "minute": "دقيقة",
                "partner_restaurants": "مطاعم شريكة",
                "register_btn": "سجل مطعمك الآن",
                "register_note": "انضم إلينا اليوم وابدأ باستقبال الطلبات خلال 48 ساعة"
            },
            "testimonials": {
                "badge": "كلمة مطور التطبيق",
                "title": "رسالة المطور",
                "message_p1": "تم إنشاء تطبيق",
                "brand": "طبقك",
                "message_p2": "لتسهيل طلب الطعام في ناحية القادسية من خلال منصة واحدة تجمع المطاعم المحلية والمستخدمين. يتيح التطبيق تصفح المطاعم والقوائم، اختيار الوجبات، وإرسال الطلب بطريقة بسيطة ومنظمة.",
                "message_p3": "يهدف",
                "message_p4": "إلى تحسين تجربة طلب الطعام من خلال واجهة سهلة الاستخدام وخدمة توصيل واضحة، مع دعم المطاعم المحلية وتوفير حل عملي للمستخدمين.",
                "message_p5": "يمكنك تحميل التطبيق واستخدامه لطلب وجباتك بكل سهولة.",
                "dev_name": "محمد شمخي",
                "dev_title": "المؤسس والمطور التقني",
                "made_with_pride": "صُنع بكل فخر لخدمة النجف"
            },
            "faq": {
                "title": "الأسئلة الشائعة",
                "subtitle": "أجبنا على أكثر الأسئلة تكراراً لتوفير وقتك.",
                "q1": "هل التوصيل يشمل جميع مناطق النجف؟",
                "a1": "نحن نغطي حالياً ناحية القادسية فقط، ونعمل بكل جهد على التوسع لتغطية باقي أحياء مركز محافظة النجف والأقضية المجاورة في القريب العاجل.",
                "q2": "ما هي طرق الدفع المتوفرة؟",
                "a2": "في الوقت الحالي، نوفر خدمة الدفع نقداً عند الاستلام (Cash on Delivery). أما خيارات الدفع الإلكتروني فهي قيد التطوير وستتوفر قريباً.",
                "q3": "كيف يمكنني التواصل مع خدمة العملاء؟",
                "a3": "فريق الدعم متواجد 24/7 لخدمتكم. يمكنك التواصل معنا مباشرة عبر <1>@tabaqakbot</1> أو من داخل التطبيق.",
                "q4": "هل يوجد حد أدنى للطلب؟",
                "a4": "الحد الأدنى يعتمد على المطعم المختار، ولكن معظم المطاعم في التطبيق توفر خيارات مرنة تبدأ من مبالغ بسيطة."
            },
            "steps": {
                "title": "طلبك يوصل بـ 3 خطوات بسيطة",
                "step1_title": "اختر وجبتك",
                "step1_desc": "تصفح مئات المطاعم والقوائم المتنوعة واختر الأكل اللي تحبه.",
                "step2_title": "حضرنا طلبك",
                "step2_desc": "المطعم راح يجهز طلبك بأعلى معايير الجودة والنظافة.",
                "step3_title": "وصلنا لبابك",
                "step3_desc": "كابتن التوصيل راح يوصلك الطلب حار وبأسرع وقت لموقعك."
            },
            "captain": {
                "title": "كن كابتن مع طبقك",
                "subtitle": "انضم إلى أسطولنا وحقق دخلاً ممتازاً مع مرونة تامة في أوقات العمل.",
                "benefit_1_title": "دخل مجزي",
                "benefit_1_desc": "أرباح تنافسية وعمولات مميزة تزيد مع زيادة التوصيل.",
                "benefit_2_title": "وقت مرن",
                "benefit_2_desc": "أنت مدير نفسك، اختر الأوقات التي تناسبك للعمل.",
                "benefit_3_title": "دعم مستمر",
                "benefit_3_desc": "فريق دعم مخصص للكباتن متواجد لمساعدتك طوال الوقت.",
                "register_btn": "سجل الآن ككابتن",
                "download_btn": "حمل تطبيق الكابتن"
            }
        }
    },
    en: {
        translation: {
            "nav": {
                "home": "Home",
                "features": "Features",
                "app": "App",
                "partners": "Restaurants",
                "captain": "Captain",
                "download": "Get App",
                "download_now": "Download App Now"
            },
            "hero": {
                "available_now": "Available now in Najaf Al-Ashraf",
                "title_1": "Best Food,",
                "title_2": "Delivered to your door.",
                "subtitle": "Tabaqak app brings together accurate Najaf restaurants in one place. Order Qeema, Pizza, and Fast Food delivered hot and fast.",
                "coming_soon": "Coming Soon",
                "direct_download": "Direct Download",
                "downloads": "+50k Downloads",
                "rating": "4.9 Rating",
                "mockup_welcome": "Hello, Ali 👋",
                "mockup_question": "What are you craving today?",
                "cat_grill": "Grills",
                "cat_qeema": "Najaf Qeema",
                "cat_fastfood": "Fast Food",
                "cat_sweets": "Sweets",
                "item_kebab": "Iraqi Kebab",
                "item_daheen": "Najaf Daheen",
                "item_pizza": "Veggie Pizza",
                "notif_order_arrived": "Order Arrived",
                "notif_enjoy": "Bon Appétit!",
                "promo_discount": "Special Discount"
            },
            "features": {
                "title": "Why Choose Tabaqak?",
                "subtitle": "Features designed for your comfort",
                "speed_title": "Lightning Fast Delivery",
                "speed_desc": "Our captains are everywhere in Najaf, your order arrives in no time.",
                "variety_title": "All Restaurants in One Place",
                "variety_desc": "From Najafi Qeema to Burgers, everything you crave is here.",
                "tracking_title": "Live Order Tracking",
                "tracking_desc": "Watch the captain's location on the map until they ring your doorbell.",
                "offers_title": "Exclusive Offers & Discounts",
                "offers_desc": "Meals at special prices and free delivery at select times."
            },
            "footer": {
                "desc": "Tabaqak is your perfect companion to get delicious food from the best restaurants in your city, fast and easy.",
                "quick_links": "Quick Links",
                "about": "About App",
                "features_link": "Features",
                "join_partner": "Join as Partner",
                "join_captain": "Join as Captain",
                "support": "Support & Help",
                "help_center": "Help Center",
                "terms": "Terms & Conditions",
                "privacy": "Privacy Policy",
                "contact": "Contact Us",
                "follow_us": "Follow Us",
                "copyright": "All rights reserved to Tabaqak App.",
                "dev_love": "Developed with Love ❤️"
            },
            "stats": {
                "downloads": "Downloads",
                "partners": "Partners & Restaurants",
                "users": "Active Users",
                "rating": "Store Rating"
            },
            "contact": {
                "welcome": "Welcome 👋",
                "help_msg": "We are here to help",
                "whatsapp": "Chat on WhatsApp",
                "instant_reply": "Instant Reply",
                "telegram": "Telegram Channel",
                "follow_offers": "Follow Offers"
            },
            "download": {
                "title": "Hungry? Don't wait!",
                "subtitle": "Download Tabaqak app now and enjoy delicious food delivered to you anywhere. First free delivery on signup."
            },
            "partners": {
                "badge": "For Partners & Restaurants",
                "title_1": "Join the Success Partners",
                "title_2": "and Double Your Sales in Najaf",
                "desc": "We provide your restaurant with advanced order management tools, performance analytics, and a huge customer base.",
                "growth_title": "Fast Growth",
                "growth_desc": "Average 40% increase in monthly sales for new partners.",
                "reach_title": "Reach More Customers",
                "reach_desc": "Display your menu to thousands of active users daily.",
                "easy_title": "Easy Management",
                "easy_desc": "Complete dashboard for orders and reports with one click.",
                "discover_btn": "Discover Partnership Benefits",
                "stats_title": "Success Numbers at Tabaqak",
                "stats_subtitle": "Be part of the largest food delivery network in Najaf",
                "total_orders": "Total Orders",
                "avg_rating": "Average Restaurant Rating",
                "delivery_speed": "Delivery Speed",
                "minute": "min",
                "partner_restaurants": "Partner Restaurants",
                "register_btn": "Register Your Restaurant Now",
                "register_note": "Join us today and start receiving orders within 48 hours"
            },
            "testimonials": {
                "badge": "Developer Message",
                "title": "Developer Message",
                "message_p1": "The",
                "brand": "Tabaqak",
                "message_p2": "app was created to simplify food ordering in Al-Qadisiyah through a single platform that connects local restaurants and users. The app allows browsing restaurants and menus, selecting meals, and placing orders in a simple and organized way.",
                "message_p3": "",
                "message_p4": "aims to improve the food ordering experience through an easy-to-use interface and clear delivery service, while supporting local restaurants and providing a practical solution for users.",
                "message_p5": "You can download and use the app to easily order your meals.",
                "dev_name": "Mohammed Shamkhi",
                "dev_title": "Founder & Technical Developer",
                "made_with_pride": "Made with pride to serve Najaf"
            },
            "faq": {
                "title": "Frequently Asked Questions",
                "subtitle": "We answered the most common questions to save your time.",
                "q1": "Does delivery cover all areas of Najaf?",
                "a1": "We currently cover Al-Qadisiyah area only, and we are working hard to expand to cover the rest of Najaf province neighborhoods and nearby districts soon.",
                "q2": "What are the available payment methods?",
                "a2": "Currently, we offer Cash on Delivery. Electronic payment options are under development and will be available soon.",
                "q3": "How can I contact customer service?",
                "a3": "Our support team is available 24/7 to serve you. You can contact us directly via <1>@tabaqakbot</1> or from within the app.",
                "q4": "Is there a minimum order amount?",
                "a4": "The minimum depends on the selected restaurant, but most restaurants in the app offer flexible options starting from small amounts."
            },
            "steps": {
                "title": "Your Order Arrives in 3 Simple Steps",
                "step1_title": "Choose Your Meal",
                "step1_desc": "Browse hundreds of restaurants and diverse menus and choose the food you love.",
                "step2_title": "We Prepare Your Order",
                "step2_desc": "The restaurant will prepare your order with the highest quality and hygiene standards.",
                "step3_title": "Delivered To Your Door",
                "step3_desc": "The delivery captain will deliver your order hot and as fast as possible to your location."
            },
            "captain": {
                "title": "Become a Captain",
                "subtitle": "Join our fleet and earn excellent income with complete flexibility in working hours.",
                "benefit_1_title": "Great Income",
                "benefit_1_desc": "Competitive earnings and special commissions that increase with more deliveries.",
                "benefit_2_title": "Flexible Time",
                "benefit_2_desc": "Be your own boss, choose the times that suit you to work.",
                "benefit_3_title": "Continuous Support",
                "benefit_3_desc": "Dedicated support team for captains available to help you all the time.",
                "register_btn": "Register as Captain",
                "download_btn": "Download Captain App"
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'ar',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
