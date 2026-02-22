<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Youssef Madkour Fitness Coaching</title>
    <style>
        /* ===== Global ===== */
        *{
            margin:0;
            padding:0;
            box-sizing:border-box;
            font-family:'Segoe UI',sans-serif;
        }

        body{
            background:#0d0d0d;
            color:white;
            direction: rtl;
        }

        html{
            scroll-behavior:smooth;
        }

        /* ===== Navbar ===== */
        nav{
            position:fixed;
            top:0;
            width:100%;
            background:#000;
            display:flex;
            justify-content:space-between;
            align-items:center;
            padding:15px 8%;
            border-bottom:2px solid #e10600;
            z-index:1000;
        }

        .logo{
            color:#e10600;
        }

        .nav-links{
            list-style:none;
            display:flex;
            gap:30px;
        }

        .nav-links a{
            text-decoration:none;
            color:white;
            transition:0.3s;
        }

        .nav-links a:hover{
            color:#e10600;
        }

        /* ===== Hero ===== */
        .hero{
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            text-align:center;
            padding:0 20px;
        }

        .hero h1{
            font-size:48px;
            color:#e10600;
            margin-bottom:20px;
            animation:fadeDown 1s ease;
        }

        .hero p{
            max-width:600px;
            margin-bottom:30px;
            opacity:0.8;
            animation:fadeUp 1.2s ease;
        }

        .btn{
            background:#e10600;
            padding:12px 30px;
            border-radius:30px;
            text-decoration:none;
            color:white;
            transition:0.3s;
        }

        .btn:hover{
            background:white;
            color:#e10600;
        }

        /* ===== Programs Include Section ===== */
        .includes{
            padding:100px 8%;
            background:#0d0d0d;
            text-align:center;
        }

        .section-title{
            color:#e10600;
            font-size:36px;
            margin-bottom:60px;
        }

        .includes-container{
            display:flex;
            justify-content:center;
            gap:30px;
            flex-wrap:wrap;
        }

        .include-card{
            background:#1a1a1a;
            border-radius:15px;
            overflow:hidden;
            width:320px;
            transition:0.4s;
            border:1px solid #222;
        }

        .include-card:hover{
            transform:translateY(-10px);
            border:1px solid #e10600;
        }

        .include-card img{
            width:100%;
            height:220px;
            object-fit:cover;
        }

        .include-card h3{
            margin:20px 0 10px 0;
            color:#e10600;
        }

        .include-card p{
            padding:0 20px 25px 20px;
            opacity:0.8;
        }

        /* ===== HOW TO START SECTION ===== */
        .how-to-start {
            padding: 100px 8%;
            background: #111;
            text-align: center;
            direction: rtl;
        }

        .how-to-start .section-subtitle {
            color: #e10600;
            font-size: 14px;
            letter-spacing: 3px;
            text-transform: uppercase;
            margin-bottom: 15px;
            opacity: 0.9;
        }

        .how-to-start .section-title {
            font-size: 40px;
            color: white;
            margin-bottom: 70px;
            font-weight: 800;
        }

        .how-to-start .section-title span {
            color: #e10600;
        }

        .steps-container {
            display: flex;
            justify-content: center;
            gap: 25px;
            flex-wrap: wrap;
            position: relative;
        }

        /* Connecting line between cards */
        .steps-container::before {
            content: '';
            position: absolute;
            top: 45px;
            left: 50%;
            transform: translateX(-50%);
            width: 75%;
            height: 2px;
            background: linear-gradient(to left, transparent, #e10600, #e10600, transparent);
            opacity: 0.3;
        }

        .step-card {
            background: #1a1a1a;
            border-radius: 16px;
            padding: 35px 25px;
            width: 260px;
            transition: 0.4s;
            border: 1px solid #222;
            position: relative;
            text-align: center;
        }

        .step-card:hover {
            transform: translateY(-12px);
            border-color: #e10600;
            background: #1f1f1f;
            box-shadow: 0 20px 40px rgba(225, 6, 0, 0.15);
        }

        .step-icon-wrapper {
            width: 80px;
            height: 80px;
            background: #111;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px auto;
            border: 2px solid #e10600;
            font-size: 32px;
            transition: 0.4s;
        }

        .step-card:hover .step-icon-wrapper {
            background: #e10600;
            transform: scale(1.1);
        }

        .step-number {
            position: absolute;
            top: -12px;
            right: 20px;
            background: #e10600;
            color: white;
            font-size: 12px;
            font-weight: 800;
            width: 26px;
            height: 26px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            letter-spacing: 0;
        }

        .step-card h3 {
            color: white;
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 12px;
        }

        .step-card p {
            color: rgba(255,255,255,0.65);
            font-size: 14px;
            line-height: 1.7;
        }

        .step-card .step-detail {
            margin-top: 15px;
            font-size: 13px;
            color: #e10600;
            opacity: 0.85;
        }

        /* ===== Plans ===== */
        .plans{
            padding:100px 8%;
            background:#111;
            text-align:center;
        }

        .plans h2{
            color:#e10600;
            margin-bottom:60px;
            font-size:36px;
        }

        .cards{
            display:flex;
            justify-content:center;
            gap:30px;
            flex-wrap:wrap;
        }

        .card{
            background:#1a1a1a;
            padding:40px 30px;
            width:300px;
            border-radius:15px;
            transition:0.4s;
            border:1px solid #222;
        }

        .card:hover{
            transform:translateY(-10px);
            border:1px solid #e10600;
        }

        .featured{
            border:1px solid #e10600;
            transform:scale(1.05);
        }

        .card h3{
            margin-bottom:15px;
        }

        .price{
            font-size:28px;
            color:#e10600;
            margin-bottom:20px;
        }

        .card ul{
            list-style:none;
            margin-bottom:25px;
        }

        .card ul li{
            margin:10px 0;
            opacity:0.8;
        }

        .card button{
            background:#e10600;
            border:none;
            padding:10px 25px;
            color:white;
            border-radius:25px;
            cursor:pointer;
            transition:0.3s;
        }

        .card button:hover{
            background:white;
            color:#e10600;
        }

        /* ===== Footer ===== */
        footer{
            background:#000;
            text-align:center;
            padding:20px;
            border-top:2px solid #e10600;
        }

        /* ===== Animations ===== */
        @keyframes fadeDown{
            from{opacity:0; transform:translateY(-40px);}
            to{opacity:1; transform:translateY(0);}
        }

        @keyframes fadeUp{
            from{opacity:0; transform:translateY(40px);}
            to{opacity:1; transform:translateY(0);}
        }

        /* ===== Milestones Section ===== */
        .milestones {
            padding: 100px 8%;
            background: #0d0d0d;
            text-align: center;
            direction: rtl;
        }

        .milestones .section-subtitle {
            color: rgba(255,255,255,0.5);
            font-size: 16px;
            margin-bottom: 15px;
            letter-spacing: 2px;
        }

        .milestones .section-main-title {
            font-size: 38px;
            font-weight: 900;
            color: white;
            margin-bottom: 70px;
            line-height: 1.3;
        }

        .milestones-grid {
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
            margin-bottom: 60px;
        }

        .milestone-item {
            flex: 1;
            min-width: 200px;
            max-width: 260px;
            text-align: center;
        }

        .milestone-item h3 {
            font-size: 22px;
            font-weight: 800;
            color: white;
            margin-bottom: 12px;
        }

        .milestone-item p {
            color: rgba(255,255,255,0.55);
            font-size: 14px;
            line-height: 1.7;
        }

        .milestone-divider {
            width: 2px;
            background: #e10600;
            opacity: 0.3;
            align-self: stretch;
            min-height: 60px;
        }

        .milestones .cta-btn {
            display: inline-block;
            background: #e10600;
            color: white;
            padding: 18px 60px;
            border-radius: 40px;
            font-size: 20px;
            font-weight: 800;
            text-decoration: none;
            transition: 0.3s;
            letter-spacing: 1px;
        }

        .milestones .cta-btn:hover {
            background: white;
            color: #e10600;
            transform: scale(1.05);
        }

        @media(max-width:768px){
            .milestone-divider { display: none; }
            .milestones .section-main-title { font-size: 26px; }
            .milestone-item { max-width: 100%; }
        }

        /* ===== Transformations Section ===== */
        .transformations {
            padding: 100px 8%;
            background: #0d0d0d;
            text-align: center;
        }

        .transformations .section-title {
            color: #e10600;
            font-size: 36px;
            margin-bottom: 60px;
        }

        .slider-wrapper {
            position: relative;
            overflow: hidden;
        }

        .slider-track {
            display: flex;
            gap: 25px;
            transition: transform 0.5s ease;
        }

        .transform-card {
            background: #1a1a1a;
            border-radius: 16px;
            overflow: hidden;
            min-width: 280px;
            flex-shrink: 0;
            border: 1px solid #222;
            transition: 0.4s;
        }

        .transform-card:hover {
            border-color: #e10600;
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(225,6,0,0.15);
        }

        .transform-images {
            display: flex;
            gap: 8px;
            padding: 15px 15px 0 15px;
        }

        .transform-images .img-box {
            flex: 1;
            position: relative;
            border-radius: 10px;
            overflow: hidden;
            height: 200px;
            background: #2a2a2a;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .transform-images .img-box img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        /* Placeholder style when no image */
        .transform-images .img-box.placeholder {
            flex-direction: column;
            gap: 8px;
            color: rgba(255,255,255,0.2);
            font-size: 12px;
        }

        .transform-images .img-box.placeholder::before {
            content: '🖼️';
            font-size: 30px;
            opacity: 0.3;
        }

        .transform-labels {
            display: flex;
            gap: 8px;
            padding: 10px 15px 0 15px;
        }

        .label-before, .label-after {
            flex: 1;
            padding: 6px 0;
            border-radius: 6px;
            font-size: 13px;
            font-weight: 800;
            letter-spacing: 1px;
            text-align: center;
        }

        .label-before {
            background: #333;
            color: white;
        }

        .label-after {
            background: #e10600;
            color: white;
        }

        .transform-name {
            padding: 15px;
            font-size: 18px;
            font-weight: 700;
            color: white;
            direction: rtl;
        }

        .slider-controls {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 40px;
        }

        .slider-btn {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 2px solid #e10600;
            background: transparent;
            color: white;
            font-size: 20px;
            cursor: pointer;
            transition: 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .slider-btn:hover {
            background: #e10600;
        }

        /* ===== Responsive ===== */
        @media(max-width:768px){
            .nav-links{ display:none; }
            .hero h1{ font-size:32px; }
            .cards{ flex-direction:column; align-items:center; }
            .featured{ transform:none; }
            .steps-container::before { display: none; }
            .step-card { width: 100%; max-width: 320px; }
            .how-to-start .section-title { font-size: 28px; }
            .transform-card { min-width: 240px; }
        }
        /* ===== FAQ Section ===== */
        .faq {
            padding: 100px 8%;
            background: #111;
            direction: rtl;
            display: flex;
            gap: 60px;
            align-items: flex-start;
            flex-wrap: wrap;
        }

        .faq-header {
            flex: 1;
            min-width: 220px;
        }

        .faq-header .faq-subtitle {
            color: rgba(255,255,255,0.45);
            font-size: 15px;
            margin-bottom: 15px;
        }

        .faq-header h2 {
            font-size: 40px;
            font-weight: 900;
            color: white;
            line-height: 1.3;
        }

        .faq-list {
            flex: 2;
            min-width: 300px;
        }

        .faq-item {
            border-bottom: 1px solid #2a2a2a;
            padding: 22px 0;
        }

        .faq-question {
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            font-size: 17px;
            font-weight: 600;
            color: white;
            gap: 15px;
        }

        .faq-question:hover {
            color: #e10600;
        }

        .faq-icon {
            font-size: 22px;
            color: #e10600;
            font-weight: 300;
            flex-shrink: 0;
            transition: 0.3s;
        }

        .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s ease, padding 0.3s ease;
            color: rgba(255,255,255,0.55);
            font-size: 14px;
            line-height: 1.8;
            text-align: right;
        }

        .faq-item.open .faq-answer {
            max-height: 200px;
            padding-top: 15px;
        }

        .faq-item.open .faq-icon {
            transform: rotate(45deg);
            content: '×';
        }

        /* ===== New Footer ===== */
        .footer-main {
            background: #000;
            border-top: 2px solid #e10600;
            padding: 50px 8%;
            direction: rtl;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 40px;
        }

        .footer-brand h2 {
            color: #e10600;
            font-size: 24px;
            margin-bottom: 12px;
        }

        .footer-brand p {
            color: rgba(255,255,255,0.4);
            font-size: 13px;
            max-width: 200px;
            line-height: 1.7;
        }

        .footer-social {
            display: flex;
            gap: 12px;
            margin-top: 18px;
        }

        .footer-social a {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid #333;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-decoration: none;
            font-size: 16px;
            transition: 0.3s;
        }

        .footer-social a:hover {
            border-color: #e10600;
            background: #e10600;
        }

        .footer-col h4 {
            color: white;
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 18px;
        }

        .footer-col ul {
            list-style: none;
        }

        .footer-col ul li {
            margin-bottom: 10px;
        }

        .footer-col ul li a {
            color: rgba(255,255,255,0.45);
            text-decoration: none;
            font-size: 14px;
            transition: 0.3s;
        }

        .footer-col ul li a:hover {
            color: #e10600;
        }

        .footer-col .contact-item {
            display: flex;
            align-items: center;
            gap: 8px;
            color: rgba(255,255,255,0.45);
            font-size: 14px;
            margin-bottom: 10px;
        }

        .footer-col .contact-item span {
            color: #e10600;
        }

        .footer-bottom {
            background: #000;
            text-align: center;
            padding: 15px;
            color: rgba(255,255,255,0.3);
            font-size: 13px;
            border-top: 1px solid #1a1a1a;
        }

        @media(max-width:768px){
            .faq { flex-direction: column; gap: 30px; }
            .faq-header h2 { font-size: 28px; }
            .footer-main { flex-direction: column; }
        }
    </style>
</head>
<body>

<!-- ===== Navbar ===== -->
<nav>
    <h2 class="logo">The Coach</h2>
    <ul class="nav-links">
        <li><a href="#">الرئيسية</a></li>
        <li><a href="#how-to-start">إزاي تبدأ</a></li>
        <li><a href="#transformations">التحولات</a></li>
        <li><a href="#plans">الاشتراكات</a></li>
        <li><a href="#">تواصل معنا</a></li>
    </ul>
</nav>

<!-- ===== Hero ===== -->
<section class="hero">
    <h1>غيّر جسمك وحياتك</h1>
    <p>
        انضم لبرامجنا المتخصصة وابدأ رحلتك النهارده.
        اختار الاشتراك اللي يناسب أهدافك.
    </p>
    <a href="#plans" class="btn">شوف الباقات</a>
</section>

<!-- ===== Programs Include ===== -->
<section class="includes">
    <h2 class="section-title">البرنامج بيشمل إيه؟</h2>
    <div class="includes-container">

        <div class="include-card">
            <img src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=600" alt="">
            <h3>متابعة يومية على الواتساب</h3>
            <p>متابعة يومية لتتبع تقدمك والإجابة على كل أسئلتك.</p>
        </div>

        <div class="include-card">
            <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600" alt="">
            <h3>خطة غذائية مخصصة</h3>
            <p>نظام غذائي مرن بناءً على أسلوب حياتك وتفضيلاتك.</p>
        </div>

        <div class="include-card">
            <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600" alt="">
            <h3>خطة تدريبية مخصصة</h3>
            <p>برنامج تدريبي شخصي بناءً على مستواك وأهدافك.</p>
        </div>

    </div>
</section>

<!-- ===== HOW TO START ===== -->
<section class="how-to-start" id="how-to-start">
    <p class="section-subtitle">رحلتنا</p>
    <h2 class="section-title">إزاي تبدأ الرحلة <span>مع الكابتن؟</span></h2>

    <div class="steps-container">

        <!-- Step 1 -->
        <div class="step-card">
            <span class="step-number">1</span>
            <div class="step-icon-wrapper">👤</div>
            <h3>اشترك</h3>
            <p>اشترك من خلال الموقع أو عن طريق رقم الواتساب</p>
            <div class="step-detail">+201065819300</div>
        </div>

        <!-- Step 2 -->
        <div class="step-card">
            <span class="step-number">2</span>
            <div class="step-icon-wrapper">📋</div>
            <h3>الاختبارات والقياسات</h3>
            <p>هنتواصل معاك عشان نطلب منك مجموعة الاختبارات اللي بنحدد على أساسها البرامج والمتابعة</p>
        </div>

        <!-- Step 3 -->
        <div class="step-card">
            <span class="step-number">3</span>
            <div class="step-icon-wrapper">🎯</div>
            <h3>تسليم الأنظمة</h3>
            <p>استلم أنظمتك التدريبية والغذائية وابدأ رحلة التحول معانا</p>
        </div>

        <!-- Step 4 -->
        <div class="step-card">
            <span class="step-number">4</span>
            <div class="step-icon-wrapper">💬</div>
            <h3>بنتابعك طول الرحلة</h3>
            <p>بيكون معاك على الواتساب جاهزين نرد على استفساراتك ونشجعك تكمل رحلة التغيير</p>
        </div>

    </div>
</section>

<!-- ===== Milestones ===== -->
<section class="milestones" id="milestones">
    <p class="section-subtitle">المراحل...</p>
    <h2 class="section-main-title">هنمشي مع بعض خطوة بخطوة عشان نوصل للهدف!</h2>

    <div class="milestones-grid">

        <div class="milestone-item">
            <h3>الخطوة الاولى !</h3>
            <p>خد القرار انك تحسن من اسلوب حياتك و صحتك</p>
        </div>

        <div class="milestone-divider"></div>

        <div class="milestone-item">
            <h3>الخطوة الثانية !</h3>
            <p>يكون عندك إرادة للتغيير</p>
        </div>

        <div class="milestone-divider"></div>

        <div class="milestone-item">
            <h3>الخطوة الثالثة !</h3>
            <p>التزم بالخطة المخصصة ليك</p>
        </div>

        <div class="milestone-divider"></div>

        <div class="milestone-item">
            <h3>الخطوة الرابعة !</h3>
            <p>ما تترددش انك ترجعلي في أي استفسار أو أي مشكلة عشان اساعدك</p>
        </div>

    </div>

    <a href="#plans" class="cta-btn">إشترك الآن</a>
</section>

<!-- ===== Transformations ===== -->
<section class="transformations" id="transformations">
    <h2 class="section-title">التحولات</h2>

    <div class="slider-wrapper">
        <div class="slider-track" id="sliderTrack">

            <div class="transform-card">
                <div class="transform-images">
                    <div class="img-box placeholder">Before</div>
                    <div class="img-box placeholder">After</div>
                </div>
                <div class="transform-labels">
                    <div class="label-before">BEFORE</div>
                    <div class="label-after">AFTER</div>
                </div>
                <div class="transform-name">Client 1</div>
            </div>

            <div class="transform-card">
                <div class="transform-images">
                    <div class="img-box placeholder">Before</div>
                    <div class="img-box placeholder">After</div>
                </div>
                <div class="transform-labels">
                    <div class="label-before">BEFORE</div>
                    <div class="label-after">AFTER</div>
                </div>
                <div class="transform-name">Client 2</div>
            </div>

            <div class="transform-card">
                <div class="transform-images">
                    <div class="img-box placeholder">Before</div>
                    <div class="img-box placeholder">After</div>
                </div>
                <div class="transform-labels">
                    <div class="label-before">BEFORE</div>
                    <div class="label-after">AFTER</div>
                </div>
                <div class="transform-name">Client 3</div>
            </div>

            <div class="transform-card">
                <div class="transform-images">
                    <div class="img-box placeholder">Before</div>
                    <div class="img-box placeholder">After</div>
                </div>
                <div class="transform-labels">
                    <div class="label-before">BEFORE</div>
                    <div class="label-after">AFTER</div>
                </div>
                <div class="transform-name">Client 4</div>
            </div>

            <div class="transform-card">
                <div class="transform-images">
                    <div class="img-box placeholder">Before</div>
                    <div class="img-box placeholder">After</div>
                </div>
                <div class="transform-labels">
                    <div class="label-before">BEFORE</div>
                    <div class="label-after">AFTER</div>
                </div>
                <div class="transform-name">Client 5</div>
            </div>

        </div>
    </div>

    <div class="slider-controls">
        <button class="slider-btn" id="prevBtn">&#8592;</button>
        <button class="slider-btn" id="nextBtn">&#8594;</button>
    </div>
</section>

<script>
    const track = document.getElementById('sliderTrack');
    const cards = track.querySelectorAll('.transform-card');
    let current = 0;

    function getCardWidth() {
        return cards[0].offsetWidth + 25;
    }

    function getVisible() {
        return Math.max(1, Math.floor(track.parentElement.offsetWidth / getCardWidth()));
    }

    function updateSlider() {
        const maxIndex = Math.max(0, cards.length - getVisible());
        if (current > maxIndex) current = maxIndex;
        if (current < 0) current = 0;
        track.style.transform = `translateX(${current * getCardWidth()}px)`;
    }

    document.getElementById('nextBtn').addEventListener('click', () => {
        const maxIndex = Math.max(0, cards.length - getVisible());
        if (current < maxIndex) current++;
        updateSlider();
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        if (current > 0) current--;
        updateSlider();
    });

    window.addEventListener('resize', updateSlider);
</script>

<!-- ===== Plans ===== -->
<section class="plans" id="plans">
    <h2>باقات الاشتراك</h2>
    <div class="cards">

        <div class="card">
            <h3>شهر واحد</h3>
            <div class="price">500 / شهر</div>
            <ul>
                <li>خطة تحول كاملة</li>
                <li>دليل غذائي</li>
                <li>دعم عبر الواتساب</li>
            </ul>
            <button>اختار الباقة</button>
        </div>

        <div class="card featured">
            <h3>شهرين</h3>
            <div class="price">750 / شهر</div>
            <ul>
                <li>خطة تحول كاملة</li>
                <li>تدريب خاص</li>
                <li>متابعة التقدم</li>
            </ul>
            <button>اختار الباقة</button>
        </div>

        <div class="card">
            <h3>3 شهور</h3>
            <div class="price">1000 / شهر</div>
            <ul>
                <li>خطة تحول كاملة</li>
                <li>تدريب فردي</li>
                <li>دعم أولوية</li>
                <li>يوم تدريب / شهر</li>
            </ul>
            <button>اختار الباقة</button>
        </div>

    </div>
</section>

<!-- ===== FAQ ===== -->
<section class="faq" id="faq">

    <div class="faq-header">
        <p class="faq-subtitle">الأسئلة الشائعة</p>
        <h2>محتاج اي مساعدة ؟</h2>
    </div>

    <div class="faq-list">

        <div class="faq-item open">
            <div class="faq-question" onclick="toggleFaq(this)">
                <span>هل التدريب الاون لاين هيكون مناسب ليا ؟</span>
                <span class="faq-icon">+</span>
            </div>
            <div class="faq-answer">
                اكيد التدريب الاون لاين هيكون مناسب و هيختصر عليك كتير وقت و هتكون تجربة مميزة و قيمة كبيرة اكبر من المبلغ المدفوع
            </div>
        </div>

        <div class="faq-item">
            <div class="faq-question" onclick="toggleFaq(this)">
                <span>عندي مشكلة في دفع الاشتراك ؟</span>
                <span class="faq-icon">+</span>
            </div>
            <div class="faq-answer">
                تواصل معنا مباشرة على الواتساب وهنساعدك تحل أي مشكلة في الدفع في أسرع وقت ممكن.
            </div>
        </div>

        <div class="faq-item">
            <div class="faq-question" onclick="toggleFaq(this)">
                <span>هل التدريب متاح في الجيم أو المنزل ؟</span>
                <span class="faq-icon">+</span>
            </div>
            <div class="faq-answer">
                أيوه! البرنامج بيتعمل على حسب إمكانياتك سواء كنت بتتدرب في الجيم أو في البيت.
            </div>
        </div>

        <div class="faq-item">
            <div class="faq-question" onclick="toggleFaq(this)">
                <span>كام مدة البرنامج وامتى هشوف نتائج ؟</span>
                <span class="faq-icon">+</span>
            </div>
            <div class="faq-answer">
                النتائج بتختلف من شخص لشخص حسب الالتزام، بس الغالبية بتشوف فرق واضح من الأسبوع التالت.
            </div>
        </div>

    </div>
</section>

<script>
    function toggleFaq(el) {
        const item = el.parentElement;
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
    }
</script>

<!-- ===== Footer ===== -->
<footer class="footer-main">

    <div class="footer-brand">
        <h2>The Coach</h2>
        <p>رحلتك للتحول بتبدأ هنا. انضم لآلاف العملاء اللي غيروا حياتهم.</p>
        <div class="footer-social">
            <a href="#" title="واتساب">📱</a>
            <a href="#" title="انستغرام">📸</a>
            <a href="#" title="فيسبوك">👤</a>
            <a href="#" title="تيك توك">🎵</a>
        </div>
    </div>

    <div class="footer-col">
        <h4>الشركة</h4>
        <ul>
            <li><a href="#">سياسة الخصوصية</a></li>
            <li><a href="#">الشروط والأحكام</a></li>
            <li><a href="#">من نحن</a></li>
        </ul>
    </div>

    <div class="footer-col">
        <h4>كن على اتصال</h4>
        <div class="contact-item"><span>📍</span> مصر</div>
        <div class="contact-item"><span>📞</span> +201065819300</div>
        <div class="contact-item"><span>💬</span> واتساب متاح دايماً</div>
    </div>

</footer>

<div class="footer-bottom">
    © 2026 The Coach. جميع الحقوق محفوظة.
</div>

</body>
</html>
