# React + Vite

# 🧳 Trip Manager (React + DaisyUI + JSON Server)

A modern **Trip Management Single Page Application (SPA)** built with **React.js**.  
The project uses **TailwindCSS + DaisyUI** for styling and **Material Icons** for UI elements, along with a **dummy backend (JSON Server)** to demonstrate full **CRUD operations**.  

This app is designed for managing trips with features like **adding new trips, editing existing ones, deleting, searching, filtering, sorting, and pagination**.  

---
## ✨ Features
- ✈️ **Create, Read, Update, Delete (CRUD)** trips  
- 🔍 **Search** trips by destination name  
- 🎯 **Filter** trips by status (PLANNED, ONGOING, COMPLETED)  
- 📅 **Sort** by price or start date  
- 📖 **Pagination** for large trip lists  
- 🎨 **Responsive UI** with DaisyUI + Material Icons  
- 🗄️ **Dummy backend** powered by `json-server`  

---

- Manage trips in an intuitive dashboard  
- Search trips by destination  
- Filter trips by status: `PLANNED`, `ONGOING`, `COMPLETED`  
- Sort trips by **price** or **start date**  
- Paginate results for better UX  
- Responsive design (works on mobile, tablet, desktop)  

---

## 🚀 Demo
👉 _Add deployed link here once hosted (Vercel/Netlify)._  

---

## 📂 Project Structure
/src
  /components
    Navbar.jsx
    TripList.jsx
    TripForm.jsx
    SearchFilter.jsx
    Pagination.jsx
  /pages
    Dashboard.jsx
    AddTrip.jsx
    EditTrip.jsx
  /data
    trip.json
  App.jsx
  main.jsx

## 📸 Screenshots

Here are some previews of the application:

### Home Page
[Home](./assets/Home.png)

### Add Route
[AddRoute](./assets/Add Route.png)

### Planned status
![Planned](./assets/Planned.png)

### OnGoing status
![OnGoing](./assets/Ongoing.png)

### Search Mumbai
![Search Mumbai](./assets/Search mumbai.png)

### Delete Paris
![Delete Paris](./assets/Delete Paris.png)

### After Delete No Paris Data Show
![No Paris Data](./assets/No Paris Data Show.png)

### Add Gujrat
![Add Gujrat](./assets/Add Gujrat.png)

### After add Search Gujrat
![After add Search Gujrat](./assets/Completed.png)

### Page
![Page](./assets/Page.png)

### Json Data for Backend
![Json Data](./assets/json data.png)

---

## ⚙️ Installation

Clone the repo:

```bash
git clone https://github.com/Hariom2312/manage-trip.git
cd manage-trip

Backend Code: 
http://localhost:5000/trips

```bash
npx json-server src\data\trips.json --port 5000
