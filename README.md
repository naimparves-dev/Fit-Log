# 🏋️ FitLog

**FitLog** is a modern, dark-themed workout companion designed to help you discover exercises, build your daily workout plan, save workouts for later, and keep track of your training.

Choose a workout, add it to today's plan, save your favorites, and organize your routine with a simple and focused interface.

---

## 🚀 Live Project

**Live Demo:**

**GitHub Repository:**

---

## 🛠️ Technologies Used

* **Next.js** — React framework for building the application
* **React** — Component-based UI development
* **TypeScript** — Type-safe development
* **Tailwind CSS** — Styling and responsive layouts
* **React Icons** — Icons throughout the interface
* **Context API** — Global workout and plan state management
* **Next Image** — Optimized image handling

---

## ✨ Key Features

### 1. 🏋️ Workout Library

Browse a collection of workouts with useful information such as:

* Workout name
* Exercise category
* Equipment
* Difficulty
* Duration
* Calories burned
* Rating

Users can open any workout to view its complete details and instructions.

### 2. 📋 Today's Workout Plan

Add workouts directly to **Today's Plan** from the workout details page.

The My Plan page provides a quick overview of:

* Total exercises
* Total workout minutes
* Total calories
* Planned workouts

Users can also remove workouts from their plan when needed.

### 3. 💾 Save Workouts for Later

Users can save workouts they are interested in and access them later from the **Saved** tab.

The navbar automatically displays the current number of saved workouts.

### 4. 🔍 Workout Details & Sorting

Each workout has a dedicated details page containing:

* Workout image
* Description
* Muscle groups
* Equipment
* Difficulty
* Sets and reps
* Duration
* Calories
* Rating
* Step-by-step instructions

The My Plan page also allows users to sort their current list by:

* Duration
* Calories
* Rating

### 5. 📊 Dynamic Plan Tracking

FitLog keeps the workout information dynamic using React Context.

The navbar counters and My Plan statistics update automatically when workouts are added or removed.

Users can also:

* View workout details
* Mark workouts as completed
* Remove workouts
* Navigate between Today's Plan and Saved workouts
* Receive toast notifications when actions are performed

---

## 📱 Responsive Design

FitLog is designed to provide a clean experience across different screen sizes, with a dark and minimal interface focused on workout information and usability.

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── page.tsx
│   ├── MyPlan/
│   └── workouts/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── Button/
│   └── shared/
├── Context/
├── Type/
├── lib/
└── assets/
```

---

## 🎯 Project Goal

The goal of FitLog is to provide a simple workout management experience where users can discover exercises, organize their daily training, save workouts, and keep track of their progress without unnecessary complexity.

---

## 👨‍💻 Developer

Built with ❤️ using **Next.js, TypeScript, React, and Tailwind CSS**.
