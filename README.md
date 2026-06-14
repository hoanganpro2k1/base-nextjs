# Base Next.js Template

Template khởi đầu chuẩn cho các dự án Next.js — tích hợp sẵn auth flow, dark/light theme, React Query, Zustand và design system premium.

---

## Tech Stack

| Công nghệ | Mục đích |
|---|---|
| Next.js 16 (App Router) | Framework, Server Components |
| TypeScript | Type safety |
| TailwindCSS v4 | Styling |
| Shadcn UI + Radix UI | UI components |
| Framer Motion | Animations |
| @tanstack/react-query | Data fetching & caching |
| Zustand | Global state (auth) |
| Axios | HTTP client + interceptors |
| react-hook-form + Zod | Form validation |
| next-themes | Dark/Light theme |
| Sonner | Toast notifications |
| jose | JWT decode |

---

## Tính năng có sẵn

- **Auth flow đầy đủ** — Login (2 bước + TOTP/OTP), Register, Forgot Password, Verify OTP, Google OAuth callback
- **JWT auto-refresh** — Axios interceptor tự động gọi refresh token khi nhận 401
- **Auth Provider** — Khởi tạo auth state từ cookie phía server, không bị flash UI
- **Dark/Light theme** — Toggle với next-themes, lưu preference
- **Design system** — Dark premium SaaS, màu sắc nhất quán, border radius chuẩn
- **PR Template** — `.github/PULL_REQUEST_TEMPLATE.md` cho quy trình review chuẩn

---

## Cấu trúc thư mục

```
src/
├── app/
│   ├── (auth)/              # Auth pages (login, register, forgot-password, verify)
│   ├── api/auth/            # Next.js Route Handlers (login, logout, refresh, google)
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Trang chủ placeholder
├── components/
│   ├── auth/                # Auth form components
│   ├── layout/              # Header, Footer
│   └── ui/                  # Shadcn UI components + custom
├── hooks/                   # Custom hooks (use-login-form, use-logout, ...)
├── lib/                     # axios, jwt, utils, api-error
├── providers/               # AuthProvider, QueryProvider
├── schemas/                 # Zod schemas (auth)
├── services/                # API service layer (auth.service.ts)
└── store/                   # Zustand stores (auth.store.ts)
```

---

## Bắt đầu

### 1. Clone và cài đặt

```bash
git clone https://github.com/hoanganpro2k1/base-nextjs.git
cd base-nextjs
pnpm install
```

### 2. Cấu hình môi trường

```bash
cp .env.example .env.local
```

Sau đó chỉnh sửa `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3001
JWT_SECRET=your-jwt-secret-here
```

### 3. Chạy dev server

```bash
pnpm dev
```

Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt.

---

## Khi dùng cho dự án mới

1. **Đổi tên app** — Tìm và thay `BaseApp` trong `layout.tsx`, `Header.tsx`, `Footer.tsx`
2. **Cập nhật AGENTS.md** — Điền `[TODO]` ở tên dự án và đường dẫn backend
3. **Cập nhật backend URL** — Sửa `NEXT_PUBLIC_API_URL` trong `.env.local`
4. **Thêm nav links** — Sửa mảng `navLinks` trong `Header.tsx`
5. **Tuỳ chỉnh màu sắc** — Sửa CSS variables trong `globals.css`

---

## Quy tắc phát triển

- **Data fetching**: Luôn dùng `@tanstack/react-query` (`useQuery`, `useMutation`) — không dùng `useState/useEffect` cho API
- **Logic**: Tách ra custom hook riêng, component chỉ render
- **Form**: Dùng `react-hook-form` + `zod` cho mọi form
- **TypeScript**: Không dùng `any`, interface phải khớp với DTO backend
- **Component**: Server Component mặc định, chỉ thêm `"use client"` khi cần
- **Import**: Dùng absolute import `@/...`

Chi tiết xem tại [.agent/rules/](.agent/rules/).

---

## Scripts

```bash
pnpm dev      # Chạy dev server (Turbopack)
pnpm build    # Build production
pnpm start    # Chạy production server
pnpm lint     # Kiểm tra lỗi ESLint
```
