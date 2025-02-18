# Code Review Assistant with Gemini AI

## Overview
A mini project that leverages the Gemini AI API to provide automated code reviews for code snippets. This tool helps developers get instant feedback on their code quality, best practices, and potential improvements.

## Features
- Instant code review analysis
- Best practices suggestions
- Code optimization recommendations
- Security vulnerability checks
- Style guide conformance feedback

## Setup
1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Configure your Gemini AI API key:
```bash
export GEMINI_API_KEY=your_api_key_here
```

## Usage
```javascript
// Example usage
const codeReviewer = new CodeReviewer();
const review = await codeReviewer.analyze(codeSnippet);
```

## API Reference
### `analyze(codeSnippet)`
Takes a code snippet as input and returns a detailed code review.

## Contributing
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## License
MIT License

## Contact
For questions and support, please open an issue in the repository.