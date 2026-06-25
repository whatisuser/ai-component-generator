from playwright.sync_api import sync_playwright

def run_cuj(page):
    page.goto("http://localhost:3000")
    page.wait_for_timeout(1000)

    # Hover over generate button while empty to show disabled tooltip
    generate_btn = page.locator("button", has_text="Generate component")
    generate_btn.hover()
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/verification/screenshots/empty_disabled.png")

    # Fill in the form
    textarea = page.locator("#prompt")
    textarea.fill("A simple test component")
    page.wait_for_timeout(500)

    # Intercept API to add a delay so we can capture loading state
    def handle_route(route):
        import time
        time.sleep(3)
        route.continue_()

    page.route("**/api/generate", handle_route)

    # Click generate
    generate_btn.click()
    page.wait_for_timeout(1000)

    # Hover over textarea to show disabled state during loading
    textarea.hover()
    page.wait_for_timeout(1000)

    # Take screenshot while generating
    page.screenshot(path="/home/jules/verification/screenshots/generating.png")

    # Wait for completion
    page.wait_for_timeout(3000)

    # Check reload preview button disabled state since no preview available
    reload_btn = page.locator("button", has_text="Reload preview")
    if reload_btn.is_visible():
        reload_btn.hover()
        page.wait_for_timeout(1000)
        page.screenshot(path="/home/jules/verification/screenshots/reload_disabled.png")

    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
