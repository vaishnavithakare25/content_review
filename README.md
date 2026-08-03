# Content Review Workspace

A React + TypeScript application that allows different user roles to browse, review, create, edit, and delete content using the DummyJSON API.

This project was developed as part of the **React Project Readiness Practice Assignment** and demonstrates production-oriented React architecture, React Query, role-based authorization, reusable components, and feature-based folder organization.

---

# Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- TanStack React Query
- Axios
- Zustand
- React Hook Form
- Zod
- Tailwind CSS
- React Hot Toast

---

# Features

## Authentication

- Mock login using three roles
- Persisted authentication using Zustand
- Protected routes
- Forbidden page for unauthorized access

### Roles

- Content Manager
- Reviewer
- Reader

---

## Posts

- View posts
- Search posts
- Sort posts
- Filter by tag
- Pagination
- View post details
- Create post
- Edit post
- Delete post

---

## Comments

- View review comments
- Add review comments
- Independent loading/error state

---

## Permissions

| Feature | Content Manager | Reviewer | Reader |
|----------|-----------------|----------|----------|
| View Posts | ✅ | ✅ | ✅ |
| Create Post | ✅ | ❌ | ❌ |
| Edit Post | ✅ | ❌ | ❌ |
| Delete Post | ✅ | ❌ | ❌ |
| View Comments | ✅ | ✅ | ✅ |
| Add Comment | ✅ | ✅ | ❌ |

---

# Folder Structure

```text
src
├── api
├── app
├── constants
├── features
│   ├── auth
│   ├── comments
│   └── posts
├── layouts
├── providers
├── routes
├── shared
├── store
└── types
```

---

# Project Architecture

```
Pages
   │
   ▼
Hooks
   │
   ▼
Services
   │
   ▼
API Client
   │
   ▼
DummyJSON API
```

DTO mapping is performed inside the service/mapper layer and never inside components or hooks.

---

# React Query Hooks

## usePostsQuery

### Responsibility

- Fetch paginated posts
- Handle search
- Handle sorting
- Handle tag filtering
- Cache posts list

---

## usePostQuery

### Responsibility

- Fetch a single post
- Cache post details

---

## useTagsQuery

### Responsibility

- Fetch available tags
- Cache tag list

---

## usePostCommentsQuery

### Responsibility

- Fetch comments for a post
- Cache comments independently from the post

---

## useCreatePostMutation

### Responsibility

- Create a post
- Invalidate posts list cache

---

## useUpdatePostMutation

### Responsibility

- Update a post
- Invalidate posts list
- Invalidate post detail

---

## useDeletePostMutation

### Responsibility

- Delete a post
- Invalidate posts list

---

## useAddCommentMutation

### Responsibility

- Add a review comment
- Invalidate post comments

---

# Query Key Strategy

```text
POSTS
│
├── ALL
├── LIST(search, tag, sort, page, limit)
├── DETAIL(postId)

COMMENTS
│
└── POST(postId)

TAGS
│
└── ALL
```

Every server input that changes returned data is included in the query key.

---

# Cache Invalidation

| Mutation | Invalidated Query |
|-----------|-------------------|
| Create Post | Posts List |
| Update Post | Posts List, Post Detail |
| Delete Post | Posts List |
| Add Comment | Post Comments |

---

# State Management

| State | Library |
|--------|---------|
| Authentication | Zustand |
| Server State | React Query |
| Forms | React Hook Form |
| Validation | Zod |
| Search & Filters | URL Search Params |

---

# UI States

The application provides:

- Loading state
- Empty state
- Error state
- Success toast
- Error toast
- Delete confirmation dialog

---

# Route Protection

Routes are protected using authentication and permission-based authorization.

Unauthorized users are redirected to the **Forbidden** page.

---

# Error Handling

- Centralized API error handling
- AppError abstraction
- ErrorState component
- User-friendly error messages
- Retry supported by React Query

---

# Assignment Notes

This project follows the assignment requirements by:

- Using feature-based architecture
- Separating hooks, services, DTOs, and API calls
- Keeping DTO mapping outside hooks/components
- Using focused React Query hooks
- Implementing role-based permissions
- Maintaining reusable shared components
- Providing independent loading/error states
- Showing consistent mutation feedback using toast notifications

---

# Getting Started

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Run lint

```bash
npm run lint
```

Build project

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

# API

The application uses the DummyJSON REST API.

- Posts
- Tags
- Comments

---

# Author

**Vaishnavi Thakare**