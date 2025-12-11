

# eSignature App

A simple React eSignature application built with CodeSandbox that allows users to create and customize digital signatures with names and dates.

## Features
- Live signature preview
- Customizable signature text
- Date selection
- Responsive design
- Clean, modern UI

## 🛠️ Built With
- **React 18+** - Frontend library
- **JavaScript ES6+** - Programming language
- **CSS3** - Styling
- **Node.js** - Runtime environment

## 📁 Project Structure
```
/
├── src/
│   ├── Projects/
│   │   └── 01-Esignature/
│   │       ├── EsignatureApp.jsx     # Main application component
│   │       └── components/
│   │           └── Title.jsx         # Reusable title component
│   ├── App.js                        # App root component
│   ├── index.js                      # Application entry point
│   ├── app.css                       # Global styles
│   └── index.html                    # HTML template
├── package.json                      # Dependencies and scripts
├── sandbox.config.json               # Sandbox configuration
└── README.md                         # This file
```

## 🚦 Getting Started

### Running Locally (if cloned from Sandbox)

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/esignature-app.git
cd esignature-app
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm start
```

## 📝 How to Use

1. **Enter your name** in the text input field at the bottom
2. **Select a date** using the date picker
3. **Watch your signature update** in real-time at the top
4. The signature will display with the format: "Your Name" and "Selected Date"

## 🎯 Components

### `EsignatureApp` (Main Component)
- Manages state using React hooks (`useState`)
- Handles input changes for name and date
- Applies custom inline styles
- Renders the signature preview

### `Title` (Reusable Component)
- Displays customizable titles
- Accepts `classes` and `text` as props
- Provides fallback defaults

```

This README clearly indicates that you used Sandbox for development and provides appropriate links and instructions for both Sandbox and local development.
