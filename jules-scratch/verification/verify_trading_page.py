from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    page.goto("http://localhost:5173")

    # Log in
    page.get_by_label("Email Address").fill("root@email.com")
    page.get_by_label("Password").fill("password")
    page.get_by_role("button", name="Sign In").click()

    # Navigate to Trading tab
    page.get_by_role("button", name="Trading").click()

    # Wait for loading spinner to disappear
    expect(page.locator(".animate-spin")).to_have_count(0)

    # Take a screenshot
    page.screenshot(path="jules-scratch/verification/verification.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
