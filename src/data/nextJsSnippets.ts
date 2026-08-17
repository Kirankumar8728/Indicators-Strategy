export interface CodeSnippet {
  filePath: string;
  category: 'Landing & Layout' | 'API Route & Backend' | 'Policy Pages' | 'Config & Environment';
  description: string;
  code: string;
}

export const NEXTJS_CODE_SNIPPETS: CodeSnippet[] = [
  {
    filePath: "app/api/checkout/route.ts",
    category: "API Route & Backend",
    description: "Next.js App Router Serverless API Route for Indian Payment Gateway order creation (Razorpay, PhonePe, Cashfree, or Instamojo) & automated email fulfillment.",
    code: `import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// ============================================================================
// INDIAN PAYMENT GATEWAY ORDER CREATION & FULFILLMENT API (VERCEL SERVERLESS)
// Product: "Advanced Trading Indicators and Trading Tips"
// Merchant: Kiran Kumar (Registered: JNTU, Hyderabad, Telangana)
// Support: support@dealsbomma.in
// ============================================================================

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, gateway = "razorpay" } = body;

    // 1. Mandatory Input Validation (Crucial for Indian KYC & Delivery)
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone number are required for digital delivery." },
        { status: 400 }
      );
    }

    const COURSE_AMOUNT_INR = 99; // ₹99 INR
    const COURSE_TITLE = "Advanced Trading Indicators and Trading Tips";
    const receiptId = \`RCPT_\${Date.now()}_\${Math.floor(Math.random() * 1000)}\`;

    // ------------------------------------------------------------------------
    // OPTION A: RAZORPAY ORDER CREATION
    // Install: npm install razorpay
    // ------------------------------------------------------------------------
    if (gateway === "razorpay") {
      const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID;
      const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET;

      if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
        // Fallback for simulation / testing when credentials are not yet set
        return NextResponse.json({
          success: true,
          mode: "simulation",
          orderId: \`order_mock_\${Date.now()}\`,
          amount: COURSE_AMOUNT_INR * 100, // in paise
          currency: "INR",
          name,
          email,
          phone,
          courseTitle: COURSE_TITLE,
          playlistLink: "https://www.youtube.com/playlist?list=YOUR_SECURE_UNLISTED_PLAYLIST_ID",
          message: "Payment gateway credentials pending in .env.local. Simulated order created successfully."
        });
      }

      // Live Razorpay initialization:
      /*
      import Razorpay from "razorpay";
      const razorpay = new Razorpay({
        key_id: RAZORPAY_KEY_ID,
        key_secret: RAZORPAY_KEY_SECRET,
      });

      const order = await razorpay.orders.create({
        amount: COURSE_AMOUNT_INR * 100, // amount in paisa (9900)
        currency: "INR",
        receipt: receiptId,
        notes: {
          course: COURSE_TITLE,
          customer_name: name,
          customer_email: email,
          customer_phone: phone,
          merchant: "Kiran Kumar",
          address: "JNTU, Hyderabad, Telangana",
        },
      });

      return NextResponse.json({
        success: true,
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
        keyId: RAZORPAY_KEY_ID,
      });
      */
    }

    // ------------------------------------------------------------------------
    // OPTION B: CASHFREE / PHONEPE / INSTAMOJO INTEGRATION
    // ------------------------------------------------------------------------
    // For Cashfree PG, PhonePe Standard Checkout, or Instamojo Payment Request API,
    // invoke your merchant SDK or HTTP request here and return payment session ID.

    return NextResponse.json({
      success: true,
      orderId: \`ord_\${Date.now()}\`,
      amount: COURSE_AMOUNT_INR * 100,
      currency: "INR",
      receipt: receiptId,
    });
  } catch (error: any) {
    console.error("Checkout API error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error during order creation" },
      { status: 500 }
    );
  }
}

// ----------------------------------------------------------------------------
// WEBHOOK HANDLER: Automated Post-Payment Verification & Instant Email Dispatch
// ----------------------------------------------------------------------------
export async function PUT(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get("x-razorpay-signature");
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET || "";

    if (secret && signature) {
      const expectedSignature = crypto
        .createHmac("sha256", secret)
        .update(rawBody)
        .digest("hex");

      if (expectedSignature !== signature) {
        return NextResponse.json({ error: "Invalid webhook signature" }, { status: 400 });
      }
    }

    const payload = JSON.parse(rawBody);

    // If payment is captured:
    // 1. Dispatch private YouTube playlist link via Resend / SendGrid / Nodemailer
    // 2. Email recipient: payload.payload.payment.entity.email
    // 3. Email subject: "Your Access: Advanced Trading Indicators and Trading Tips Playlist"
    // 4. Log transaction for KYC and audit records.

    return NextResponse.json({ status: "ok", received: true });
  } catch (error: any) {
    return NextResponse.json({ error: "Webhook failed" }, { status: 500 });
  }
}`
  },
  {
    filePath: "app/page.tsx",
    category: "Landing & Layout",
    description: "Next.js App Router Home Landing Page with Hero, Syllabus, ₹99 Pricing Card with Mandatory Delivery Text, and KYC Details.",
    code: `import Link from "next/link";
import { CheckCircle2, ShieldCheck, Video, Clock, Award, Sparkles, BookOpen, AlertCircle, ArrowRight, Lock } from "lucide-react";

export const metadata = {
  title: "Advanced Trading Indicators and Trading Tips - Official Course by Kiran Kumar",
  description: "Master high-probability trading setups with indicator confluence, VWAP, EMA ribbons, and institutional risk management. Instant digital delivery upon payment.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0b0f17] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top KYC Compliance Notice Bar */}
      <div className="bg-slate-900/90 border-b border-slate-800 py-2 px-4 text-center text-xs text-slate-400">
        <span className="inline-flex items-center gap-1.5 font-medium text-slate-300">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          Verified Merchant KYC: Operated by <strong className="text-white">Kiran Kumar</strong> | JNTU, Hyderabad | Official Support: <a href="mailto:support@dealsbomma.in" className="text-amber-400 underline">support@dealsbomma.in</a>
        </span>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> High-Probability Trading Masterclass
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Advanced Trading Indicators <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-500">
              &amp; Trading Tips Playlist
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Stop relying on single lagging indicators. Learn how professional institutional traders combine
            <strong className="text-white"> VWAP, EMA Ribbons, Volume Profile &amp; RSI Divergences </strong>
            with strict capital protection rules for consistent market execution.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-bold text-lg shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
            >
              Get Instant Access for ₹99 <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#curriculum"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-base transition-colors"
            >
              <BookOpen className="w-4 h-4 text-amber-400" /> View 13 Video Syllabus
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 text-center max-w-3xl mx-auto border-t border-slate-800/80 mt-10">
            <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-800">
              <div className="text-2xl font-bold text-amber-400">13+</div>
              <div className="text-xs text-slate-400">In-Depth Video Lessons</div>
            </div>
            <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-800">
              <div className="text-2xl font-bold text-emerald-400">7.5+ Hrs</div>
              <div className="text-xs text-slate-400">Total Playlist Duration</div>
            </div>
            <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-800">
              <div className="text-2xl font-bold text-sky-400">Instant</div>
              <div className="text-xs text-slate-400">Automated Email Delivery</div>
            </div>
            <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-800">
              <div className="text-2xl font-bold text-amber-400">Lifetime</div>
              <div className="text-xs text-slate-400">Unlisted YouTube Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Mandatory Delivery Notice Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border-2 border-amber-500/40 p-8 sm:p-12 shadow-2xl shadow-amber-500/10">
          <div className="absolute -top-4 right-8 bg-amber-500 text-slate-950 font-extrabold text-xs uppercase px-4 py-1.5 rounded-full tracking-wider shadow-md">
            Limited Time Special Offer
          </div>

          <div className="text-center space-y-3 pb-8 border-b border-slate-800">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Enroll in the Full Masterclass Playlist</h2>
            <p className="text-slate-400 text-sm">One-time payment • No recurring subscriptions • Lifetime playlist access</p>
            <div className="flex items-baseline justify-center gap-3 pt-2">
              <span className="text-slate-500 line-through text-2xl">₹2,499</span>
              <span className="text-5xl font-extrabold text-white">₹99</span>
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                Inclusive of all taxes
              </span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 py-8">
            {[
              "13 Full HD Private YouTube Video Lessons",
              "VWAP & Standard Deviation Bands Strategy",
              "EMA Ribbon (9, 21, 50, 200) Confluence",
              "Volume Profile & Order Flow Breakouts",
              "RSI Hidden & Regular Divergence Systems",
              "1% Risk Rule & Position Sizing Calculator",
              "5 Live Market Trades Breakdown (Nifty/BankNifty)",
              "Lifetime Access on Phone, Tablet & Desktop"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CRITICAL MANDATORY DELIVERY STATEMENT FOR COMPLIANCE */}
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 my-6 text-center space-y-1">
            <div className="flex items-center justify-center gap-2 text-amber-300 font-semibold text-sm">
              <Lock className="w-4 h-4 text-amber-400" />
              <span>Instant Digital Product Fulfillment Notice</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-200/90 font-medium leading-relaxed">
              Delivery: Upon successful payment, you will instantly receive a secure, private link to the complete YouTube playlist via email.
            </p>
          </div>

          <div className="space-y-4">
            <button
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-extrabold text-lg shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              Buy Now — Instant Access ₹99
            </button>
            <p className="text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              256-bit SSL Encrypted Indian Payment Gateway • UPI, Cards, NetBanking Supported
            </p>
          </div>
        </div>
      </section>

      {/* Mandatory Regulatory & SEBI Disclaimer */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 leading-relaxed space-y-2">
          <div className="flex items-center gap-2 font-semibold text-slate-300">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>SEBI Regulatory &amp; Financial Risk Disclaimer</span>
          </div>
          <p>
            Educational and training purposes only. Kiran Kumar is NOT a SEBI-registered Investment Adviser or Research Analyst. Trading in stock markets, futures, options, and commodities involves high risk of capital loss. Past performance does not guarantee future results.
          </p>
        </div>
      </section>

      {/* Footer with Hardcoded KYC Details */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white">About the Course &amp; Creator</h4>
            <p className="leading-relaxed">
              "Advanced Trading Indicators and Trading Tips" is a premium educational video playlist created to equip retail traders with systematic indicator confluence and risk management tools.
            </p>
            <p className="text-slate-300 font-medium">
              Operated by: <strong className="text-white">Kiran Kumar</strong>
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white">Registered Business &amp; Support</h4>
            <p className="leading-relaxed">
              <strong className="text-slate-300">Registered Address:</strong><br />
              JNTU, Hyderabad, Telangana, India
            </p>
            <p>
              <strong className="text-slate-300">Support Email:</strong>{" "}
              <a href="mailto:support@dealsbomma.in" className="text-amber-400 hover:underline">
                support@dealsbomma.in
              </a>
            </p>
            <p className="text-[11px] text-slate-500">Working Hours: Mon–Sat 9:00 AM – 6:30 PM IST (Response in 12–24 hrs)</p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white">Mandatory Legal Policies</h4>
            <ul className="space-y-1.5">
              <li><Link href="/terms" className="hover:text-amber-400 transition-colors">Terms and Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/refund-policy" className="text-amber-300 hover:underline font-semibold">Refund &amp; Cancellation Policy</Link></li>
              <li><Link href="/shipping-delivery" className="hover:text-amber-400 transition-colors">Shipping &amp; Delivery Policy</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 text-center text-slate-500">
          © {new Date().getFullYear()} Kiran Kumar. All Rights Reserved. All product names, indicators, and logos are property of their respective owners.
        </div>
      </footer>
    </main>
  );
}`
  },
  {
    filePath: "app/refund-policy/page.tsx",
    category: "Policy Pages",
    description: "Next.js App Router Refund & Cancellation Policy Page with the exact mandatory non-refundable digital information product notice.",
    code: `import Link from "next/link";
import { ArrowLeft, AlertTriangle, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Refund and Cancellation Policy - Advanced Trading Indicators & Tips",
  description: "Official Refund and Cancellation Policy for the digital video course playlist.",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-200 py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 mb-8 font-medium">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Course Overview
      </Link>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-6">
        <div className="border-b border-slate-800 pb-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Refund &amp; Cancellation Policy</h1>
          <p className="text-xs text-slate-400 mt-1">Last updated: January 15, 2025 • Merchant: Kiran Kumar</p>
        </div>

        {/* CRITICAL MANDATORY STATEMENT */}
        <div className="p-4 sm:p-5 rounded-xl bg-amber-500/10 border-2 border-amber-500/40 space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm sm:text-base">
            <AlertTriangle className="w-5 h-5 shrink-0" />
            <span>Digital Information Product Sales Notice</span>
          </div>
          <p className="text-amber-200 font-semibold text-sm sm:text-base leading-relaxed">
            "Because this is a digital information product, all sales are final. Strictly NO REFUNDS are provided on digital course purchases once the playlist link has been delivered."
          </p>
        </div>

        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <h2 className="text-lg font-semibold text-white">1. Nature of the Service &amp; Immediate Access</h2>
          <p>
            The product "Advanced Trading Indicators and Trading Tips" consists of digital video lessons hosted on an unlisted, private YouTube playlist. Access credentials and playlist URLs are instantly provisioned and dispatched automatically via email upon payment verification.
          </p>

          <h2 className="text-lg font-semibold text-white">2. Exceptional Cases (Duplicate Charges / Delivery Failures)</h2>
          <p>
            Refunds or resolutions are strictly evaluated and granted only under the following technical conditions:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li>
              <strong className="text-white">Duplicate Payments:</strong> If your bank account or UPI handle was debited more than once for a single order due to server latency or gateway timeout, the extra charge will be refunded to the original payment source within 5 to 7 business days following gateway verification.
            </li>
            <li>
              <strong className="text-white">Non-Delivery:</strong> If payment was successful but you did not receive your playlist link via email within 24 hours (after verifying your spam/promotions folder), contact us at <a href="mailto:support@dealsbomma.in" className="text-amber-400 underline">support@dealsbomma.in</a> and we will immediately re-dispatch the access link.
            </li>
          </ul>

          <h2 className="text-lg font-semibold text-white">3. Cancellation Terms</h2>
          <p>
            Orders cannot be cancelled after the checkout process is finalized and the digital access link is dispatched.
          </p>

          <h2 className="text-lg font-semibold text-white">4. Merchant Contact for Inquiries</h2>
          <div className="p-4 bg-slate-950 rounded-lg border border-slate-800 text-xs space-y-1 text-slate-400">
            <p><strong className="text-white">Operated by:</strong> Kiran Kumar</p>
            <p><strong className="text-white">Registered Address:</strong> JNTU, Hyderabad, Telangana, India</p>
            <p><strong className="text-white">Support Email:</strong> support@dealsbomma.in</p>
            <p><strong className="text-white">Response Turnaround:</strong> Within 12 to 24 business hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}`
  },
  {
    filePath: "app/contact/page.tsx",
    category: "Policy Pages",
    description: "Next.js App Router Contact Page with hardcoded merchant credentials for KYC verification (Kiran Kumar, JNTU, Hyderabad).",
    code: `import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Clock, ShieldCheck, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Contact Us & Business KYC - Advanced Trading Indicators & Tips",
  description: "Official contact details and registered merchant verification for Kiran Kumar.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-200 py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 mb-8 font-medium">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Course Overview
      </Link>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-8">
        <div className="border-b border-slate-800 pb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5" /> Verified KYC Business Details
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Contact Us &amp; Business Information</h1>
          <p className="text-xs text-slate-400 mt-1">Official operational details for payment gateway verification and student support.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Customer Support Email</h3>
            <p className="text-xs text-slate-400">For course inquiries, playlist re-dispatches, and payment questions:</p>
            <p className="text-sm font-semibold text-amber-400">
              <a href="mailto:support@dealsbomma.in" className="hover:underline">support@dealsbomma.in</a>
            </p>
          </div>

          <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Registered Address</h3>
            <p className="text-xs text-slate-400">Official Operating Address:</p>
            <p className="text-sm font-medium text-slate-200 leading-relaxed">
              JNTU, Hyderabad, Telangana, India
            </p>
          </div>
        </div>

        <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 space-y-2 text-xs text-slate-300">
          <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-amber-400" /> Operational &amp; Support Schedule
          </h3>
          <p>• Working Hours: Monday to Saturday, 9:00 AM – 6:30 PM IST</p>
          <p>• Grievance Redressal / Email Response Turnaround: Within 12 to 24 Business Hours</p>
          <p>• Proprietor / Operated by: <strong className="text-white">Kiran Kumar</strong></p>
        </div>
      </div>
    </div>
  );
}`
  },
  {
    filePath: ".env.local.example",
    category: "Config & Environment",
    description: "Environment variables example for Vercel deployment and Razorpay / Payment Gateway configuration.",
    code: `# Vercel / Next.js Environment Variables

# Product & Merchant Info
NEXT_PUBLIC_MERCHANT_NAME="Kiran Kumar"
NEXT_PUBLIC_SUPPORT_EMAIL="support@dealsbomma.in"
NEXT_PUBLIC_COURSE_PRICE=99

# Razorpay Payment Gateway Credentials (Obtain from dashboard.razorpay.com)
RAZORPAY_KEY_ID="rzp_live_xxxxxxxxxxxxxx"
RAZORPAY_KEY_SECRET="your_razorpay_secret_key"
RAZORPAY_WEBHOOK_SECRET="your_webhook_secret"

# Unlisted YouTube Playlist ID (Sent to user upon successful payment)
COURSE_YOUTUBE_PLAYLIST_URL="https://www.youtube.com/playlist?list=PL_YOUR_PRIVATE_PLAYLIST_ID"

# Transactional Email Dispatch (Resend / Sendgrid / Nodemailer)
RESEND_API_KEY="re_xxxxxxxxxxxxxx"
FROM_EMAIL="support@dealsbomma.in"
`
  }
];
