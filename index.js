// Aqronix PREMIUM VPS STORE // Single-file React + Tailwind UI (preview). This file is a production-ready frontend template // with a mock backend snippet included below (Node/Express). Use it as the complete site // scaffold: copy to a Next.js page (pages/index.jsx) or create-react-app App.jsx and install Tailwind.

import React, { useState } from "react";

const CONTACT_WA = "+201028085788"; const plans = [ { id: "ram2", title: "RAM 2GB", egp: 50, usd: 1.55 }, { id: "ram4", title: "RAM 4GB", egp: 90, usd: 2.75 }, { id: "ram6", title: "RAM 6GB", egp: 130, usd: 3.95 }, { id: "ram8", title: "RAM 8GB", egp: 160, usd: 4.85 }, { id: "ram16", title: "RAM 16GB", egp: 300, usd: 8.05 }, { id: "ram32", title: "RAM 32GB", egp: 400, usd: 10.55 } ];

// apply a small conversion fee to USD display (as requested) function toUsdWithFee(usd){ return (usd * 1.08).toFixed(2); // +8% fee for conversion/processing }

export default function AqronixVPSFull(){ const [selected, setSelected] = useState(plans[1]); const [showCheckout, setShowCheckout] = useState(false); const [contactMsg, setContactMsg] = useState(""); const [quantity, setQuantity] = useState(1);

const subtotalEgp = (selected.egp * quantity).toFixed(2); const subtotalUsd = (selected.usd * 1.08 * quantity).toFixed(2);

return ( <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-800 text-white font-sans"> <header className="max-w-6xl mx-auto p-6 flex items-center justify-between"> <div className="flex items-center gap-4"> <div className="rounded-full w-12 h-12 bg-green-500 flex items-center justify-center text-black font-bold">A</div> <div> <h1 className="text-2xl font-extrabold">Aqronix VPS</h1> <div className="text-sm text-gray-300">Premium VPS · ضمان المدة كاملة دون انقطاع</div> </div> </div> <nav className="flex items-center gap-4"> <a href="#plans" className="text-sm hover:text-green-300">الخطط</a> <a href="#features" className="text-sm hover:text-green-300">المميزات</a> <a href="#contact" className="text-sm hover:text-green-300">تواصل</a> <a href={https://wa.me/${CONTACT_WA.replace(/[+]/g,"")}} className="ml-4 bg-green-500 text-black px-4 py-2 rounded-lg text-sm">DM على واتس</a> </nav> </header>

<main className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
    <section className="lg:col-span-2">
      <div className="rounded-2xl bg-zinc-900 p-8 shadow-2xl">
        <h2 className="text-3xl font-bold mb-2 text-green-300">خدمات VPS احترافية للمهتمين بالسرفرات</h2>
        <p className="text-gray-300 mb-4">سيرفرات مُدارة، موثوقية عالية، حماية متقدمة، ودعم فني متواصل. متوفر من شهر لشهرين — اطلب الآن عبر واتساب.</p>

        <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <Feature title="ضمان كامل" desc="تم توفير جميع المواصفات وضمان المدة كاملة دون انقطاع"/>
          <Feature title="شبكات سريعة" desc="خوادم في مراكز بيانات موثوقة مع شبكة فائقة السرعة"/>
          <Feature title="دعم فني" desc="دعم سريع عبر واتساب وCPANEL متاح عند الطلب"/>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">مثبت مهني</h3>
          <pre className="bg-black p-4 rounded text-sm text-green-200 overflow-auto">{hackerBadge()}</pre>
        </div>

      </div>

      <div id="plans" className="mt-8">
        <h3 className="text-2xl font-bold mb-4">الخطة والأسعار</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map(p=> (
            <div key={p.id} className={`rounded-2xl p-5 shadow-xl border ${selected.id===p.id? 'border-green-400 scale-105': 'border-zinc-700'} transform transition` }>
              <h4 className="font-bold text-lg text-green-300">{p.title}</h4>
              <div className="text-gray-300 mt-2">{p.egp} EGP / شهر</div>
              <div className="text-gray-500 text-sm mb-4">≈ {toUsdWithFee(p.usd)} $</div>
              <div className="flex gap-2">
                <button onClick={()=>setSelected(p)} className="px-3 py-2 bg-transparent border border-zinc-700 rounded">اختار</button>
                <button onClick={()=>{setSelected(p); setShowCheckout(true)}} className="ml-auto bg-green-500 text-black px-3 py-2 rounded">اطلب الآن</button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>

    <aside className="rounded-2xl bg-zinc-900 p-6 shadow-lg">
      <h4 className="font-bold text-xl mb-2">عربة الطلب</h4>
      <div className="text-sm text-gray-300">الخطة المختارة</div>
      <div className="mt-2 p-3 bg-black rounded">
        <div className="flex justify-between items-center">
          <div>
            <div className="font-semibold">{selected.title}</div>
            <div className="text-xs text-gray-500">{selected.egp} EGP — ≈ {toUsdWithFee(selected.usd)}$</div>
          </div>
          <div>
            <input type="number" min={1} value={quantity} onChange={e=>setQuantity(Math.max(1, Number(e.target.value)))} className="w-16 bg-transparent text-right" />
          </div>
        </div>
        <div className="mt-4 text-gray-300">المجموع: <span className="font-bold">{subtotalEgp} EGP</span></div>
        <div className="text-gray-500 text-sm">≈ {subtotalUsd} $</div>

        <div className="mt-4 flex gap-2">
          <a href={`https://wa.me/${CONTACT_WA.replace(/[+]/g,"")}?text=${encodeURIComponent(`اريد طلب ${selected.title} - ${quantity} شهر`)}"`} className="w-full text-center bg-green-500 text-black px-3 py-2 rounded">اطلب عبر واتس الآن</a>
          <button onClick={()=>setShowCheckout(true)} className="w-full bg-transparent border border-zinc-700 rounded">اشترِ داخل الموقع</button>
        </div>
      </div>

      <div className="mt-6 text-xs text-gray-500">تم توفير المواصفات وضمان المدة كاملة. تواصل عبر: <a className="text-green-300" href={`https://wa.me/${CONTACT_WA.replace(/[+]/g,"")}`}>واتساب</a></div>
    </aside>

  </main>

  <footer className="max-w-6xl mx-auto p-6 text-center text-gray-400">
    © Aqronix 2025 — رقم التواصل: {CONTACT_WA}
  </footer>

  {showCheckout && (
    <CheckoutModal
      selected={selected}
      quantity={quantity}
      subtotalEgp={subtotalEgp}
      subtotalUsd={subtotalUsd}
      onClose={()=>setShowCheckout(false)}
    />
  )}
</div>

); }

function Feature({title, desc}){ return ( <div className="p-4 rounded bg-black/30"> <div className="font-semibold text-green-300">{title}</div> <div className="text-sm text-gray-300 mt-2">{desc}</div> </div> ); }

function CheckoutModal({selected, quantity, subtotalEgp, subtotalUsd, onClose}){ return ( <div className="fixed inset-0 flex items-center justify-center bg-black/60 p-6"> <div className="bg-zinc-900 rounded-2xl p-6 w-full max-w-2xl"> <div className="flex justify-between items-center"> <h3 className="text-xl font-bold">استكمال الدفع</h3> <button onClick={onClose} className="text-gray-400">اغلاق</button> </div> <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4"> <div className="p-4 rounded bg-black/20"> <div className="text-sm text-gray-300">الخطة</div> <div className="font-semibold mt-2">{selected.title}</div> <div className="text-xs text-gray-500">{selected.egp} EGP — ≈ {toUsdWithFee(selected.usd)}$</div> <div className="mt-2 text-gray-300">الكمية: {quantity} شهر</div> </div> <div className="p-4 rounded bg-black/20"> <div className="text-sm text-gray-300">المجموع</div> <div className="font-bold text-lg mt-2">{subtotalEgp} EGP</div> <div className="text-xs text-gray-500">≈ {subtotalUsd} $</div> <div className="mt-4 grid grid-cols-1 gap-2"> <a className="text-center bg-green-500 text-black px-3 py-2 rounded" href={https://wa.me/${CONTACT_WA.replace(/[+]/g,"")}?text=${encodeURIComponent(اريد طلب ${selected.title} - ${quantity} شهر - الدفع)}"}>الدفع عبر واتساب</a> <button className="border border-zinc-700 rounded px-3 py-2">دفع إلكتروني (Mock)</button> </div> </div> </div> </div> </div> ); }

function hackerBadge(){ return █▄─█─▄███─█─█─██─██─█─█─█─█─█─█─█─ █─█─██─█─█─█─█─█─█─█─█─█─█─█─█─█─█─ ─▀──▀─▀▀──▀──▀──▀──▀──▀──▀──▀──▀── Aqronix | Expert in servers & coding Managed VPS · Secure · Fast Contact: ${CONTACT_WA}; }

/* MOCK BACKEND (Node/Express) - drop into server.js on your host

const express = require('express'); const app = express(); app.use(express.json());

// simple in-memory plans const plans = [ /* same plans object * / ];

app.get('/api/plans', (req, res) => res.json(plans));

app.post('/api/order', (req, res) => { const { planId, months, customer } = req.body; // validate, create invoice, trigger provider API to create VPS // respond with invoice link or whatsapp text return res.json({ ok: true, invoice: 'https://pay.example/inv/12345' }); });

app.listen(3000, ()=>console.log('API running on 3000'));

Notes:

For real payments integrate Stripe/Paymob/PayTabs and a webhook to auto-provision.

Keep provider keys & admin endpoints secure; never expose them on frontend. */


