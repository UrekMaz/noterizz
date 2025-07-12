# 📚 NoteRizz – Academic Resource Sharing & Mentorship Platform

> 🚀 *A role-based, full-stack web application built to simplify how students and faculty share notes, track academic progress, and engage beyond the classroom.*

---

## 🌟 Project Overview

In many colleges, students struggle with scattered study materials and lack direct channels to engage with faculty. NoteRizz solves this by offering:
- 🧑‍🎓 Student-focused tools: Upload/download notes, bookmarks, aptitude tests, profile tracking.
- 👩‍🏫 Faculty-focused tools: Branch-wise performance views, upload curated resources, auto email alerts, mentorship opportunities.

> Built using Node.js, Express, MongoDB, EJS, and Bootstrap — with role-based access and real-time collaboration features.

---

## ✨ Key Features

### 👩‍🎓 **Student-Centric**
- Upload & share notes (with auto metadata: UID, branch, year)
- Download verified notes uploaded by peers or faculty
- Like / dislike resources (feedback loop)
- Bookmark notes/tests for quick revision
- Take aptitude quizzes (Open Trivia API) & track scores
- Edit profile & manage skills/interests
- View personal dashboard with uploaded notes, bookmarks, and test history

### 👩‍🏫 **Faculty-Centric**
- Upload syllabus-aligned resources with instant email alerts to students
- View individual student profiles with skills, scores, uploads
- Monitor branch-wise academic performance
- Plan targeted mentoring sessions based on real data
- (Future scope) Create custom quizzes, mentor-mentee matching

---

## 🛠 **Tech Stack**

| Layer          | Technology                          | Why                                                        |
|----------------|------------------------------------|-----------------------------------------------------------|
| Frontend       | EJS + Bootstrap                    | Simple server-side rendering, quick templating             |
| Backend        | Node.js + Express.js                | Lightweight, flexible routing & middleware                 |
| Database       | MongoDB + Mongoose                  | Schema flexibility & fast document-based queries           |
| File Upload    | Multer                              | Secure, seamless file handling                             |
| Auth & Session | express-session + bcrypt             | Secure login & role-based access                           |
| Email          | Nodemailer                           | Automated faculty ➜ student notifications                  |
| Quiz API       | Open Trivia DB (via Axios)          | Dynamic aptitude test questions                            |

---

## 📸 **Project Screenshots**

> ⚠️ *Replace below image paths with actual screenshots in your repo (e.g., `/images/filename.png`).*

### 🎓 Student Dashboard
![Student Dashboard](images/student-dashboard.png)

### 🧑‍🏫 Faculty Upload Page
![Faculty Upload Page](images/faculty-upload.png)

### 📥 Notes Upload Modal
![Upload Modal](images/notes-upload.png)

### ✏️ Bookmark & Like/Dislike
![Bookmark & Likes](images/bookmark-likes.png)

---

## 🏗 **System Flow & Security Highlights**

- ✅ Role-based access (student / faculty) enforced via Express middleware.
- 📂 Multer for secure uploads, tagged with uploader metadata.
- 📨 Auto email alerts (faculty uploads ➜ targeted student groups).
- 🧾 MongoDB: stores users, notes, test attempts, bookmarks.
- 🔒 All interactions authenticated & traceable (UID, session info).

---
