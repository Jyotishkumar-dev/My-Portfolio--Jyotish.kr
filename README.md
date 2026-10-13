# Jyotish Kumar — Modern Portfolio Website ⚡

An award-winning, high-performance portfolio website engineered for **Jyotish Kumar** (Full-Stack Engineer & Creative AI Developer). Built to showcase production web applications, hackathon technical leadership, DSA milestones, and interactive 3D experiences for software engineering internship applications.

🌐 **Live Local Dev Server:** `http://127.0.0.1:5173/`

---

## 🚀 Key Features & Architectural Highlights

- **3D WebGL Constellation (Three.js)**: Interactive 3D particle constellation and rotating holographic wireframe core responding smoothly to pointer parallax and device frame rates.
- **Locomotive Scroll v5 & GSAP**: Ultra-smooth inertia scrolling and entrance timelines for a cinematic, premium feel.
- **Real Portrait Hologram**: Styled portrait card featuring Jyotish Kumar with 3D gyro tilt, status indicators, and holographic role badges.
- **Comprehensive Project Showcase with Deep-Dive Modals**:
  1. **RESTOCK AI (DEAD-STOCK)**: Multimodal Google Gemini AI electronic waste recovery platform ([GitHub](https://github.com/Jyotishkumar-dev/DEAD-STOCK-) • [Live Demo](https://dead-stock-eta.vercel.app)).
  2. **Campus Resolve**: Collegiate hostel & mess grievance-to-fix platform powered by Next.js 16 and Supabase ([GitHub](https://github.com/Jyotishkumar-dev/Hostel-Mess-Service-Management-Platform)).
  3. **SmartAttend**: 5-tier role-based academic attendance management system with JWT auth and Drizzle ORM.
  4. **KrishiFleet AI**: Farm equipment rental marketplace with explainable recommendation engine (SQUidHACK 2026 Winner).
- **Accurate Profile Details**:
  - **Location**: Currently residing in **Indore, Madhya Pradesh** with real-time IST clock indicator.
  - **Education**: SAGE University, Indore – Alta School of Technology (B.Tech Computer Science & Technology, CGPA: 7.8).
  - **LeetCode Milestone**: 55+ fundamental DSA problems solved with interactive celebratory confetti.
- **Hackathons & Leadership**:
  - Arkfest '26 — Graphic Designer & Organizing Committee Member
  - UDBHAV AI Sprint '26 — Graphic Designer & Organizing Committee Member
  - SQUidHACK 2026 — Technical Lead (Aug 2026)
  - Techfest, IIT Bombay — College Ambassador (2026 – Present)
  - Alta School of Technology Social Media & Tech Club — Core Member (Aug 2026 – Present)
- **Supabase Backend & Recruiter Hub**:
  - Live inquiry submission stored directly in Supabase PostgreSQL table `portfolio_messages`.
  - Built-in UI configuration drawer to plug Supabase keys on the fly.
  - Resilient local buffer fallback so inquiries are never dropped.
- **Interactive DevTerminal CLI Easter Egg**:
  - Press `~` or click `CLI` in navbar/hero to access an interactive Unix-like terminal with commands: `help`, `about`, `skills`, `projects`, `leadership`, `leetcode`, `contact`, `resume`, and `sudo hire`.
- **Integrated Resume Viewer**:
  - 1-click modal previewing and downloading the candidate's PDF resume (`/assets/Jyotish_Kumar_Resume.pdf`).

---

## 🛠️ Technology Stack

| Domain | Technologies |
| :--- | :--- |
| **Framework & Build** | React 19, TypeScript, Vite 8, Turbopack tooling |
| **Styling & Tokens** | Tailwind CSS v4, Vanilla CSS Custom Tokens, Glassmorphism |
| **3D & Graphics** | Three.js (WebGL particles & 3D wireframe geometry) |
| **Motion & Scroll** | GSAP 3, Locomotive Scroll v5 (Lenis core) |
| **Backend & Cloud** | Supabase (@supabase/supabase-js), PostgreSQL, REST APIs |
| **Icons & Effects** | Lucide React, Custom Brand SVGs, Canvas Confetti, Web Audio Synth |

---

## ⚙️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally
```bash
npm run dev
```
Open [http://127.0.0.1:5173](http://127.0.0.1:5173) in your browser.

### 3. Production Build
```bash
npm run build
npm run preview
```

---

## 🗄️ Supabase Database Schema

To connect your Supabase database, run this query in your **Supabase Dashboard > SQL Editor**:

```sql
create table if not exists public.portfolio_messages (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  company text default 'Not Specified',
  role text default 'General Inquiry',
  message text not null
);

-- Enable Row Level Security
alter table public.portfolio_messages enable row level security;

-- Allow anonymous form submissions
create policy "Allow anonymous message submissions"
  on public.portfolio_messages
  for insert
  to anon
  with check (true);
```

You can then add your credentials to `.env.local` or directly in the website's Supabase settings modal:
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

---

## 🚢 Deploy to Vercel

```bash
npx vercel
```
Or import the GitHub repository into [Vercel](https://vercel.com) with framework preset **Vite**.
