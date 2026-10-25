# MediCare — Online Medicine Store Management System

A polished **college demonstration project** built with React + Vite + Tailwind CSS, Node.js + Express, and MongoDB + Mongoose. The catalogue uses fictional sample entries. This is not a live pharmacy and does not provide medical advice, diagnosis, prescriptions, or real medicine sales.

## Features

- Responsive animated storefront, dark/light theme, reduced-motion support, product cards, categories, product detail modal, FAQs, and accessible states.
- Public guest catalogue, search/filter/sort, local guest cart and saved items.
- Registration/login with bcrypt password hashing, JWT-protected APIs and role-protected admin routes.
- Server-side cart merge, stock/price validation and simulated COD checkout; prescription-required demo items are blocked.
- Personal reminder creation/edit/pause/resume/delete, user-entered schedule history and explicitly estimated supply duration.
- Admin summary, product stock/price edit, demo orders, CSV export and protected product/order/customer/audit endpoints.
- Mongoose models for products, users, orders, reminders and audit events; validation, Helmet, CORS, rate limiting and centralized errors.

## Requirements

- Node.js 20+ (Node 22 recommended)
- npm
- MongoDB Community running locally or a MongoDB connection URI (optional for quick demo mode)

## Quick start

From this folder:

```bash
npm install
npm --prefix server install
npm --prefix client install
```

Copy `server/.env.example` to `server/.env` and change `JWT_SECRET` and `DEMO_ADMIN_PASSWORD` for your environment. Set `MONGODB_URI` to your local MongoDB or MongoDB Atlas connection string. If MongoDB is not configured or unavailable, the API falls back to **in-memory demo mode** so the UI can be explored; accounts/orders/reminders in that mode reset when the server restarts. Do not use the fallback as production storage.

Run both apps from the project root:

```bash
npm run dev
```

Frontend: http://localhost:5173  
API health: http://localhost:5000/api/health

Alternatively, run separately using `npm run dev:server` and `npm run dev:client`.

## Demo administrator

On first server startup, a demo administrator is created if absent. Defaults for a local demonstration:

- Email: `admin@medicare.demo`
- Password: `ChangeMe123!`

Set `DEMO_ADMIN_EMAIL` and `DEMO_ADMIN_PASSWORD` in `server/.env` before startup to customize these. Change the defaults before sharing/deploying the app. The client exposes the admin dashboard link after the API returns an administrator role.

## Build and test

```bash
npm run build
npm test
```

## Reminder behavior and limitations

Reminder entries are created from instructions the user enters; the app never prescribes or calculates a dose. The current client prototype stores reminder schedules/history in local browser storage. It **does not guarantee background notifications or push alerts while the app is closed**. The API includes authenticated reminder routes, but a production notification worker, service worker/push subscription, permission flow, timezone handling, and delivery monitoring would need to be added and tested before claiming dependable notifications. Supply duration is only an estimate from the user's inputs, not medical guidance.

## Image and product-data notes

Sample product entries are fictional. Product-card photos use remote Unsplash image URLs for visual prototyping; they are not photos of the fictional products and can be replaced with local, licensed product photography. Network restrictions may prevent remote images from loading; cards include a visual fallback. Do not present these images or sample text as verified medicine packaging or authoritative medical data.

## Important demo limitations

- Checkout is simulated; there is no payment gateway or real order fulfilment.
- The prescription workflow is a safety gate simulation; no real prescription files are collected or reviewed.
- Some account/cart/order/reminder client screens use local demo state. Server APIs and Mongoose models are included, but a production-grade frontend-to-API integration pass is still needed for every personal/admin workflow.
- In-memory mode is temporary and resets on restart; use MongoDB for persistent API records.
- The dashboard's sample chart is illustrative. The audit API is available, but not all UI actions persist audit events in demo mode.
- This project has not undergone legal, pharmacy-regulatory, privacy, or security certification review.

## Suggested next improvements

1. Connect every personal account, order, reminder and admin screen directly to the protected API.
2. Add real notification scheduling (service worker + permission + timezone-aware scheduler), reminder occurrence generation and a calendar view.
3. Complete batch/expiry management UI, category CRUD, customer/order status screens, and audit-log/CSV reports.
4. Add end-to-end browser tests, MongoDB integration tests, CSRF strategy if cookie auth is introduced, and deployment configuration.
5. Replace remote demo photos and fictional product descriptions with locally stored licensed assets and carefully reviewed product information.


## Updated educational medicine catalogue

The demo catalogue now uses generic medicine names and general educational summaries for paracetamol, cetirizine, oral rehydration salts, povidone-iodine, amoxicillin, and metformin. It shows common uses, mechanism summaries, precautions, possible side effects, and source links. It deliberately does not recommend individual doses. Demo prices and stock are illustrative, and prescription-required entries are blocked from checkout. This is not a licensed pharmacy and must not be used for real medicine purchases or clinical decisions.

### Medicine information references
- Paracetamol: NHS, https://www.nhs.uk/medicines/paracetamol-for-adults/
- Cetirizine: MedlinePlus, https://medlineplus.gov/druginfo/meds/a623043.html
- Oral rehydration salts: WHO, https://www.who.int/publications/i/item/WHO-FCH-CAH-06.1
- Povidone-iodine: MSF Medical Guidelines, https://medicalguidelines.msf.org/sites/default/files/pdf/guideline-339-en.pdf
- Amoxicillin: NHS, https://www.nhs.uk/medicines/amoxicillin/about-amoxicillin/
- Metformin: NHS, https://www.nhs.uk/medicines/metformin/

### Image attribution and limits
- Paracetamol tablets and ORS sachet images are from Wikimedia Commons: `Medication Paracetamol.JPG` by Mk2010 (CC BY-SA 3.0) and `Ors sachet.jpg` by Shubjt (CC BY-SA 4.0). See https://commons.wikimedia.org/wiki/File:Medication_Paracetamol.JPG and https://commons.wikimedia.org/wiki/File:Ors_sachet.jpg for licensing and attribution details.
- Other product images are remotely hosted representative product photographs. Their packaging can differ from the generic educational catalogue entry. Replace these with locally licensed or manufacturer-approved assets before any public/commercial deployment.
