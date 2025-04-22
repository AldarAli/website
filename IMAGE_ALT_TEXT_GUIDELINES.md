# Image Alt Text Guidelines

This document provides guidelines for adding alternative text (alt text) to images on the website to improve SEO and accessibility.

## Why Alt Text Matters

1. **Accessibility**: Screen readers use alt text to describe images to visually impaired users
2. **SEO Benefits**: Search engines use alt text to understand image content
3. **Better User Experience**: If images fail to load, alt text provides context
4. **Legal Compliance**: Many jurisdictions require accessible web content

## How to Add Alt Text

### In Markdown Content

```markdown
![Descriptive alt text here](image.jpg "Optional caption")
```

For more control, use the figure shortcode:

```markdown
{{< figure 
    src="image.jpg"
    alt="Detailed description of what the image shows and its context"
    caption="Optional caption that appears below the image" 
>}}
```

### In Gallery Shortcode

```html
{{< gallery >}}
  <img src="image1.jpg" class="grid-w33" alt="Description of image 1" />
  <img src="image2.jpg" class="grid-w33" alt="Description of image 2" />
  <img src="image3.jpg" class="grid-w33" alt="Description of image 3" />
{{< /gallery >}}
```

### For Featured Images in Articles

Add alt text in your front matter:

```yaml
---
title: "Your Post Title"
date: 2023-04-22
alt: "Descriptive text for the featured image"
# OR
featureimagealt: "Descriptive text for the featured image"
---
```

## Guidelines for Writing Good Alt Text

1. **Be Specific and Descriptive**: Describe the key elements of the image
2. **Keep it Concise**: Aim for 125 characters or less, but be descriptive
3. **Context Matters**: Consider how the image relates to the surrounding content
4. **Avoid Redundancy**: Don't start with phrases like "Image of..." or "Picture of..."
5. **Include Keywords**: When appropriate, include relevant keywords
6. **Decorative Images**: For purely decorative images, use empty alt text (`alt=""`)

## Examples

Poor alt text:
- "Image"
- "DSC0001234.jpg"
- "Screenshot"

Good alt text:
- "Person typing on laptop with code visible on screen"
- "Cybersecurity concept showing lock and digital interface"
- "Network diagram showing client-server architecture"