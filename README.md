# ntry

[![npm](https://img.shields.io/npm/v/ntry)](https://www.npmjs.com/package/ntry)
[![License](https://img.shields.io/npm/l/ntry)](MIT)
[![TypeScript](https://img.shields.io/badge/language-typescript-blue)](https://www.typescriptlang.org/)

## Overview

**ntry** An elegant, zero-dependency, and type-safe library for superior error handling in TypeScript.. Eliminate cumbersome try-catch blocks and embrace a cleaner, more readable approach.

## Key Features

- 🚀 **Zero Dependencies**: Lightweight and effortless to integrate.
- 🔒 **Type-Safe**: Harness the power of TypeScript's robust typing system.
- ✨ **Elegant Error Handling**: Manage errors as data for enhanced code clarity.

## Installation

```bash
npm install ntry
```

## Example Comparison

Let's compare how asynchronous error handling is traditionally done using try-catch blocks versus how it can be simplified and improved using **ntry**.

### Traditional Try-Catch

```typescript
async function fetchData() {
  try {
    const data = await someAsyncFunction();

    // Continue processing data
    console.log("Data:", data);
  } catch (error) {
    if (error instanceof SpecificError) {
      // Handle a specific error type
      console.error("Caught SpecificError:", error.message);
    } else {
      // Handle generic errors
      console.error("An unexpected error occurred:", error);

      // Optionally rethrow the error to propagate it
      throw error;
    }
  }
}
```

### Using ntry

```typescript
import { catchError } from "ntry";

async function fetchData() {
  const [err, data] = await catchError(someAsyncFunction());

  if (err) {
    // Handle error gracefully
    console.error("An error occurred:", err);
    return;
  }

  // Continue with data processing
  console.log("Data received:", data);
}
```

### Using ntry with typesafe custom errors

```typescript
import { catchErrorTyped } from "ntry";

async function fetchData() {
  const [err, data] = await catchErrorTyped(someAsyncFunction(), [
    SpecificError,
  ]);

  if (err) {
    // Handle the specific error
    console.error("Caught SpecificError:", err.message);
    return; // Stop execution on error
  }

  // Continue processing data
  console.log("Data:", data);
}
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request to help make ntry even better.
