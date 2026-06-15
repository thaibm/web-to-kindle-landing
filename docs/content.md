# Send Web to Kindle Privacy

**1. Information Collection**
Our extension processes the active tab's web content locally on your device to generate EPUB files. We request access to your Google Identity (email address) solely to authenticate and send these files to your Kindle via your Gmail account.

**2. Data Usage**
All data (including your target Kindle email address and extension preferences) is stored locally on your browser via `chrome.storage`. We do not collect, store, or transmit any of your personal data or browsing history to external servers.

**3. Third-Party Sharing**
We do not sell, trade, or transfer your personal information to outside parties. Your data is strictly used for the core functionality of transmitting web articles to your Kindle.

# Send Web articles to Kindle

Vietnamese version Send Web articles to Kindle 

Send Web articles to Kindle is a Chrome Extension that turns readable web articles, blog posts, or selected text into EPUB files directly inside your browser. You can preview the cleaned article, edit its title and author, download the EPUB, or optionally send it to your Kindle email using your connected Gmail account.

## What does it do?

- Extracts the main content from web pages and removes distractions such as menus, footers, sidebars, ads, and unrelated content.
- Auto-generate a **Table of Contents** from article headings.
- Creates EPUB files from a full article or from selected text on the page.
- Shows a cleaned preview in the Chrome side panel before download.
- Lets you edit the title and author before creating the EPUB.
- Preserves important content structure such as headings, paragraphs, lists, quotes, tables, code blocks, links, figures, and images.
- Creates EPUB files directly in your browser, with no account required and no app server receiving article content.
- Optionally sends the generated EPUB to Kindle through Gmail.

## How to use

1. Open an article page in Chrome.
2. Click the extension icon, or right-click the page and choose `Save article as EPUB`.
3. To save only part of a page, select the text first and choose `Save selected text as EPUB`.
4. Review the cleaned article in the side panel.
5. Edit the title or author if needed.
6. Click `Download EPUB` to save the file to your computer.
7. If you have configured your Kindle email and connected Google, click `Send Web articles to Kindle` to send the EPUB to Kindle.

Downloading EPUB is the core flow and works immediately without login. Google sign-in is only required if you want to send EPUB files directly to Kindle through Gmail.

## Sending EPUB to Kindle

To use direct Kindle delivery:

1. Open the extension Options page.
2. Enter your Kindle email, for example `your-name@kindle.com` or `your-name@free.kindle.com`.
3. Connect your Google account so the extension can send email with Gmail.
4. In Amazon Personal Document Settings, add the connected Gmail address to the Approved Personal Document E-mail List.
5. Return to the article and click `Send Web articles to Kindle`.

The extension can confirm that Gmail accepted and sent the email. Kindle delivery still depends on your Amazon approved sender settings and Amazon's document processing.

## Privacy and data

- EPUB files are created fully locally in your browser.
- Article content is not sent to an app server.
- The extension does not collect, analyze, sell, or store your article content on a server.
- When you use `Download EPUB`, the article is processed in your browser and the file is downloaded directly to your computer.
- The extension only stores required settings such as Kindle email and connected Google email in Chrome `chrome.storage.sync`.
- The current article is held temporarily in the browser session with `chrome.storage.session`.
- If you click `Send Web articles to Kindle`, the generated EPUB is sent through Gmail API using the Google account you connected. This only happens after you trigger the send action.
- The extension only requests the Gmail `gmail.send` permission to send email with the EPUB attachment; it does not need to read your Gmail inbox.

## Features

- Extracts main article content with Defuddle.
- Preserves semantic HTML: `h1`-`h6`, `p`, `ul`, `ol`, `li`, `strong`, `em`, `blockquote`, `pre`, `code`, links, tables, figures, and images.
- Builds a table of contents from article headings.
- Shows a reader-friendly preview in the side panel.
- Generates EPUB files fully client-side with semantic HTML and no custom EPUB CSS.
- Embeds images when they can be fetched by the extension.
- Sends EPUB attachments through Gmail API with `gmail.send`.
- Stores settings in `chrome.storage.sync`.
