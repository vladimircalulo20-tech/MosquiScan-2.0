/* ======================================
   GENERAL SETTINGS
====================================== */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: #f3f7f4;
  color: #1f2937;
  line-height: 1.6;
}

/* ======================================
   HEADER
====================================== */

header {
  background: #146c43;
  color: white;
  padding: 28px 20px;
  text-align: center;
}

.logo-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.mosquito-icon {
  font-size: 38px;
}

.logo-title h1 {
  font-size: 35px;
  letter-spacing: 0.5px;
}

.header-content p {
  margin-top: 7px;
  font-size: 15px;
}

/* ======================================
   MAIN CONTAINER
====================================== */

.container {
  width: 92%;
  max-width: 1100px;
  margin: 25px auto;
}

/* ======================================
   INTRODUCTION
====================================== */

.intro {
  background: white;
  padding: 25px;
  border-radius: 12px;
  margin-bottom: 25px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.08);
}

.intro h2 {
  color: #146c43;
  margin-bottom: 12px;
}

.intro p {
  margin-bottom: 10px;
}

.notice {
  background: #fff8e1;
  border-left: 4px solid #d99a06;
  color: #684f00;
  padding: 10px;
  border-radius: 5px;
}

/* ======================================
   DASHBOARD
====================================== */

.dashboard {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 25px;
}

.card {
  background: white;
  padding: 22px;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.08);
  border-top: 5px solid #146c43;
}

.possible-card {
  border-top-color: #dc2626;
}

.other-card {
  border-top-color: #16a34a;
}

.card h3 {
  color: #4b5563;
  font-size: 15px;
  margin-bottom: 8px;
}

.card p {
  color: #146c43;
  font-size: 32px;
  font-weight: bold;
}

.possible-card p {
  color: #dc2626;
}

.other-card p {
  color: #16a34a;
}

/* ======================================
   SECTIONS
====================================== */

.section {
  background: white;
  padding: 25px;
  border-radius: 12px;
  margin-bottom: 25px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.08);
}

.section h2 {
  color: #146c43;
  margin-bottom: 15px;
  border-bottom: 2px solid #d5e9dc;
  padding-bottom: 8px;
}

.map-description,
.helper-text {
  color: #4b5563;
  margin-bottom: 12px;
}

/* ======================================
   FORM ELEMENTS
====================================== */

label {
  display: block;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 6px;
}

input[type="file"],
input[type="number"],
input[type="date"],
textarea {
  width: 100%;
  padding: 11px;
  border: 1px solid #cbd5e1;
  border-radius: 7px;
  font-family: inherit;
  font-size: 14px;
  background: white;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #146c43;
  box-shadow: 0 0 0 2px rgba(20, 108, 67, 0.12);
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

/* ======================================
   IMAGE PREVIEW
====================================== */

.preview-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

#imagePreview {
  display: none;
  width: 100%;
  max-width: 550px;
  max-height: 350px;
  object-fit: contain;
  margin: 18px auto;
  border: 2px solid #d5e9dc;
  border-radius: 10px;
  background: #f8fafc;
}

/* ======================================
   BUTTONS
====================================== */

button {
  border: none;
  border-radius: 7px;
  padding: 11px 18px;
  margin-top: 15px;
  background: #146c43;
  color: white;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s ease;
}

button:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

button:disabled {
  background: #9ca3af;
  cursor: not-allowed;
  transform: none;
}

.danger-button {
  background: #b91c1c;
  margin-top: 0;
}

/* ======================================
   RESULT BOX
====================================== */

.result-box {
  background: #eef7f0;
  border-left: 5px solid #146c43;
  border-radius: 8px;
  padding: 18px;
  margin-top: 20px;
}

.result-box h3 {
  color: #146c43;
  margin-bottom: 8px;
}

#resultText {
  font-size: 19px;
  font-weight: bold;
}

#confidenceText {
  color: #4b5563;
  margin-top: 5px;
}

/* ======================================
   LEAFLET MAP
====================================== */

#map {
  width: 100%;
  height: 450px;
  margin-top: 15px;
  border: 2px solid #d5e9dc;
  border-radius: 10px;
  overflow: hidden;
}

/* ======================================
   MAP LEGEND
====================================== */

.legend {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 15px;
  font-size: 14px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 7px;
}

.legend-color {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
}

.red {
  background: #dc2626;
}

.green {
  background: #16a34a;
}

/* ======================================
   ACTIVITY LOG
====================================== */

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}

#activityLog {
  margin-top: 15px;
}

.log-entry {
  background: #f8fafc;
  border-left: 4px solid #146c43;
  padding: 14px;
  margin-bottom: 10px;
  border-radius: 6px;
  font-size: 14px;
}

.log-entry strong {
  color: #146c43;
}

.log-entry small {
  color: #6b7280;
}

.empty-log {
  color: #6b7280;
  font-style: italic;
}

/* ======================================
   FOOTER
====================================== */

footer {
  background: #146c43;
  color: white;
  text-align: center;
  padding: 20px;
  margin-top: 30px;
  font-size: 13px;
}

footer p {
  margin: 3px 0;
}

/* ======================================
   RESPONSIVE DESIGN
====================================== */

@media (max-width: 768px) {
  .logo-title h1 {
    font-size: 28px;
  }

  .mosquito-icon {
    font-size: 30px;
  }

  .container {
    width: 94%;
  }

  .dashboard {
    grid-template-columns: 1fr;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .section,
  .intro {
    padding: 18px;
  }

  #map {
    height: 350px;
  }

  .section-heading {
    align-items: flex-start;
    flex-direction: column;
  }
}

