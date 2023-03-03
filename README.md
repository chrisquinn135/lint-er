# TDS Linter

TDS Lint is a design linter that analyzes a project page and displays a list of layers with inconsistencies in color and font within the design system.

# What is a Design Linter?

A design linter is a software tool that checks design files for inconsistencies and adherence to design standards and guidelines. It analyzes the files using a set of predefined rules from the Trulioo Design System and provides feedback to the designer. For example, the linter may flag a font style that is no longer in use or a color combination that is not used within the design system. It helps maintain consistency in design and can save time and resources in the long run.



It's essential to keep in mind that the linter is only a tool to help you maintain design consistency and quality. While it can catch potential issues early on in the design process, it's not a replacement for good design practices and common sense. It's still up to you to decide whether or not to follow the linter's suggestions, as some design choices may be subjective or depend on the project's needs.



# Known Issues and Bugs:
- Linter is unable to analyze text w/ multiple styles, for now it is located under the "Allow Mixed Style" setting
- Text is only parsed for family, size & weight. Styles such as italics, underline and strikethroughs are not checked for yet.
- Text w/ hidden fills will still display text errors if present.


# What's next in the Future:
- Analyzing tool effectiveness
- Linting for inconsistencies in layer names, spacings, auto layout and more.
- Adding more settings for color & font to cover more use cases


If you encounter any bugs or issues, please don't hesitate to contact the me! Your feedback is incredibly valuable and we'll do our best to address them promptly. Thank you for being a part of the effort to make TDS Lint the best it can be!

## Quickstart

- Run `yarn` to install dependencies.
- Run `yarn build:watch` to start webpack in watch mode.
- Open `Figma` -> `Plugins` -> `Development` -> `Import plugin from manifest...` and choose `manifest.json` file from this repo.

## Toolings

This repo is using:

- React + Webpack
- TypeScript
- Prettier precommit hook
