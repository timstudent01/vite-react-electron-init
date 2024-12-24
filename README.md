# Project Name

This project is a boilerplate setup for a Vite + React + Electron application, supporting cross-platform builds for macOS, Windows, and Linux.

## Features

- React for building the user interface
- Vite for a fast development server and build tool
- Electron for creating desktop applications
- TypeScript for type-safe development
- Cross-platform builds using `electron-builder`
- ESLint for linting and code quality

## Scripts

The following scripts are defined in the `package.json` file:

### Development

- **`npm run dev`**: Starts the development server for React and Electron simultaneously.
- **`npm run dev:react`**: Runs the Vite development server for React.
- **`npm run dev:electron`**: Transpiles the Electron files and starts the Electron app in development mode.

### Build

- **`npm run build`**: Builds both the React front-end and Electron backend for production.
- **`npm run transpile:electron`**: Transpiles the Electron files using TypeScript.

### Lint

- **`npm run lint`**: Runs ESLint to check the code for style and quality issues.

### Preview

- **`npm run preview`**: Starts a local server to preview the production build.

### Distribution

- **`npm run dist:mac`**: Builds the project for macOS (ARM64 architecture).
- **`npm run dist:win`**: Builds the project for Windows (64-bit architecture).
- **`npm run dist:linux`**: Builds the project for Linux (64-bit architecture).

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development Mode

Run the following command to start the development server and the Electron app:
```bash
npm run dev
```

### Production Build

To build the project for production:
```bash
npm run build
```

### Creating Distributables

To package the application for a specific platform:

- macOS:
  ```bash
  npm run dist:mac
  ```

- Windows:
  ```bash
  npm run dist:win
  ```

- Linux:
  ```bash
  npm run dist:linux
  ```

## File Structure

```
project-root/
├── src/
│   ├── react/        # React application files
│   ├── electron/     # Electron application files
│   └── assets/       # Static assets
├── dist-react/       # Built React files
├── dist/             # Electron builds
├── package.json      # Project configuration and scripts
├── electron-builder.json # Electron Builder configuration
└── tsconfig.json     # TypeScript configuration
```

## Notes

- Ensure you have `node` and `npm` installed.
- For macOS builds, you'll need to run the build command on a macOS machine.
- For code linting, make sure ESLint is properly configured for your environment.


