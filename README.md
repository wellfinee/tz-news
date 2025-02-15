# tz-news
REQUIRED

1. Submitting forms (validation, collecting data from the form, the ability to attach and send multiple files). To send forms, use standard jquery and JavaScript.
2. Page structure - a good practice would be to split the layout pages so that there is a separate file for the header and footer, then the remaining files have only their blocks.
3. The points in the task are steps, at the output it is expected to see only 5 html pages (css files, js images, etc. in these 5 files do not count): full (with header, content and footer - 2 pcs.) + for each page make an analogue purely with their content (without header footer and modals - 2 pcs.) + separately 1 file only with the header, footer and modal windows.


The layout is a reference, there are no modal windows, burgers and maybe some other elements. All of them are made at your discretion.


Link to layout


Upload the completed test task to Yandex disk and send it to the chat on hh ru


1. Cross-browser adaptive layout (HTML + CSS + JS)
2. 
Task:
Layout a simple page of a news site with a header, a list of articles and a footer. The page must be adaptive and display correctly in modern browsers (Chrome, Firefox, Edge, Safari).
Requirements:
Use flexbox and grid to build a grid.
The minimum width of the container is 390px, the maximum is 1920px.
Buttons and links must have a hover effect without using JS.

4. Layout of a feedback form with validation (HTML + CSS + JS)
Task:
Layout a form for sending comments to articles with the fields: Name, Email, Message. Also add the ability to upload multiple images (avatar, attachments) and a checkbox "I agree with the publication rules".
Requirements:
Use type="email" to enter email.
All fields must have stylized states :focus, :hover, :invalid.
Validation must work without submitting the form (on submit).
After successful form submission — clear fields, unpin files, delete error messages.
Modular window about successful submission.

6. Drop-down mobile menu (HTML + CSS + JS)
Task:
Create an adaptive burger menu for navigating through website sections.
Requirements:
Without using jQuery.
Animation must be done via CSS (transition, transform).

When opening pages on the mobile version, the menu sections must be hidden, instead of them a drop-down list button

8. Layout of a news list with adaptation (HTML + CSS)
Task:
Layout a news list in which elements are automatically rearranged into two columns on screens wider than 768px and into one column on mobile devices.
Requirements:
Use flexbox or grid for adaptation.
Each news item should contain a title, publication date, text preview, and image thumbnail.
On hover, the list items should change background color.
The layout has buttons (News Video Media and Years with archive) no functionality is required for them, it is enough to simply display the buttons.

10. Layout of news cards (HTML + CSS)
Task:
Create stylized news cards with a title, date, image, and brief description.
Requirements:
Cards should change background color when hovered.
In a row, 3 cards (on desktop), 2 (on tablet), 1 (on mobile).
Support for adaptability.

12. Drop-down list of categories (HTML + CSS + JS)
Task:
Create a custom drop-down list (select) for selecting a news category without using <select>. This list appears when you hover over the “News” inscription in the main menu.
Requirements:
Use div or ul/li.
It should be possible to select an element.
It should close when clicking outside the list.

14. Layout of news cards with adaptability (HTML + CSS)
Task:
Create news cards with an image, title, short description and a "Read more" button.
Requirements:
The "Read more" button should change color when hovered over.
Adaptability: 3-4 cards in a row (on desktop), 2 (on tablet), 1 (on mobile).
Animation of the appearance of cards when the page loads.
15. Layout of a pop-up modal window (HTML + CSS + JS)
Task:
Create a modal window for viewing full information about the news. The window should appear when you click on the "Read more" button and close when you click on the cross or outside the window.
Requirements:
Use pure JS.
Darkening the background when opening.
Appearance animation (opacity, transform).

17. Lazy loading of images (HTML + CSS + JS)
Task:
Implement a mechanism for lazy loading of images (Lazy Load) using IntersectionObserver, so as not to load news images until they are in the visible area.
Requirements:
In HTML, images must have a data-src, which is substituted into src when they appear in the visible area.
Implementation without third-party libraries.
There must be handling of loading errors (onerror).

19. Layout of the main page of a news site with BEM support (HTML + CSS)
Task:
Layout the main page of a news portal with blocks:
Header with logo and navigation.
List of latest news.
Popular news.
Sidebar with tags and archive.
Footer with contacts.
Requirements:
The code must comply
