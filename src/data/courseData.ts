import { MerchantKYCInfo, Module, FAQItem, Testimonial } from '../types';

export const MERCHANT_INFO: MerchantKYCInfo = {
  merchantName: "Kiran Kumar",
  registeredAddress: "JNTU, Hyderabad, Telangana, India",
  supportEmail: "support@dealsbomma.in",
  supportHours: "Monday to Saturday, 9:00 AM – 6:30 PM IST",
  responseTurnaround: "Within 12 to 24 Business Hours",
  complianceJurisdiction: "Hyderabad, Telangana, India",
  deliveryMethod: "Private Secure YouTube Playlist Link dispatched via Email immediately post-payment",
  deliveryTimeline: "Instant Digital Delivery (0 - 10 minutes)",
  productType: "Digital Educational Video Course / Information Product",
  entityType: "Individual / Proprietorship Business",
};

export const COURSE_MODULES: Module[] = [
  {
    id: "mod-1",
    moduleNumber: 1,
    title: "Core Trading Mechanics & Multi-Timeframe Foundation",
    totalDuration: "1 hr 15 mins",
    lessonCount: 3,
    badge: "Foundation Level",
    thumbnailUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80",
    description: "Master institutional market structure, liquidity zones, and establishing high-probability bias across daily, 15m, and 5m charts.",
    lessons: [
      {
        id: "les-101",
        title: "Lesson 1: Institutional Market Structure & Key Liquidity Pools",
        duration: "24:15",
        category: "Foundation",
        highlightBadge: "Smart Money Concepts",
        thumbnailUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=80",
        description: "How smart money moves price: Identifying swing points, fair value gaps, and institutional accumulation zones.",
        indicators: ["Candlestick Price Action", "Market Structure Highs/Lows"],
        keyTakeaway: "Stop entering at retail breakout traps by spotting where institutional stop orders rest."
      },
      {
        id: "les-102",
        title: "Lesson 2: Multi-Timeframe Analysis Matrix (Daily to 3-Min)",
        duration: "28:40",
        category: "Foundation",
        highlightBadge: "Trend Alignment",
        thumbnailUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&auto=format&fit=crop&q=80",
        description: "Aligning the macro trend with micro execution for pinpoint risk-to-reward setups.",
        indicators: ["Multi-Timeframe EMA Trend Ribbon", "Session Open Levels"],
        keyTakeaway: "Trade strictly in the direction of higher timeframe momentum."
      },
      {
        id: "les-103",
        title: "Lesson 3: Chart Setup & TradingView Pro Configuration",
        duration: "22:10",
        category: "Foundation",
        highlightBadge: "Zero Clutter Setup",
        thumbnailUrl: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=600&auto=format&fit=crop&q=80",
        description: "Clean workspace layout, customized shortcuts, alert configuration, and indicator script overlays.",
        indicators: ["TradingView Custom Workspace", "Alert Webhooks"],
        keyTakeaway: "Eliminate chart clutter and maintain a zero-distraction execution dashboard."
      }
    ]
  },
  {
    id: "mod-2",
    moduleNumber: 2,
    title: "Advanced Indicator Confluence Strategies",
    totalDuration: "2 hrs 40 mins",
    lessonCount: 4,
    badge: "Core Edge",
    thumbnailUrl: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&auto=format&fit=crop&q=80",
    description: "Deep dive into combining dynamic volume, momentum divergence, and trend indicators to filter false signals.",
    lessons: [
      {
        id: "les-201",
        title: "Lesson 4: VWAP & Standard Deviation Bands (1σ, 2σ)",
        duration: "38:20",
        category: "Indicators",
        highlightBadge: "Institutional VWAP",
        thumbnailUrl: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&auto=format&fit=crop&q=80",
        description: "Using Anchored VWAP and standard deviation bands (1σ, 2σ) as dynamic support, resistance, and mean-reversion zones.",
        indicators: ["Anchored VWAP", "Session VWAP", "Volume Profile (POC/VAH/VAL)"],
        keyTakeaway: "Institutions execute around VWAP; use it to identify fair value vs overextended price."
      },
      {
        id: "les-202",
        title: "Lesson 5: EMA Ribbon Confluence (9, 21, 50, 200)",
        duration: "34:55",
        category: "Indicators",
        highlightBadge: "Trend Pullbacks",
        thumbnailUrl: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=600&auto=format&fit=crop&q=80",
        description: "The dynamic compression-expansion cycle and pullback entry triggers during trending market phases.",
        indicators: ["9 EMA", "21 EMA", "50 EMA", "200 EMA"],
        keyTakeaway: "Identify trend acceleration before the big move unfolds without getting whipped."
      },
      {
        id: "les-203",
        title: "Lesson 6: RSI Hidden vs Regular Divergences",
        duration: "42:15",
        category: "Indicators",
        highlightBadge: "Reversal Warning",
        thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
        description: "Spotting high-probability momentum exhaustion and continuation patterns that standard indicators miss.",
        indicators: ["RSI (14)", "MACD Histogram Delta", "Volume Divergence"],
        keyTakeaway: "Divergence between price and momentum is the single most reliable early reversal warning."
      },
      {
        id: "les-204",
        title: "Lesson 7: Fibonacci & Golden Pocket (0.618 - 0.786) Confluence",
        duration: "45:00",
        category: "Indicators",
        highlightBadge: "Precision Reload",
        thumbnailUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=80",
        description: "Drawing exact impulse swings to pinpoint high-probability institutional reload levels.",
        indicators: ["Fibonacci Retracement & Extension", "Order Block Re-test"],
        keyTakeaway: "Confluence of Fib 0.618 with VWAP produces an 80%+ win-rate entry pocket."
      }
    ]
  },
  {
    id: "mod-3",
    moduleNumber: 3,
    title: "Volume Profile, Order Flow & Market Profile Mastery",
    totalDuration: "1 hr 55 mins",
    lessonCount: 3,
    badge: "Order Flow Mastery",
    thumbnailUrl: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&auto=format&fit=crop&q=80",
    description: "Read real buying and selling pressure instead of lagging indicators using volume distribution.",
    lessons: [
      {
        id: "les-301",
        title: "Lesson 8: Volume Profile - POC, Value Area High (VAH) & Low (VAL)",
        duration: "36:10",
        category: "Strategy",
        highlightBadge: "POC Trading",
        thumbnailUrl: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=600&auto=format&fit=crop&q=80",
        description: "Trading inside value area vs trend continuation on breakout from value area.",
        indicators: ["Fixed Range Volume Profile", "Daily Value Area"],
        keyTakeaway: "Value Areas tell you where the market has accepted price and where rejection is imminent."
      },
      {
        id: "les-302",
        title: "Lesson 9: Trapped Buyers & Trapped Sellers Setup (Volume Delta)",
        duration: "41:30",
        category: "Strategy",
        highlightBadge: "Squeeze Setup",
        thumbnailUrl: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=600&auto=format&fit=crop&q=80",
        description: "Spotting aggressive retail traders getting trapped at day highs and day lows for swift mean reversions.",
        indicators: ["Cumulative Volume Delta (CVD)", "Absorption Volume Bars"],
        keyTakeaway: "Enter when aggressive breakout traders get squeezed out of their positions."
      },
      {
        id: "les-303",
        title: "Lesson 10: Opening Range Breakout (ORB) with Volume Confirmation",
        duration: "37:25",
        category: "Strategy",
        highlightBadge: "Morning Momentum",
        thumbnailUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&auto=format&fit=crop&q=80",
        description: "Systematic rules for trading the first 15 and 30-minute market open for Indian Indices & Stocks.",
        indicators: ["15-Min ORB Indicator", "Relative Volume (RVOL)"],
        keyTakeaway: "Filter out 70% of false breakouts by requiring minimum 1.5x RVOL on breakout bar."
      }
    ]
  },
  {
    id: "mod-4",
    moduleNumber: 4,
    title: "Risk Management, Capital Protection & Live Execution Rules",
    totalDuration: "1 hr 45 mins",
    lessonCount: 3,
    badge: "Risk & Execution",
    thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    description: "The mathematical edge: Position sizing, risk-to-reward ratios, stop loss placement, and psychological discipline.",
    lessons: [
      {
        id: "les-401",
        title: "Lesson 11: The 1% Rule, Fixed Fractional Sizing & Capital Preservation",
        duration: "32:15",
        category: "Risk Management",
        highlightBadge: "Capital Shield",
        thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
        description: "Formula for calculating exact lot/share size based on stop loss distance and maximum allowable risk.",
        indicators: ["Position Size Calculator Sheet", "ATR (Average True Range) Stop Loss"],
        keyTakeaway: "Never risk more than 1% to 2% of total trading capital on any single setup."
      },
      {
        id: "les-402",
        title: "Lesson 12: Dynamic Trailing Stop Loss & Scale-Out Profit Strategy",
        duration: "35:40",
        category: "Risk Management",
        highlightBadge: "Profit Lock",
        thumbnailUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&auto=format&fit=crop&q=80",
        description: "Locking in profits at 1:2 R:R and trailing the remaining runner with the 21 EMA or structure lows.",
        indicators: ["Supertrend (10, 3)", "ATR Trailing Stop", "21 EMA Trailing"],
        keyTakeaway: "Let winners run to 1:4+ while taking stress-free partial profits at target 1."
      },
      {
        id: "les-403",
        title: "Lesson 13: Live Market Trade Breakdown & Journaling Template",
        duration: "37:10",
        category: "Live Execution",
        highlightBadge: "Real Case Studies",
        thumbnailUrl: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&auto=format&fit=crop&q=80",
        description: "Step-by-step review of 5 live market trades (Nifty, BankNifty & Top F&O Stocks) applying indicator confluence.",
        indicators: ["Trade Journal Matrix", "Pre-market Checklist"],
        keyTakeaway: "Consistent execution beats sporadic brilliance every single trading week."
      }
    ]
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: "Access & Delivery",
    question: "How will I receive the course after making payment?",
    answer: "Delivery is 100% instant and digital. Upon successful payment on our secure checkout, you will immediately receive an automated confirmation email containing a private, unlisted YouTube playlist link with lifetime access. The access link is also displayed on the instant order confirmation screen."
  },
  {
    category: "Access & Delivery",
    question: "What if I did not receive the email in my inbox?",
    answer: "Please check your 'Spam', 'Promotions', or 'Updates' tab in your email client. Emails are dispatched within 2-5 minutes of payment. If you still do not see it, simply email our official support at support@dealsbomma.in with your payment transaction ID or registered phone number, and our team will re-send your private playlist link within 12 business hours."
  },
  {
    category: "Course Content",
    question: "Is this course suitable for beginners or intermediate traders?",
    answer: "Yes! The playlist is structured sequentially from foundational chart setup and institutional market concepts to advanced indicator confluence strategies (VWAP, EMA ribbons, RSI divergence, Volume Profile) and risk management. It is designed for intraday, swing, and positional traders."
  },
  {
    category: "Course Content",
    question: "Are the indicators free or do they require paid TradingView subscriptions?",
    answer: "All strategies and indicators taught in this playlist can be applied on the 100% FREE plan of TradingView as well as free charting platforms provided by Indian brokers (Zerodha Kite, Groww, AngelOne, Upstox, Dhan, Fyers)."
  },
  {
    category: "Payment & KYC",
    question: "Who is operating this platform and what payment methods are accepted?",
    answer: "This platform is operated by Kiran Kumar, located at JNTU, Hyderabad, Telangana. We accept all major Indian payment methods through 256-bit SSL encrypted gateways: UPI (Google Pay, PhonePe, Paytm, BHIM, CRED), Debit Cards, Credit Cards, and NetBanking across 50+ Indian banks."
  },
  {
    category: "Refund Policy",
    question: "What is your Refund & Cancellation Policy?",
    answer: "Because this is a digital information product, all sales are final. Strictly NO REFUNDS are provided on digital course purchases once the playlist link has been delivered. If your money was deducted twice by the bank or payment failed without delivery, we provide 100% immediate resolution within 24 hours."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rajesh Varma",
    location: "Hyderabad, Telangana",
    role: "Index & Option Buyer",
    rating: 5,
    comment: "The VWAP and EMA ribbon confluence taught in Module 2 completely transformed how I take entries on Nifty & BankNifty 5-min charts. The exact rules saved me from multiple fake breakouts.",
    verifiedBuyer: true,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    name: "Sneha Mukherjee",
    location: "Kolkata, West Bengal",
    role: "Swing Trader",
    rating: 5,
    comment: "Instant email delivery right after payment! The playlist is crisp, no unnecessary fluff, and Kiran Sir explains complex Volume Profile concepts in very simple, actionable terms.",
    verifiedBuyer: true,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    name: "Amit Patel",
    location: "Ahmedabad, Gujarat",
    role: "Full-Time Stock Trader",
    rating: 5,
    comment: "At just ₹99, this provides 10x more practical value than courses charging ₹15,000. The risk-to-reward ratio framework in Lesson 11 alone paid for the course on my first trade.",
    verifiedBuyer: true,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  }
];
