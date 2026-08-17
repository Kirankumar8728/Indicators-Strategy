import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Lock, CheckCircle2, Smartphone, CreditCard, Building2, QrCode, ExternalLink, Mail } from 'lucide-react';
import { MERCHANT_INFO } from '../data/courseData';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type PaymentMethod = 'upi' | 'card' | 'netbanking' | 'qr';

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    upiId: '',
  });

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('upi');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [generatedReceipt, setGeneratedReceipt] = useState<{
    receiptId: string;
    txnId: string;
    date: string;
    amount: string;
  } | null>(null);

  const handleResetAndClose = () => {
    setOrderComplete(false);
    setIsProcessing(false);
    onClose();
  };

  // Close modal on Escape key press & prevent background scrolling
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleResetAndClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in your Name, Email, and Phone number for digital delivery.');
      return;
    }

    setIsProcessing(true);

    // Simulate Payment Gateway processing & instant email dispatch
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
      setGeneratedReceipt({
        receiptId: `INV-${Date.now().toString().slice(-6)}`,
        txnId: `TXN_IND_${Math.floor(100000000 + Math.random() * 900000000)}`,
        date: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        amount: '₹99.00'
      });
    }, 1200);
  };

  return (
    <div 
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleResetAndClose();
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
    >
      <div className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-3">
          <div className="space-y-0.5 min-w-0">
            <div className="flex items-center gap-1.5 text-xs text-amber-400 font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="truncate">Secure Gateway Checkout</span>
            </div>
            <h3 className="text-sm sm:text-base font-extrabold text-white truncate">
              {orderComplete ? 'Payment Successful & Access Granted' : 'Advanced Trading Indicators & Tips'}
            </h3>
          </div>

          <button
            type="button"
            onClick={handleResetAndClose}
            aria-label="Close payment modal"
            className="p-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0 flex items-center gap-1 border border-slate-700/60 hover:border-slate-600"
          >
            <span className="text-xs font-semibold hidden sm:inline">Close</span>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6">
          {!orderComplete ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Order Summary Box */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Product:</span>
                  <span className="font-semibold text-white">Advanced Trading Indicators Playlist</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>Standard Price:</span>
                  <span className="line-through text-slate-500">₹2,499</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>Limited Time Offer (96% OFF):</span>
                  <span className="text-emerald-400 font-semibold">- ₹2,400</span>
                </div>
                <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-sm font-bold text-white">
                  <span>Total Amount Payable:</span>
                  <span className="text-lg text-amber-400">₹99.00</span>
                </div>
              </div>

              {/* Customer Contact Details (Mandatory for KYC & Delivery) */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                  1. Delivery Details (Where to send your link)
                </div>

                <div className="space-y-2.5 text-xs">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">
                      Full Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">
                      Email Address <span className="text-amber-400">* (Private playlist sent here)</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@gmail.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">
                      Mobile Number <span className="text-amber-400">* (For transaction SMS &amp; WhatsApp)</span>
                    </label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder="10-digit Mobile Number"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-2.5">
                <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                  2. Choose Payment Method
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-2.5 rounded-xl border text-center font-medium transition-all ${paymentMethod === 'upi' ? 'bg-amber-500/10 border-amber-400 text-amber-300' : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'}`}
                  >
                    <Smartphone className="w-4 h-4 mx-auto mb-1 text-amber-400" />
                    <span>UPI / GPay</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('qr')}
                    className={`p-2.5 rounded-xl border text-center font-medium transition-all ${paymentMethod === 'qr' ? 'bg-amber-500/10 border-amber-400 text-amber-300' : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'}`}
                  >
                    <QrCode className="w-4 h-4 mx-auto mb-1 text-sky-400" />
                    <span>Scan QR</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-2.5 rounded-xl border text-center font-medium transition-all ${paymentMethod === 'card' ? 'bg-amber-500/10 border-amber-400 text-amber-300' : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'}`}
                  >
                    <CreditCard className="w-4 h-4 mx-auto mb-1 text-emerald-400" />
                    <span>Card</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('netbanking')}
                    className={`p-2.5 rounded-xl border text-center font-medium transition-all ${paymentMethod === 'netbanking' ? 'bg-amber-500/10 border-amber-400 text-amber-300' : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'}`}
                  >
                    <Building2 className="w-4 h-4 mx-auto mb-1 text-purple-400" />
                    <span>NetBanking</span>
                  </button>
                </div>

                {paymentMethod === 'upi' && (
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-2">
                    <label className="text-slate-300 block">Enter UPI ID (e.g. mobilenumber@okaxis / mobilenumber@ybl):</label>
                    <input
                      type="text"
                      placeholder="yourname@upi"
                      value={formData.upiId}
                      onChange={e => setFormData({ ...formData, upiId: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-600 focus:outline-none focus:border-amber-400"
                    />
                    <div className="text-[11px] text-slate-400">Supported: Google Pay, PhonePe, Paytm, BHIM, CRED, Amazon Pay</div>
                  </div>
                )}

                {paymentMethod === 'qr' && (
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-center space-y-2 text-xs">
                    <div className="w-32 h-32 mx-auto bg-white p-2 rounded-xl flex items-center justify-center">
                      <div className="w-full h-full border-2 border-dashed border-slate-800 flex flex-col items-center justify-center text-slate-900 font-mono text-[10px]">
                        <QrCode className="w-16 h-16 text-slate-900" />
                        <span>UPI QR ₹99</span>
                      </div>
                    </div>
                    <p className="text-slate-400 text-[11px]">Scan using any UPI App (GPay, PhonePe, Paytm)</p>
                  </div>
                )}
              </div>

              {/* CRITICAL MANDATORY DELIVERY DISCLOSURE STATEMENT */}
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-center space-y-1">
                <p className="text-xs text-amber-200 font-medium leading-relaxed">
                  "Delivery: Upon successful payment, you will instantly receive a secure, private link to the complete YouTube playlist via email."
                </p>
                <p className="text-[10px] text-slate-400">
                  Because this is a digital information product, all sales are final. Strictly NO REFUNDS once link is delivered.
                </p>
              </div>

              {/* Submit & Cancel Buttons */}
              <div className="space-y-2">
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-extrabold text-sm sm:text-base shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isProcessing ? (
                    <>
                      <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Processing Payment (₹99)...</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Pay ₹99 &amp; Get Instant Playlist Link</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="w-full py-2.5 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-950/60 hover:bg-slate-900 text-slate-400 hover:text-white font-medium text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Cancel &amp; Close Payment</span>
                </button>
              </div>

              {/* Merchant verification note */}
              <div className="text-[11px] text-center text-slate-400 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Operated by {MERCHANT_INFO.merchantName} ({MERCHANT_INFO.registeredAddress})</span>
              </div>
            </form>
          ) : (
            /* Order Success View */
            <div className="space-y-6 text-center py-2">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">Payment Completed Successfully!</h3>
                <p className="text-xs text-slate-300">
                  Your private YouTube playlist access link has been generated and dispatched.
                </p>
              </div>

              {/* Email dispatch alert */}
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-left space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Mail className="w-4 h-4" />
                  <span>Confirmation Email Dispatched</span>
                </div>
                <p className="text-slate-300">
                  We have sent the private YouTube playlist link and official tax invoice to: <strong className="text-white">{formData.email}</strong>
                </p>
                <p className="text-[11px] text-slate-400 italic">
                  (If not in Primary Inbox, please check Spam / Promotions folder)
                </p>
              </div>

              {/* Direct Access Button */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border-2 border-amber-500/40 text-center space-y-3">
                <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                  Direct Instant Access
                </div>
                <a
                  href="https://www.youtube.com/playlist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 text-slate-950 font-black text-sm shadow-md transition-transform transform hover:scale-[1.02]"
                >
                  <span>Open Private YouTube Playlist Now</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Tax Invoice Details */}
              {generatedReceipt && (
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-left text-xs space-y-1.5 text-slate-300">
                  <div className="font-bold text-white border-b border-slate-800 pb-1 flex justify-between">
                    <span>Tax Invoice / Transaction Record</span>
                    <span className="text-emerald-400 font-mono">PAID</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Invoice ID:</span>
                    <span className="font-mono text-white">{generatedReceipt.receiptId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Payment Ref ID:</span>
                    <span className="font-mono text-slate-300">{generatedReceipt.txnId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Date &amp; Time:</span>
                    <span>{generatedReceipt.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Customer Name:</span>
                    <span className="text-white font-medium">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Customer Phone:</span>
                    <span className="font-mono">{formData.phone}</span>
                  </div>
                  <div className="flex justify-between font-bold text-white pt-1 border-t border-slate-800">
                    <span>Amount Paid:</span>
                    <span className="text-amber-400">{generatedReceipt.amount}</span>
                  </div>
                </div>
              )}

              <button
                onClick={handleResetAndClose}
                className="text-xs text-slate-400 hover:text-slate-200 underline pt-2"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
