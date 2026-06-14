<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This project uses the latest Next.js App Router.
APIs, conventions, and file structure may differ from older versions.

Always:

- Read relevant docs from node_modules/next/dist/docs/
- Follow latest App Router conventions
- Prefer Server Components
- Avoid deprecated APIs
- Use Metadata API
- Use async server patterns
<!-- END:nextjs-agent-rules -->

# AI Project Instructions

Project Name:
**[TODO: Thay tên dự án tại đây]**

Description:
**[TODO: Mô tả ngắn về dự án]**

---

# Backend Integration (CRITICAL)

- **Backend path**: `[TODO: đường dẫn tuyệt đối tới backend, ví dụ D:\Projects\my-backend]`
- **Local URL**: `http://localhost:3001`

**QUY TẮC BẮT BUỘC**: Khi làm việc với API (login, register, CRUD, v.v.), AI **phải chủ động đọc code Backend** qua công cụ hệ thống trước khi viết code Frontend. Không tự giả định endpoint hoặc DTO.

---

# IMPORTANT

Before generating code, read and follow all rules and context inside:

.agent/

Especially:

- .agent/rules/
- .agent/context/
- .agent/decisions/
- .agent/examples/

The .agent folder acts as the main AI memory and project knowledge base.

Always prioritize:

1. Existing codebase patterns
2. .agent examples
3. .agent rules
4. AGENTS.md instructions

---

# Core Development Principles

- Keep code scalable
- Keep UI consistent
- Prefer reusable components
- Follow feature-based architecture
- Generate production-ready code

---

# State Management & Data Fetching (CRITICAL)

- ALWAYS use `@tanstack/react-query` for API calls, data fetching, and mutations (`useQuery`, `useMutation`).
- NEVER use manual `useState` or `useEffect` for handling API loading states, errors, or fetching.
- ALWAYS extract logic into separate custom hooks (e.g., `use-login-form.ts`). Keep UI components clean.

---

# UI Direction

The UI style is:

- Dark premium SaaS
- Inspired by Vercel, Linear, Stripe
- Modern developer platform aesthetic

Avoid:

- Flat UI
- Old dashboard styles
- Random design patterns
- Inconsistent spacing

---

# Next.js Principles

- Prefer Server Components
- Avoid unnecessary `use client`
- Optimize performance
- Use Metadata API
- Follow App Router best practices

---

# Component Rules

Always:

- Reuse existing UI components
- Follow design system
- Support responsiveness
- Support dark/light themes

Avoid:

- Duplicated UI
- Massive components
- Inline styles

---

# AI Output Expectations

Generated code must:

- Match the existing design system
- Follow .agent rules and examples
- Be maintainable, scalable, responsive
- Be SEO-friendly and production-ready

---

# Language Rules

- Always respond in Vietnamese
- Code comments should be concise
- Keep naming clear and readable
