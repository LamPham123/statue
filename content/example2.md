Example Plain Text File at Root Level

This file demonstrates that .txt files work at the root of the content directory, not just in subdirectories like docs/, blog/, or legal/.

How It Works

When you place a file at content/example.txt, Statue automatically generates a route at /example. No need to create a special folder or configure anything - it just works.

This is exactly how .md files have always worked, and now .txt files work the same way.

Use Cases for Root-Level Files

Root-level .txt files are perfect for:

Simple standalone pages that don't fit into a specific category
Quick documentation or notes
Testing and examples
Temporary content that might move later

The content is processed as plain text and converted into clean, styled paragraphs that match your site's theme. Each paragraph is separated by a blank line, making it easy to structure your content naturally.

Writing in Plain Text

There's no special syntax to learn. Just write naturally:

Each blank line creates a new paragraph.
Single line breaks within a paragraph are preserved.
Everything is automatically escaped for security.

Your text gets wrapped in proper HTML tags and styled according to your site's theme, but you never have to think about that while writing.

Integration with Layouts

This page uses the default layout since it's not in a special directory like docs/ or blog/. But the same .txt file format works everywhere:

In docs/ - Gets the docs layout with sidebar navigation
In blog/ - Gets the blog layout with author and date metadata
At root - Gets the clean default layout you're seeing now

The layout system detects where the file lives and applies the appropriate styling automatically.

That's it - native .txt file support in Statue SSG!
