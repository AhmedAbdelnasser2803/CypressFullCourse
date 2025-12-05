# Cypress Google Project

This project demonstrates how to use Cypress WebDriver to automate opening and testing the Google website.

## Prerequisites

- Node.js (version 14 or higher)
- Chrome browser installed
- ChromeDriver (will be installed automatically via npm)

## Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd Cypress-google-project
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
4. start local server to be able to open the HTML file 

## Usage

### Basic Usage (Open Google)

To simply open Google website:
```bash
npm start
```
or
```bash
node index.js
```

### Run Tests

To run comprehensive tests on Google website:
```bash
npm test
```
or
```bash
node test.js
```

## Project Structure

```
Cypress-google-project/
├── index.js          # Main script to open Google
├── test.js           # Comprehensive test suite
├── package.json      # Project dependencies
└── README.md         # This file
```

## Features

- Opens Google website using Cypress WebDriver
- Runs in headless mode (no browser window)
- Comprehensive test suite
- Error handling
- Automatic browser cleanup

## Test Cases

The test suite includes:
1. Opening Google website
2. Verifying page title
3. Checking search box existence
4. Verifying search box visibility
5. Confirming search box is enabled

## Troubleshooting

### ChromeDriver Issues

If you encounter ChromeDriver issues:

1. Make sure Chrome browser is installed
2. Update Chrome to the latest version
3. Clear npm cache: `npm cache clean --force`
4. Reinstall dependencies: `rm -rf node_modules && npm install`

### Permission Issues

If you get permission errors:
```bash
sudo chmod +x node_modules/chromedriver/lib/chromedriver/chromedriver
```

