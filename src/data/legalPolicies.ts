import { MERCHANT_INFO } from './courseData';

export const LEGAL_POLICIES = {
  termsAndConditions: {
    title: "Terms and Conditions",
    lastUpdated: "January 15, 2025",
    sections: [
      {
        heading: "1. Acceptance of Terms",
        content: `Welcome to the official website for "Advanced Trading Indicators and Trading Tips" (the "Service", "Course", or "Platform"), owned and operated by ${MERCHANT_INFO.merchantName}, having its registered operating address at ${MERCHANT_INFO.registeredAddress}. By purchasing, accessing, or using this digital course and related materials, you ("User", "Customer", or "Student") agree to be legally bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not purchase or access the materials.`
      },
      {
        heading: "2. Nature of the Product & Digital Delivery",
        content: `The product offered on this website is a digital educational video course comprising a private, unlisted YouTube video playlist. Upon successful completion of payment through our integrated payment gateways, the User will instantly receive access via email and an on-screen confirmation containing the secure playlist link. The license granted to you is a personal, non-exclusive, non-transferable, revocable single-user license solely for personal educational use.`
      },
      {
        heading: "3. Intellectual Property Rights & Anti-Piracy",
        content: `All videos, indicators, text, slides, frameworks, trade journaling sheets, and instructional content are the exclusive intellectual property of ${MERCHANT_INFO.merchantName}. You are strictly prohibited from copying, screen-recording, downloading, redistributing, reselling, sharing access credentials, uploading to torrents/Telegram groups, or publicly broadcasting any portion of the course material. Any unauthorized distribution constitutes a direct violation of the Indian Copyright Act, 1957, and will lead to immediate revocation of access and appropriate legal proceedings.`
      },
      {
        heading: "4. SEBI Regulatory Disclaimer & Financial Risk Notice",
        content: `DISCLAIMER UNDER SEBI (INVESTMENT ADVISERS) REGULATIONS: ${MERCHANT_INFO.merchantName} and this platform are NOT registered with the Securities and Exchange Board of India (SEBI) as an Investment Adviser or Research Analyst. The content provided in "Advanced Trading Indicators and Trading Tips" is strictly for educational, informational, and training purposes only. Nothing contained in this video playlist, website, or accompanying material should be construed as financial advice, stock recommendations, buy/sell tips, or guarantees of future market performance. Trading and investing in equities, futures, options, and commodities involve substantial financial risk of loss. You are solely responsible for your trading decisions and capital. Please consult a SEBI-registered financial advisor prior to taking any financial positions.`
      },
      {
        heading: "5. Pricing, Payment Gateway & Taxes",
        content: `The prices displayed on the website are in Indian Rupees (INR) and are inclusive of applicable taxes. Payments are processed securely via RBI-authorized third-party payment gateways (including UPI, NetBanking, Debit/Credit Cards). We do not store your sensitive banking or credit card credentials on our servers.`
      },
      {
        heading: "6. Limitation of Liability & Governing Law",
        content: `Under no circumstances shall ${MERCHANT_INFO.merchantName} be liable for any direct, indirect, incidental, consequential, or trading losses resulting from the use or inability to use the educational materials. These Terms shall be governed by and construed in accordance with the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the competent courts in Hyderabad, Telangana, India.`
      }
    ]
  },

  privacyPolicy: {
    title: "Privacy Policy",
    lastUpdated: "January 15, 2025",
    sections: [
      {
        heading: "1. Information We Collect",
        content: `To facilitate the purchase and digital fulfillment of the course, we collect minimal and necessary personal information, including:
• Full Name
• Email Address (essential for dispatching your private YouTube playlist access link)
• Mobile Phone Number (for transaction SMS, order verification, and customer support)
• Billing / State details (for tax compliance and transaction verification)
• Technical Data: IP address, browser type, and device information for security and fraud prevention.`
      },
      {
        heading: "2. How We Use Your Information",
        content: `We use your collected information strictly for:
• Fulfilling digital course delivery (emailing your private playlist access link and payment receipt).
• Responding to customer support inquiries and access re-dispatch requests.
• Verifying transactions and preventing fraud or unauthorized payment attempts.
• Complying with statutory requirements under Indian law and payment aggregator compliance mandates.
We NEVER sell, rent, trade, or share your personal contact details with unauthorized third-party advertisers.`
      },
      {
        heading: "3. Payment Gateway Data & Security",
        content: `All payments are routed through PCI-DSS compliant, RBI-authorized Indian payment gateways. Your sensitive banking passwords, UPI PINs, CVVs, and credit card numbers are handled directly by the payment processor's 256-bit encrypted checkout servers. ${MERCHANT_INFO.merchantName} never has access to, nor stores, your payment credentials.`
      },
      {
        heading: "4. Cookies and Session Storage",
        content: `We may use essential session cookies to remember your cart state, verify checkout completion, and ensure secure browsing. You can configure your browser to disable cookies, though certain checkout elements may require them for proper verification.`
      },
      {
        heading: "5. Data Retention & Grievance Redressal",
        content: `We retain purchase records and order logs for legitimate accounting and support purposes. If you have questions regarding your data or wish to exercise data privacy rights, you may contact our dedicated Grievance Officer:
Name: ${MERCHANT_INFO.merchantName}
Address: ${MERCHANT_INFO.registeredAddress}
Email: ${MERCHANT_INFO.supportEmail}
Response Time: Within 24-48 business hours.`
      }
    ]
  },

  refundPolicy: {
    title: "Refund and Cancellation Policy",
    lastUpdated: "January 15, 2025",
    sections: [
      {
        heading: "1. Strict No-Refund Policy for Digital Information Products",
        content: `Because this is a digital information product, all sales are final. Strictly NO REFUNDS are provided on digital course purchases once the playlist link has been delivered.`
      },
      {
        heading: "2. Justification for No-Refund Policy",
        content: `Upon successful transaction completion, the customer receives immediate, irrevocable digital access to the proprietary intellectual property, video lessons, indicator frameworks, and unlisted YouTube playlist. Unlike physical merchandise that can be returned in an unused condition, digital educational content cannot be returned once access has been provisioned. We provide a transparent syllabus outline, video descriptions, and clear breakdown of course contents prior to purchase.`
      },
      {
        heading: "3. Exceptional Circumstances & Resolution Process",
        content: `Refunds or resolutions are ONLY processed under the following verified technical anomalies:
1. Double Payment / Duplicate Deduction: If your bank account or UPI was charged multiple times for a single purchase order due to network timeout, the duplicate charge will be verified with the payment gateway and refunded to your original payment source within 5 to 7 business days.
2. Technical Delivery Failure: If you completed payment successfully, the amount was debited, and you did not receive access within 24 hours despite contacting support, we will immediately re-dispatch access or process a full refund if fulfillment is technically impossible.`
      },
      {
        heading: "4. Cancellation Policy",
        content: `Orders for instant digital products cannot be cancelled once the payment is completed and the access email is triggered by the automated server system. You may choose not to complete checkout if you do not agree with the terms.`
      },
      {
        heading: "5. How to Request Support for Payment Issues",
        content: `For any payment or delivery discrepancies, please email ${MERCHANT_INFO.supportEmail} with:
• Your Full Name & Registered Email
• Payment Transaction ID / Gateway Reference Number
• Date & Time of Payment
• Screenshot of payment confirmation
Our team responds within 12 to 24 business hours.`
      }
    ]
  },

  shippingPolicy: {
    title: "Shipping & Digital Delivery Policy",
    lastUpdated: "January 15, 2025",
    sections: [
      {
        heading: "1. Nature of Delivery",
        content: `Delivery: Upon successful payment, you will instantly receive a secure, private link to the complete YouTube playlist via email.`
      },
      {
        heading: "2. Delivery Timeline & Methods",
        content: `• Method: Digital Delivery via automated Email dispatch and on-screen instant receipt.
• Timeline: Instantaneous (0 to 10 minutes from transaction confirmation).
• Physical Shipping: There is NO physical product, DVD, book, or postal shipping involved in this purchase. No shipping or handling fees are charged.`
      },
      {
        heading: "3. Troubleshooting Email Delivery",
        content: `If you have not received your playlist link within 10 minutes of payment:
1. Check your Email's 'Spam', 'Junk', 'Promotions', or 'Updates' folders.
2. Verify that the email address entered during checkout was accurate.
3. If still missing, send an email to ${MERCHANT_INFO.supportEmail} with your payment receipt, and we will manually verify and re-send your access link within 12 hours.`
      }
    ]
  },

  contactInfo: {
    title: "Contact & Business Information",
    subtitle: "Official Registered Merchant Details for KYC & Customer Inquiries",
    merchantName: MERCHANT_INFO.merchantName,
    registeredAddress: MERCHANT_INFO.registeredAddress,
    supportEmail: MERCHANT_INFO.supportEmail,
    workingHours: MERCHANT_INFO.supportHours,
    resolutionTime: MERCHANT_INFO.responseTurnaround,
    productName: "Advanced Trading Indicators and Trading Tips",
    officialEntity: MERCHANT_INFO.entityType,
    jurisdiction: MERCHANT_INFO.complianceJurisdiction
  }
};
