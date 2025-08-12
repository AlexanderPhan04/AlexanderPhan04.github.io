# Alexander Phan Portfolio

A modern, responsive portfolio website built with vanilla HTML, CSS, and JavaScript. Inspired by [satriabahari.my.id](https://satriabahari.my.id) but redesigned for Alexander Phan.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between dark and light modes with theme persistence
- **Multi-language Support**: Switch between English and Vietnamese
- **Smooth Animations**: CSS transitions and AOS (Animate On Scroll) library
- **Modern UI**: Clean, professional design with glassmorphism effects
- **Interactive Elements**: Hover effects, smooth scrolls, and engaging interactions

## Sections

1. **Home**: Introduction, skills showcase, and featured sections (Bento Grid)
2. **About**: Personal introduction and background
3. **Projects**: Showcase of development projects with live demos and source code
4. **Achievements**: Certificates and professional milestones
5. **Contact**: Social media links and contact information

## Technologies Used

- HTML5
- CSS3 (with custom utility classes inspired by Tailwind CSS)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- AOS (Animate On Scroll) Library
- Google Fonts (Inter)

## Getting Started

1. **Open directly in browser**: Simply double-click `index.html` or drag it into your browser
2. **Customize content**: Replace placeholder information with your actual details:

   - Update personal information in `index.html`
   - Replace placeholder images in the `images/` folder
   - Modify projects, achievements, and skills data in `scripts/main.js`
   - Update contact information and social links

3. **Customize styling**:

   - Modify colors and themes in `styles/main.css`
   - Adjust responsive breakpoints as needed
   - Update animations and transitions

4. **Deploy**:
   - This is a static website that can be deployed to GitHub Pages, Netlify, Vercel, or any web hosting service
   - For GitHub Pages: Push to your repository and enable GitHub Pages in settings

## File Structure

```
AlexanderPhan.github.io/
│
├── index.html              # Main HTML file
├── styles/
│   └── main.css            # Main stylesheet
├── scripts/
│   └── main.js             # Main JavaScript file
├── images/
│   └── (your images here)  # Profile and project images
├── favicon.ico             # Website favicon
└── README.md               # This file
```

## Customization Guide

### Adding New Projects

Edit the `projects` array in `scripts/main.js`:

```javascript
const projects = [
  {
    title: "Your Project Name",
    description: "Project description",
    image: "path/to/your/image.jpg",
    technologies: ["Tech1", "Tech2", "Tech3"],
    github: "https://github.com/yourusername/project",
    demo: "https://your-demo-url.com",
  },
  // Add more projects...
];
```

### Adding New Skills

Edit the `skills` array in `scripts/main.js`:

```javascript
const skills = [
  { name: "Skill Name", icon: "fas fa-icon-name", color: "#hexcolor" },
  // Add more skills...
];
```

### Updating Personal Information

1. Update the profile section in `index.html`
2. Modify translations in `scripts/main.js` for both English and Vietnamese
3. Replace profile image: `images/alexander.jpg`

### Customizing Colors and Themes

Edit the color variables and classes in `styles/main.css`. The CSS uses a utility-first approach similar to Tailwind CSS.

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Internet Explorer 11+ (with some limitations)

## Performance

- Optimized for fast loading
- Minimal external dependencies
- Compressed assets
- Lazy loading for images (can be implemented)

## SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt attributes for images
- Structured data (can be added)

## Accessibility

- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus indicators
- Semantic HTML elements

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Original design inspiration from [Satria Bahari](https://satriabahari.my.id)
- Icons by [Font Awesome](https://fontawesome.com)
- Fonts by [Google Fonts](https://fonts.google.com)
- Animations by [AOS Library](https://michalsnik.github.io/aos/)

## Contributing

Feel free to fork this project and customize it for your own use. If you make improvements that could benefit others, pull requests are welcome!

## Support

If you have questions or need help customizing this portfolio, feel free to open an issue or reach out via the contact form on the website.

---

**Happy coding!** 🚀
