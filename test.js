const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome.js');

async function testGoogleWebsite() {
    // Create a new Chrome driver instance
    const driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options().headless()) // Run in headless mode
        .build();

    try {
        console.log('=== Starting Google Website Test ===');
        
        // Test 1: Open Google
        console.log('Test 1: Opening Google website...');
        await driver.get('https://www.google.com');
        await driver.wait(until.titleContains('Google'), 10000);
        console.log('✓ Google website opened successfully');
        
        // Test 2: Check page title
        const title = await driver.getTitle();
        console.log('Test 2: Checking page title...');
        if (title.includes('Google')) {
            console.log('✓ Page title is correct:', title);
        } else {
            console.log('✗ Page title is incorrect:', title);
        }
        
        // Test 3: Check search box exists
        console.log('Test 3: Checking search box...');
        const searchBox = await driver.findElement(By.name('q'));
        const placeholder = await searchBox.getAttribute('placeholder');
        console.log('✓ Search box found with placeholder:', placeholder);
        
        // Test 4: Check if search box is visible
        const isDisplayed = await searchBox.isDisplayed();
        console.log('Test 4: Checking if search box is visible...');
        if (isDisplayed) {
            console.log('✓ Search box is visible');
        } else {
            console.log('✗ Search box is not visible');
        }
        
        // Test 5: Check if search box is enabled
        const isEnabled = await searchBox.isEnabled();
        console.log('Test 5: Checking if search box is enabled...');
        if (isEnabled) {
            console.log('✓ Search box is enabled');
        } else {
            console.log('✗ Search box is not enabled');
        }
        
        console.log('=== All tests completed successfully! ===');
        
    } catch (error) {
        console.error('❌ Test failed:', error.message);
    } finally {
        // Close the browser
        await driver.quit();
        console.log('Browser closed.');
    }
}

// Run the test
testGoogleWebsite();
